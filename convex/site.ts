import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { Doc } from "./_generated/dataModel";
import { requireRole } from "./lib/access";

type Content = Omit<Doc<"siteContent">, "_id" | "_creationTime">;

export const DEFAULT_CONTENT: Content = {
  brandName: "PropManager",
  tagline: "Condos for rent in Nonthaburi & Bangkok",
  heroTitle: "Comfortable condos near the Purple Line",
  heroSubtitle:
    "Well-kept, fully furnished units managed directly by the owner — no middleman, quick repairs, fair rent.",
  aboutTitle: "Owner-managed, tenant-first",
  aboutBody:
    "We look after a small portfolio of condos around Chaengwatthana, Pak Kret and Sathorn. Every unit is maintained by us directly, so you always know who to call.",
  contactPhone: "",
  contactEmail: "",
  contactLine: "",
  contactAddress: "Nonthaburi, Thailand",
  footerNote: "© PropManager",
};

const contentFields = {
  brandName: v.string(),
  tagline: v.string(),
  heroTitle: v.string(),
  heroSubtitle: v.string(),
  aboutTitle: v.string(),
  aboutBody: v.string(),
  contactPhone: v.string(),
  contactEmail: v.string(),
  contactLine: v.string(),
  contactAddress: v.string(),
  footerNote: v.string(),
};

/** PUBLIC — everything the website needs. Only exposes published listings. */
export const getPublic = query({
  args: {},
  handler: async (ctx) => {
    const doc = await ctx.db.query("siteContent").first();
    const content: Content = doc ? { ...DEFAULT_CONTENT, ...stripSystem(doc) } : DEFAULT_CONTENT;
    const rows = await ctx.db
      .query("listings")
      .withIndex("by_published", (q) => q.eq("published", true))
      .collect();
    const listings = await Promise.all(
      rows.map(async (l) => ({
        _id: l._id,
        title: l.title,
        type: l.type,
        location: l.location,
        rent: l.rent,
        sqm: l.sqm,
        bedrooms: l.bedrooms,
        bathrooms: l.bathrooms,
        availability: l.availability,
        description: l.description,
        features: l.features,
        photos: (await Promise.all(l.photos.map((id) => ctx.storage.getUrl(id)))).filter(
          (u): u is string => !!u,
        ),
      })),
    );
    return { content, listings };
  },
});

export const getContent = query({
  args: {},
  handler: async (ctx) => {
    await requireRole(ctx, "manager");
    const doc = await ctx.db.query("siteContent").first();
    return doc ? { ...DEFAULT_CONTENT, ...stripSystem(doc) } : DEFAULT_CONTENT;
  },
});

export const saveContent = mutation({
  args: contentFields,
  handler: async (ctx, content) => {
    await requireRole(ctx, "manager");
    const doc = await ctx.db.query("siteContent").first();
    if (doc) await ctx.db.replace(doc._id, content);
    else await ctx.db.insert("siteContent", content);
  },
});

function stripSystem(doc: Doc<"siteContent">): Content {
  const { _id, _creationTime, ...rest } = doc;
  return rest;
}
