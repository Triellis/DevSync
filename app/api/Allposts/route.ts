import connectToDB from "@/lib/DB";
import Posts from "@/lib/Schemas/Posts";
import { NextResponse } from "next/server";


export const GET = async (req: Request, res: Response) => {
    try {
        await connectToDB();
        const allPosts = await Posts.find().sort({ postedAt: -1 });
        console.log(allPosts);
        return NextResponse.json({ allPosts });
    }
    catch (err) {
        return NextResponse.json({ message: "Error getting posts", err }, { status: 500 });
    }
}