import connectToDB from "@/lib/DB";
import User from "@/lib/Schemas/User";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: Response) => {
    try {
    const { name, email,image, githubName, githubBio, githubBlog} = await req.json();

    await connectToDB();

    if(!name || !email) {
        return NextResponse.json({ message: "Name and email are required" }, { status: 400 });
    }

    const userExists = await User.findOne({ email });

    if(userExists) {
        return NextResponse.json({ message: "User already exists" }, { status: 200 });
    }

    const user = new User ({
        name,
        email,
        profilePic: image,
        githubName,
        githubBio,
        githubBlog,
    });

    await user.save();
    console.log(user);

    return NextResponse.json({ message: "User created", user }, { status: 201 });
    }
    catch(err) {
        return NextResponse.json({ message: "Error creating user", err }, { status: 500 });
    }
}