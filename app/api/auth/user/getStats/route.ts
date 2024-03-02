import connectToDB from "@/lib/DB";
import { NextRequest, NextResponse } from "next/server";
import User from "@/lib/Schemas/User";

export const GET = async (req: NextRequest, res: NextResponse) => {
const {username} = req.query;


}