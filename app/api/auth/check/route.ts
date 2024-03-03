import connectToDB from "@/lib/DB";
import User from "@/lib/Schemas/User";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
    try {
        await connectToDB();
        const alluser = await User.find();
        return NextResponse.json({ alluser });
    }
    catch (err) {
        return NextResponse.json({ message: "Error getting user", err }, { status: 500 });
    }
}

export const DELETE = async (req: Request, res: Response) => {
    try{
        const delAll = await User.deleteMany({});
        return NextResponse.json({ message: "All users deleted" });
    }
    catch(err){
        return NextResponse.json({ message: "Error deleting user", err }, { status: 500 });
    }
}