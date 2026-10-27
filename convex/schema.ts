import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

export const role = v.union(v.literal("admin"), v.literal("manager"));

export default defineSchema({
  ...authTables,

  // Convex Auth's users table, extended with an access role.
  // No role = signed up but waiting for an admin to grant access.
  users: defineTable({
    name: v.optional(v.string()),
    image: v.optional(v.string()),
    email: v.optional(v.string()),
    emailVerificationTime: v.optional(v.number()),
    phone: v.optional(v.string()),
    phoneVerificationTime: v.optional(v.number()),
    isAnonymous: v.optional(v.boolean()),
    role: v.optional(role),
  })
    .index("email", ["email"])
    .index("phone", ["phone"]),

  // ── PRIVATE: portfolio data used by the admin dashboard ──
  // One row per dashboard record (property, tenant, payment, ...).
  // `collection` is the dashboard section key, `rid` the record's own ID (P001, T003, ...).
  records: defineTable({
    collection: v.string(),
    rid: v.string(),
    data: v.any(),
  })
    .index("by_collection", ["collection"])
    .index("by_collection_rid", ["collection", "rid"]),

  // Single-value dashboard state: income tables, goal tracker settings.
  settings: defineTable({
    key: v.string(),
    value: v.any(),
  }).index("by_key", ["key"]),

  // Files attached to documents / contracts.
  attachments: defineTable({
    rid: v.string(),
    name: v.string(),
    storageId: v.id("_storage"),
  }).index("by_rid", ["rid"]),

  // ── PUBLIC: website content managed from the admin portal ──
  siteContent: defineTable({
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
  }),

  listings: defineTable({
    title: v.string(),
    propId: v.optional(v.string()),
    type: v.string(),
    location: v.string(),
    rent: v.number(),
    sqm: v.number(),
    bedrooms: v.number(),
    bathrooms: v.number(),
    availability: v.union(
      v.literal("Available"),
      v.literal("Coming Soon"),
      v.literal("Rented"),
    ),
    description: v.string(),
    features: v.array(v.string()),
    photos: v.array(v.id("_storage")),
    published: v.boolean(),
    sortOrder: v.number(),
  }).index("by_published", ["published", "sortOrder"]),

  inquiries: defineTable({
    name: v.string(),
    contact: v.string(),
    message: v.string(),
    listingId: v.optional(v.id("listings")),
    listingTitle: v.optional(v.string()),
    status: v.union(v.literal("New"), v.literal("Contacted"), v.literal("Closed")),
  }),
});
