import { useState } from "react";
import { useAuthActions } from "@convex-dev/auth/react";
import { ConvexReactClient, useConvexAuth, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import LegacyDashboard from "./LegacyDashboard";
import "./auth.css";

export default function AdminApp({ client }: { client: ConvexReactClient }) {
  const { isLoading, isAuthenticated } = useConvexAuth();
  const me = useQuery(api.users.me, isAuthenticated ? {} : "skip");
  document.title = "Admin · PropManager";

  if (isLoading || (isAuthenticated && me === undefined)) return <Splash text="Loading…" />;
  if (!isAuthenticated || !me) return <SignIn />;
  if (!me.role) return <Pending email={me.email} />;
  return <LegacyDashboard client={client} me={{ email: me.email, role: me.role }} />;
}

function Splash({ text }: { text: string }) {
  return (
    <div className="auth-page">
      <div className="auth-splash">{text}</div>
    </div>
  );
}

function SignIn() {
  const { signIn } = useAuthActions();
  const [flow, setFlow] = useState<"signIn" | "signUp">("signIn");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  return (
    <div className="auth-page">
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
                  ? "Wrong email or password."
                  : msg.includes("already exists")
                    ? "That email already has an account — sign in instead."
                    : "Couldn't create the account. Passwords need at least 8 characters.",
              );
            })
            .finally(() => setBusy(false));
        }}
      >
        <div className="auth-brand">
          <div className="auth-icon">PM</div>
          <div>
            <div className="auth-title">PropManager</div>
            <div className="auth-sub">Owner &amp; team portal</div>
          </div>
        </div>
        <h1>{flow === "signIn" ? "Sign in" : "Create an account"}</h1>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            autoComplete={flow === "signIn" ? "current-password" : "new-password"}
            minLength={8}
            required
          />
        </label>
        {error && <div className="auth-error">{error}</div>}
        <button className="auth-btn" type="submit" disabled={busy}>
          {busy ? "Please wait…" : flow === "signIn" ? "Sign in" : "Create account"}
        </button>
        <button
          type="button"
          className="auth-link"
          onClick={() => {
            setFlow(flow === "signIn" ? "signUp" : "signIn");
            setError(null);
          }}
        >
          {flow === "signIn" ? "New here? Create an account" : "Already have an account? Sign in"}
        </button>
        <a className="auth-link" href="/">
          ← Back to website
        </a>
      </form>
    </div>
  );
}

function Pending({ email }: { email: string }) {
  const { signOut } = useAuthActions();
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-brand">
          <div className="auth-icon">…</div>
          <div>
            <div className="auth-title">Waiting for access</div>
            <div className="auth-sub">{email}</div>
          </div>
        </div>
        <p className="auth-text">
          Your account is created. An admin needs to give you access in <strong>Team &amp; Access</strong>{" "}
          before you can see the dashboard. This page updates by itself once they do.
        </p>
        <button className="auth-btn" onClick={() => void signOut()}>
          Sign out
        </button>
        <a className="auth-link" href="/">
          ← Back to website
        </a>
      </div>
    </div>
  );
}
