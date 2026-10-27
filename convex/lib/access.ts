import { getAuthUserId } from "@convex-dev/auth/server";
import { QueryCtx } from "../_generated/server";
import { Doc } from "../_generated/dataModel";

export type Role = "admin" | "manager" | "viewer";

const RANK: Record<Role, number> = { viewer: 1, manager: 2, admin: 3 };

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
 * viewer = can look; manager = can also change data; admin = also manages who has access.
 */
export async function requireRole(ctx: QueryCtx, min: Role) {
  const user = await currentUser(ctx);
  if (!user) throw new Error("Not signed in");
  const role = effectiveRole(user);
  if (!role || RANK[role] < RANK[min]) {
    throw new Error("You don't have access to this");
  }
  return user;
}
