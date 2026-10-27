import { ConvexReactClient } from "convex/react";
import { makeFunctionReference } from "convex/server";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";

/**
 * Connects the original dashboard script (src/admin/legacy/dashboard.js) to Convex.
 *
 * The dashboard was written against synchronous localStorage: getData(key) / setData(key, value).
 * This keeps a live local copy of everything, fed by a Convex subscription, so reads stay
 * synchronous. Writes update the local copy right away and send only the records that
 * changed, so two devices editing different records don't overwrite each other.
 */

type Files = Record<string, { name: string; url: string | null }>;
type Snapshot = {
  collections: Record<string, Record<string, unknown>[]>;
  settings: Record<string, unknown>;
  files: Files;
};
export type Me = { email: string; role: "admin" | "manager" };

export type Bridge = ReturnType<typeof createBridge>;

/** JSON with sorted keys — Convex stores object keys sorted, so plain JSON.stringify would differ. */
function stable(v: unknown): string {
  if (Array.isArray(v)) return "[" + v.map(stable).join(",") + "]";
  if (v && typeof v === "object") {
    return (
      "{" +
      Object.keys(v)
        .sort()
        .filter((k) => (v as Record<string, unknown>)[k] !== undefined)
        .map((k) => JSON.stringify(k) + ":" + stable((v as Record<string, unknown>)[k]))
        .join(",") +
      "}"
    );
  }
  return JSON.stringify(v ?? null);
}

/** Strip undefined / functions the same way the old localStorage JSON round-trip did. */
const plain = <T,>(v: T): T => JSON.parse(JSON.stringify(v));

export function createBridge(client: ConvexReactClient, me: Me, signOut: () => Promise<void>) {
  const data: Record<string, unknown> = {};
  // What the server has for each record, keyed collection → record id → stable JSON
  const synced: Record<string, Map<string, string>> = {};
  const pending: Record<string, number> = {};
  let lastServer: Snapshot | null = null;
  let files: Files = {};
  let inFlight = 0;

  const bridge = {
    me,
    onChange: null as null | (() => void),

    get(key: string): unknown {
      return data[key];
    },

    set(key: string, value: unknown) {
      if (Array.isArray(value)) {
        const prev = synced[key] ?? new Map<string, string>();
        const next = new Map<string, string>();
        const upserts: unknown[] = [];
        for (const item of plain(value) as Record<string, unknown>[]) {
          const rid = String(item?.id ?? "");
          if (!rid) continue;
          const json = stable(item);
          next.set(rid, json);
          if (prev.get(rid) !== json) upserts.push(item);
        }
        const deletes = [...prev.keys()].filter((rid) => !next.has(rid));
        data[key] = value;
        synced[key] = next;
        if (upserts.length || deletes.length) {
          track(key, client.mutation(api.portfolio.apply, { collection: key, upserts, deletes }));
        }
      } else {
        data[key] = value;
        track(key, client.mutation(api.portfolio.setSetting, { key, value: plain(value) ?? null }));
      }
    },

    files: () => files,

    async uploadRaw(file: File): Promise<Id<"_storage">> {
      const url = await client.mutation(api.portfolio.generateUploadUrl, {});
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": file.type || "application/octet-stream" },
        body: file,
      });
      if (!res.ok) throw new Error("Upload failed (" + res.status + ")");
      const { storageId } = await res.json();
      return storageId;
    },

    async uploadFile(rid: string, file: File) {
      const storageId = await bridge.uploadRaw(file);
      await client.mutation(api.portfolio.attachFile, { rid, name: file.name, storageId });
    },

    removeFile: (rid: string) => client.mutation(api.portfolio.removeFile, { rid }),

    // Generic access for the website admin panels (src/admin/legacy/website.js)
    query: (name: string, args: Record<string, unknown>) =>
      client.query(makeFunctionReference<"query">(name), args),
    mutation: (name: string, args: Record<string, unknown>) =>
      client.mutation(makeFunctionReference<"mutation">(name), args),
    watch(name: string, args: Record<string, unknown>, cb: (v: unknown) => void) {
      const w = client.watchQuery(makeFunctionReference<"query">(name), args);
      const fire = () => {
        try {
          cb(w.localQueryResult());
        } catch (e) {
          console.error(name, e);
        }
      };
      fire();
      return w.onUpdate(fire);
    },

    async signOut() {
      await signOut();
      window.location.href = "/admin";
    },
  };

  function setSyncStatus() {
    const dot = document.getElementById("sync-dot");
    const lbl = document.getElementById("sync-lbl");
    if (dot) dot.className = "sync-dot" + (inFlight ? " busy" : "");
    if (lbl) lbl.textContent = inFlight ? "Saving…" : "Synced";
  }

  function track(key: string, p: Promise<unknown>) {
    pending[key] = (pending[key] ?? 0) + 1;
    inFlight++;
    setSyncStatus();
    p.catch((e) => {
      console.error(e);
      const msg = String(e?.message ?? e).includes("access")
        ? "You don't have permission to change this"
        : "Couldn't save — check your connection";
      (window as unknown as { toast?: (m: string, t: string) => void }).toast?.(msg, "error");
    }).finally(() => {
      pending[key]--;
      inFlight--;
      setSyncStatus();
      // Server updates for this key were held back while we were writing; catch up now.
      if (!pending[key] && lastServer) applyServer(lastServer, key);
    });
  }

  function applyServer(snap: Snapshot, onlyKey?: string) {
    let changed = false;
    const keys = onlyKey ? [onlyKey] : [...new Set([...Object.keys(snap.collections), ...Object.keys(synced)])];
    for (const key of keys) {
      if (!(key in snap.collections) && !(key in synced)) continue; // a setting, handled below
      if (pending[key]) continue; // our own write is on its way; don't flicker back
      const rows = snap.collections[key] ?? [];
      const map = new Map(rows.map((r) => [String(r.id), stable(r)]));
      const prev = synced[key];
      if (!prev || prev.size !== map.size || [...map].some(([k, v]) => prev.get(k) !== v)) {
        data[key] = rows.map(plain);
        synced[key] = map;
        changed = true;
      }
    }
    const settingKeys = onlyKey ? (onlyKey in snap.settings ? [onlyKey] : []) : Object.keys(snap.settings);
    for (const key of settingKeys) {
      if (pending[key]) continue;
      if (stable(data[key]) !== stable(snap.settings[key])) {
        data[key] = plain(snap.settings[key]);
        changed = true;
      }
    }
    if (!onlyKey && stable(files) !== stable(snap.files)) {
      files = snap.files;
      changed = true;
    }
    if (changed) bridge.onChange?.();
  }

  const ready = new Promise<void>((resolve, reject) => {
    const watch = client.watchQuery(api.portfolio.load, {});
    const onUpdate = () => {
      let snap: Snapshot | undefined;
      try {
        snap = watch.localQueryResult() as Snapshot | undefined;
      } catch (e) {
        reject(e);
        return;
      }
      if (!snap) return;
      lastServer = snap;
      applyServer(snap);
      resolve();
    };
    watch.onUpdate(onUpdate);
    onUpdate();
  });

  return { bridge, ready };
}
