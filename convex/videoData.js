import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateVideoData = mutation({
    args: {
        title: v.string(),
        topic: v.string(),
        Script: v.string(),
        VideoStyle: v.string(),
        caption: v.any(),
        Voic: v.string(),
       // uid: v.id("users"),
        createdBy: v.string(),
    },
    handler: async (ctx, args) => {

        //const { title, topic, Script, VideoStyle, caption, Voic, uid, createdBy } = args;

        // Create a new video data entry
        const result = await ctx.db.insert("VideoData", {
            title: args.title,
            topic: args.topic,
            Script: args.Script,
            VideoStyle: args.VideoStyle,
            caption: args.caption,
            Voic: args.Voic,
            uid: args.uid,
            createdBy: args.createdBy,
        });

        return result;
    }
    // Return the created video data entry

});
