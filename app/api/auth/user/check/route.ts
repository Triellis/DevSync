import { connectToDB } from "@/lib/DB";
import User from "@/lib/Schemas/User";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
    await connectToDB();

    const users = await User.find({});

    return NextResponse.json({ users }, { status: 200 });
}