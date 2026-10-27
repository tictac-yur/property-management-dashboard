import { useEffect, useRef, useState } from "react";
import { ConvexReactClient } from "convex/react";
import { useAuthActions } from "@convex-dev/auth/react";
import Chart from "chart.js/auto";
import { createBridge, Me } from "./bridge";
import markup from "./legacy/dashboard.html?raw";
import css from "./legacy/dashboard.css?raw";
import dashboardJs from "./legacy/dashboard.js?raw";
import teamJs from "./legacy/team.js?raw";

type Win = Window & { Chart?: unknown; PM?: unknown; __pmRoot?: HTMLElement };

/**
 * Mounts the original dashboard (markup + script) once per page load and wires it to Convex.
 * The script uses inline onclick="..." handlers, so it runs as a classic global script.
 */
export default function LegacyDashboard({ client, me }: { client: ConvexReactClient; me: Me }) {
  const host = useRef<HTMLDivElement>(null);
  const { signOut } = useAuthActions();
  const [error, setError] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(!!(window as Win).__pmRoot);

  useEffect(() => {
    const w = window as Win;
    if (w.__pmRoot) {
      host.current!.appendChild(w.__pmRoot);
      return;
    }
    const root = document.createElement("div");
    root.innerHTML = markup;
    w.__pmRoot = root;

    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);

    const { bridge, ready } = createBridge(client, me, signOut);
    w.Chart = Chart;
    w.PM = bridge;

    ready
      .then(() => {
        host.current!.appendChild(root);
        const script = document.createElement("script");
        script.textContent = dashboardJs + "\n;\n" + teamJs;
        document.body.appendChild(script);
        setLoaded(true);
      })
      .catch((e) => setError(String(e?.message ?? e)));
  }, []);

  if (error) {
    return (
      <div style={{ padding: 24, color: "#f56565", fontFamily: "system-ui" }}>
        Couldn't load your data: {error}
      </div>
    );
  }
  return (
    <>
      {!loaded && <div className="auth-page"><div className="auth-splash">Loading your portfolio…</div></div>}
      <div ref={host} />
    </>
  );
}
