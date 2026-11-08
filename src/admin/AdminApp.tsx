import { useEffect, useState } from "react";
import { useAuthActions } from "@convex-dev/auth/react";
import { ConvexReactClient, useConvexAuth, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import LegacyDashboard from "./LegacyDashboard";
import "./auth.css";

/** Follow the dashboard's saved light/dark choice on the sign-in screens too. */
function useTheme() {
  useEffect(() => {
    let t: string | null = null;
    try {
      t = localStorage.getItem("pm-theme");
    } catch {
      /* private mode */
    }
    if (!t) t = window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    document.documentElement.dataset.theme = t;
  }, []);
}

export default function AdminApp({ client }: { client: ConvexReactClient }) {
  const { isLoading, isAuthenticated } = useConvexAuth();
  const me = useQuery(api.users.me, isAuthenticated ? {} : "skip");
  useTheme();
  useEffect(() => {
    document.title = "PropManager";
  }, []);

  if (isLoading || (isAuthenticated && me === undefined)) return <Splash text="Loading…" />;
  if (!isAuthenticated || !me) return <SignIn />;
  if (!me.role) return <Pending email={me.email} />;
  return <LegacyDashboard client={client} me={{ email: me.email, role: me.role }} />;
}

export function Splash({ text }: { text: string }) {
  return (
    <div className="auth-splash-page">
      <div className="auth-splash">
        <Logo />
        <span className="auth-spinner" aria-hidden="true" />
        <span>{text}</span>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="auth-logo" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V8l7-5 7 5v13" />
        <path d="M10 21v-5h4v5" />
      </svg>
    </div>
  );
}

/** A small, static preview of the dashboard for the brand side of the sign-in page. */
function Preview() {
  const rows: [string, string, string, "paid" | "due" | "late"][] = [
    ["Supalai Lite #29/209", "฿16,000", "Paid", "paid"],
    ["Double Lake #85/85", "฿13,000", "Paid", "paid"],
    ["Lumpini Place #2/79", "฿9,000", "Due in 3d", "due"],
    ["Royal Tower #40/64", "฿5,500", "2d late", "late"],
  ];
  return (
    <div className="pv" aria-hidden="true">
      <div className="pv-head">
        <span>November rent</span>
        <span className="pv-muted">2 of 4 paid</span>
      </div>
      <div className="pv-amt">
        ฿29,000 <span>of ฿43,500</span>
      </div>
      <div className="pv-meter">
        <i style={{ width: "67%" }} />
        <b style={{ width: "13%" }} />
      </div>
      <ul className="pv-list">
        {rows.map(([n, a, s, k]) => (
          <li key={n}>
            <span className="pv-name">{n}</span>
            <span className="pv-num">{a}</span>
            <span className={`pv-pill ${k}`}>{s}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SignIn() {
  const { signIn } = useAuthActions();
  const [flow, setFlow] = useState<"signIn" | "signUp">("signIn");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <div className="auth-page">
      <aside className="auth-brand-side">
        <div className="auth-brand-top">
          <Logo />
          <div>
            <div className="auth-title">PropManager</div>
            <div className="auth-sub">Private property dashboard</div>
          </div>
        </div>
        <div className="auth-pitch">
          <h2>Every unit, every tenant, every baht in one place.</h2>
          <ul className="auth-points">
            <li>See who has paid this month and who is late</li>
            <li>Get reminded before leases, tax and insurance run out</li>
            <li>Share a view-only copy with family</li>
          </ul>
        </div>
        <Preview />
      </aside>

      <main className="auth-form-side">
        <form
          className="auth-card"
          onSubmit={(e) => {
            e.preventDefault();
            setError(null);
            setBusy(true);
            const fd = new FormData(e.currentTarget);
            fd.set("flow", flow);
            signIn("password", fd)
              .catch((err) => {
                const msg = String(err?.message ?? err);
                setError(
                  flow === "signIn"
                    ? "That email and password don't match. Check them and try again."
                    : msg.includes("already exists")
                      ? "That email already has an account. Sign in instead."
                      : "Couldn't create the account. The password needs at least 8 characters.",
                );
              })
              .finally(() => setBusy(false));
          }}
        >
          <div className="auth-mobile-brand">
            <Logo />
            <div className="auth-title">PropManager</div>
          </div>
          <h1>{flow === "signIn" ? "Welcome back" : "Create your account"}</h1>
          <p className="auth-text">
            {flow === "signIn"
              ? "Sign in to see your properties."
              : "After you sign up, the owner chooses what you can see."}
          </p>

          <label className="auth-field">
            <span>Email</span>
            <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required autoFocus />
          </label>
          <label className="auth-field">
            <span>Password</span>
            <div className="auth-pw">
              <input
                name="password"
                type={show ? "text" : "password"}
                autoComplete={flow === "signIn" ? "current-password" : "new-password"}
                minLength={8}
                placeholder={flow === "signIn" ? "Your password" : "At least 8 characters"}
                required
              />
              <button
                type="button"
                className="auth-eye"
                onClick={() => setShow(!show)}
                aria-label={show ? "Hide password" : "Show password"}
              >
                {show ? "Hide" : "Show"}
              </button>
            </div>
          </label>

          {error && (
            <div className="auth-error" role="alert">
              {error}
            </div>
          )}

          <button className="auth-btn" type="submit" disabled={busy}>
            {busy ? "Please wait…" : flow === "signIn" ? "Sign in" : "Create account"}
          </button>

          <div className="auth-switch">
            {flow === "signIn" ? "New here?" : "Already have an account?"}{" "}
            <button
              type="button"
              className="auth-link"
              onClick={() => {
                setFlow(flow === "signIn" ? "signUp" : "signIn");
                setError(null);
              }}
            >
              {flow === "signIn" ? "Create an account" : "Sign in"}
            </button>
          </div>
        </form>
        <p className="auth-foot">Your data is private. Only people the owner approves can see it.</p>
      </main>
    </div>
  );
}

function Pending({ email }: { email: string }) {
  const { signOut } = useAuthActions();
  return (
    <div className="auth-splash-page">
      <div className="auth-card auth-card-solo">
        <div className="auth-wait-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
          </svg>
        </div>
        <h1>Waiting for access</h1>
        <p className="auth-text">
          Your account <strong>{email}</strong> is ready. The owner needs to give you access in{" "}
          <strong>Team &amp; access</strong>. This page opens the dashboard by itself once they do.
        </p>
        <ol className="auth-steps">
          <li className="done">Account created</li>
          <li className="now">Owner gives you access</li>
          <li>You see the dashboard</li>
        </ol>
        <button className="auth-btn secondary" onClick={() => void signOut()}>
          Sign out
        </button>
      </div>
    </div>
  );
}
