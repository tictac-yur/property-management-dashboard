import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

export const role = v.union(v.literal("admin"), v.literal("manager"), v.literal("viewer"));

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

  // ── Portfolio data used by the dashboard ──
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
});
