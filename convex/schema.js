
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";


export default defineSchema({
    user: defineTable({
        name: v.string(),
        email: v.string(),
        photoURL: v.string(),
        creadit: v.number()
    }),
    VideoData: defineTable({
        title: v.string(),
        topic: v.string(),
        Script: v.string(),
        VideoStyle: v.string(),
        caption: v.any(),
        Voic: v.string(),
        image: v.optional(v.any()),
        audiourl: v.optional(v.string()),
        captionJson: v.optional(v.string()),
       // uid: v.optional(v.id("users")),
        createdBy: v.string(),
    })
})