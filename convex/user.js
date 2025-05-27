import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createNewuser = mutation({
    name: v.string(),
    email: v.string(),
    photoURL: v.string(),
    handler: async (ctx, argu) => {
        const user = await ctx.db.query("user").filter((q) => q.eq(q.field("email"), argu.email)).collect();

        if (!user[0]?.email) {
            const userData = {
                name: argu.name,
                email: argu.email,
                photoURL: argu.photoURL,
                creadit: 31,
            }
            const result = await ctx.db.insert("user", userData);
            return userData;
        }
        return user[0];
    }
});
