import Posts from "@/lib/Schemas/Posts";
import { NextResponse } from "next/server";
import connectToDB from "@/lib/DB";

export const POST = async(req: Request, res: Response) => {
    try{
        const { user, text, image, tags } = await req.json();
        await connectToDB();

        const post = await Posts.create({
            user,
            text,
            image,
            tags,
        });
       
        return NextResponse.json({ message: "Post created", post }, { status: 201 });
    }
    catch(err){
        return NextResponse.json({ message: "Error creating post", err }, { status: 500 });
    }
}