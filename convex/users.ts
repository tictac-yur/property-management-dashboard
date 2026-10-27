import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { currentUser, effectiveRole, requireRole } from "./lib/access";
import { role } from "./schema";

/** The signed-in user and their access level (null role = waiting for access). */
export const me = query({
  args: {},
  handler: async (ctx) => {
    const user = await currentUser(ctx);
    if (!user) return null;
    return { _id: user._id, email: user.email ?? "", role: effectiveRole(user) };
  },
});

export const list = query({
  args: {},
  handler: async (ctx) => {
    await requireRole(ctx, "admin");
    const users = await ctx.db.query("users").collect();
    return users.map((u) => ({
      _id: u._id,
      email: u.email ?? "",
      role: effectiveRole(u),
      locked: effectiveRole(u) === "admin" && u.role !== "admin", // granted via ADMIN_EMAILS
      joined: u._creationTime,
    }));
  },
});

export const setRole = mutation({
  args: { userId: v.id("users"), role: v.union(role, v.null()) },
  handler: async (ctx, { userId, role }) => {
    const me = await requireRole(ctx, "admin");
    if (me._id === userId && role !== "admin") {
      throw new Error("You can't remove your own admin access");
    }
    await ctx.db.patch(userId, { role: role ?? undefined });
  },
});
