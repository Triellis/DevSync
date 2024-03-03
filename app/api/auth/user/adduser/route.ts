import connectToDB from "@/lib/DB";
import User from "@/lib/Schemas/User";
import { NextRequest, NextResponse } from "next/server";


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

export const GET = async (req: NextRequest, res: NextResponse) => {
    try {
        await connectToDB();
        const githubName = (req.cookies?.get('username'))?.value;
        console.log("ok: ",githubName);

        const getUser = await User.findOne({ githubName });

        if(!getUser) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }
        console.log(getUser);

        const data = {
            name: getUser.name,
            profilePic: getUser.profilePic,
        }

        console.log(data);

        return NextResponse.json( data , { status: 200 });
    }
    catch(err) {
        return NextResponse.json({ message: "Error getting users", err }, { status: 500 });
    }
}