import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { requireRole } from "./lib/access";

/** Everything the dashboard needs, in the shape its old localStorage keys used. */
export const load = query({
  args: {},
  handler: async (ctx) => {
    await requireRole(ctx, "manager");
    const collections: Record<string, unknown[]> = {};
    for (const r of await ctx.db.query("records").collect()) {
      (collections[r.collection] ??= []).push(r.data);
    }
    const settings: Record<string, unknown> = {};
    for (const s of await ctx.db.query("settings").collect()) {
      settings[s.key] = s.value;
    }
    const files: Record<string, { name: string; url: string | null }> = {};
    for (const f of await ctx.db.query("attachments").collect()) {
      files[f.rid] = { name: f.name, url: await ctx.storage.getUrl(f.storageId) };
    }
    return { collections, settings, files };
  },
});

/** Applies the record-level changes the dashboard made to one section. */
export const apply = mutation({
  args: {
    collection: v.string(),
    upserts: v.array(v.any()),
    deletes: v.array(v.string()),
  },
  handler: async (ctx, { collection, upserts, deletes }) => {
    await requireRole(ctx, "manager");
    const find = (rid: string) =>
      ctx.db
        .query("records")
        .withIndex("by_collection_rid", (q) => q.eq("collection", collection).eq("rid", rid))
        .first();
    for (const data of upserts) {
      const rid = String(data?.id ?? "");
      if (!rid) continue;
      const existing = await find(rid);
      if (existing) await ctx.db.replace(existing._id, { collection, rid, data });
      else await ctx.db.insert("records", { collection, rid, data });
    }
    for (const rid of deletes) {
      const existing = await find(rid);
      if (existing) await ctx.db.delete(existing._id);
    }
  },
});

export const setSetting = mutation({
  args: { key: v.string(), value: v.any() },
  handler: async (ctx, { key, value }) => {
    await requireRole(ctx, "manager");
    const existing = await ctx.db
      .query("settings")
      .withIndex("by_key", (q) => q.eq("key", key))
      .first();
    if (existing) await ctx.db.patch(existing._id, { value });
    else await ctx.db.insert("settings", { key, value });
  },
});

/* ── File attachments ── */

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    await requireRole(ctx, "manager");
    return await ctx.storage.generateUploadUrl();
  },
});

export const attachFile = mutation({
  args: { rid: v.string(), name: v.string(), storageId: v.id("_storage") },
  handler: async (ctx, { rid, name, storageId }) => {
    await requireRole(ctx, "manager");
    for (const old of await ctx.db
      .query("attachments")
      .withIndex("by_rid", (q) => q.eq("rid", rid))
      .collect()) {
      await ctx.storage.delete(old.storageId);
      await ctx.db.delete(old._id);
    }
    await ctx.db.insert("attachments", { rid, name, storageId });
  },
});

export const removeFile = mutation({
  args: { rid: v.string() },
  handler: async (ctx, { rid }) => {
    await requireRole(ctx, "manager");
    for (const f of await ctx.db
      .query("attachments")
      .withIndex("by_rid", (q) => q.eq("rid", rid))
      .collect()) {
      await ctx.storage.delete(f.storageId);
      await ctx.db.delete(f._id);
    }
  },
});
