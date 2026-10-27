import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { requireRole } from "./lib/access";

const listingFields = {
  title: v.string(),
  propId: v.optional(v.string()),
  type: v.string(),
  location: v.string(),
  rent: v.number(),
  sqm: v.number(),
  bedrooms: v.number(),
  bathrooms: v.number(),
  availability: v.union(v.literal("Available"), v.literal("Coming Soon"), v.literal("Rented")),
  description: v.string(),
  features: v.array(v.string()),
  photos: v.array(v.id("_storage")),
  published: v.boolean(),
  sortOrder: v.number(),
};

export const list = query({
  args: {},
  handler: async (ctx) => {
    await requireRole(ctx, "manager");
    const rows = await ctx.db.query("listings").collect();
    rows.sort((a, b) => a.sortOrder - b.sortOrder);
    return await Promise.all(
      rows.map(async (l) => ({
        ...l,
        photoUrls: await Promise.all(l.photos.map((id) => ctx.storage.getUrl(id))),
      })),
    );
  },
});

export const save = mutation({
  args: { id: v.optional(v.id("listings")), ...listingFields },
  handler: async (ctx, { id, ...fields }) => {
    await requireRole(ctx, "manager");
    if (id) {
      const old = await ctx.db.get(id);
      if (!old) throw new Error("Listing not found");
      // Clean up photos that were removed in the editor.
      for (const p of old.photos) if (!fields.photos.includes(p)) await ctx.storage.delete(p);
      await ctx.db.replace(id, fields);
      return id;
    }
    return await ctx.db.insert("listings", fields);
  },
});

export const setPublished = mutation({
  args: { id: v.id("listings"), published: v.boolean() },
  handler: async (ctx, { id, published }) => {
    await requireRole(ctx, "manager");
    await ctx.db.patch(id, { published });
  },
});

export const remove = mutation({
  args: { id: v.id("listings") },
  handler: async (ctx, { id }) => {
    await requireRole(ctx, "manager");
    const l = await ctx.db.get(id);
    if (!l) return;
    for (const p of l.photos) await ctx.storage.delete(p);
    await ctx.db.delete(id);
  },
});
