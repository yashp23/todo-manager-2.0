import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "@/models/user";
import connectDB from "@/app/helper/db";


export async function GET(request){
    const authToken = request.cookies.get("authToken")?.value;
    // console.log(authToken);
    const data = jwt.verify(authToken,process.env.JWT_SECRET);
    // console.log(data);
    await connectDB();
    const user = await User.findById(data._id).select("-password");

    return NextResponse.json(user);
}