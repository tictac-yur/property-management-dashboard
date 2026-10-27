import { lazy, Suspense } from "react";
import { ConvexReactClient } from "convex/react";

// Each side loads only its own code and styles: visitors never download the dashboard,
// and the website's CSS never leaks into the admin portal.
const PublicSite = lazy(() => import("./public/PublicSite"));
const AdminApp = lazy(() => import("./admin/AdminApp"));

/**
 *   /         public website (anyone)
 *   /admin    admin portal (sign in required)
 */
export default function App({ client }: { client: ConvexReactClient }) {
  const isAdmin = window.location.pathname.replace(/\/+$/, "").startsWith("/admin");
  return (
    <Suspense fallback={null}>{isAdmin ? <AdminApp client={client} /> : <PublicSite />}</Suspense>
  );
}
