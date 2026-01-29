import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    contactSessions: defineTable({
        name: v.string(),
        email: v.string(),
        organizationId: v.string(),
        expiresAt: v.number(),
        metadata: v.optional(v.object({
            userAgent: v.optional(v.string()),
            language: v.string(),
            languages: v.optional(v.string()),
            platform: v.string(),
            vendor: v.string(),
            screenResolution: v.string(),
            viewportSize: v.string(),
            timezone: v.string(),
            timezoneOffset: v.number(),
            cookieEnabled: v.boolean(),
            referrer: v.string(),
            currentUrl: v.string(),
        }))
    })
        .index("by_organiztion_id", ["organizationId"])
        .index("by_expores_at", ["expiresAt"]),
    users: defineTable({
        name: v.string()
    })
})