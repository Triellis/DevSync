import Posts from "@/lib/Schemas/Posts";
import { NextResponse } from "next/server";
import connectToDB from "@/lib/DB";

export const POST = async(req: Request, res: Response) => {
    try{
        const {text, user, githubName, userImg} = await req.json();
        await connectToDB();

        const post = new Posts({
            text,
            user,
            githubName,
            userImg
        });

        await post.save();
       
        return NextResponse.json({ post });
    }
    catch(err){
        return NextResponse.json({ message: "Error creating post", err }, { status: 500 });
    }
}