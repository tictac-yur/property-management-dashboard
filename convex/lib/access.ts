import { getAuthUserId } from "@convex-dev/auth/server";
import { QueryCtx } from "../_generated/server";
import { Doc } from "../_generated/dataModel";

export type Role = "admin" | "manager";

/** Emails listed in the ADMIN_EMAILS env var (comma separated) are always admins. */
function isBootstrapAdmin(email: string | undefined) {
  if (!email) return false;
  const list = (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
  return list.includes(email.toLowerCase());
}

export function effectiveRole(user: Doc<"users">): Role | null {
  if (isBootstrapAdmin(user.email)) return "admin";
  return user.role ?? null;
}

export async function currentUser(ctx: QueryCtx) {
  const userId = await getAuthUserId(ctx);
  if (!userId) return null;
  return await ctx.db.get(userId);
}

/**
 * Throws unless the signed-in user has at least `min` access.
 * "manager" = can use the dashboard and edit the website; "admin" = also manages the team.
 */
export async function requireRole(ctx: QueryCtx, min: Role) {
  const user = await currentUser(ctx);
  if (!user) throw new Error("Not signed in");
  const role = effectiveRole(user);
  if (!role || (min === "admin" && role !== "admin")) {
    throw new Error("You don't have access to this");
  }
  return user;
}
