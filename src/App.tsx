import { ConvexReactClient } from "convex/react";
import AdminApp from "./admin/AdminApp";

export default function App({ client }: { client: ConvexReactClient }) {
  return <AdminApp client={client} />;
}
