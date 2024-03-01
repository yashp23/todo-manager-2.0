import User from "@/models/user";
import { NextResponse } from "next/server";
import { toast } from "react-toastify";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectDB from "@/app/helper/db";


export async function POST(request) {
  const { email, password } = await request.json();

  try {
    // -------------------
    await connectDB();
    // 1. find user
    const user = await User.findOne({ email });

    // if (!user) {
    //   toast.error("User not found", {
    //     position: "top-center",
    //   });
    //   return;
    // }

    if (!user) {
      throw new Error("User not found !!!");
    }

    // -------------------
    // 2. password check
    const matched = bcrypt.compareSync(password, user.password);
    if (!matched) {
      throw new Error("Invalid Credentials !...");
    }

    // -------------------
    // 3. create a session or generate token

    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
      },
      process.env.JWT_SECRET
    );
    // console.log(user);
    // console.log(token);

    // -------------------
    // 4. create nextResponse-- cookie

    const response = NextResponse.json({
      message: "Login Success",
      success: true,
      user: user,
    });

    response.cookies.set("authToken", token, {
      expiresIn:"1d",
      httpOnly: true,
    });

    return response
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}