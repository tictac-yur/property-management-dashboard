import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { requireRole } from "./lib/access";

/** PUBLIC — contact form on the website. */
export const submit = mutation({
  args: {
    name: v.string(),
    contact: v.string(),
    message: v.string(),
    listingId: v.optional(v.id("listings")),
  },
  handler: async (ctx, { name, contact, message, listingId }) => {
    name = name.trim();
    contact = contact.trim();
    message = message.trim();
    if (!name || !contact) throw new Error("Please enter your name and a phone, email or LINE ID");
    if (name.length > 120 || contact.length > 200 || message.length > 2000) {
      throw new Error("Message is too long");
    }
    const listing = listingId ? await ctx.db.get(listingId) : null;
    await ctx.db.insert("inquiries", {
      name,
      contact,
      message,
      listingId: listing?._id,
      listingTitle: listing?.title,
      status: "New",
    });
  },
});

export const list = query({
  args: {},
  handler: async (ctx) => {
    await requireRole(ctx, "manager");
    return await ctx.db.query("inquiries").order("desc").collect();
  },
});

export const setStatus = mutation({
  args: {
    id: v.id("inquiries"),
    status: v.union(v.literal("New"), v.literal("Contacted"), v.literal("Closed")),
  },
  handler: async (ctx, { id, status }) => {
    await requireRole(ctx, "manager");
    await ctx.db.patch(id, { status });
  },
});

export const remove = mutation({
  args: { id: v.id("inquiries") },
  handler: async (ctx, { id }) => {
    await requireRole(ctx, "manager");
    await ctx.db.delete(id);
  },
});
