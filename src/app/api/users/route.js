import { NextResponse } from "next/server";
import connectDB from "@/app/helper/db";
import User from "@/models/user";
import bcrypt from "bcryptjs";


export async function GET(request) {
  let users = [];
  try {
    await connectDB(); 
    // Fetch all users from the database
    const users = await User.find().select("-password");

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { message: "Failed to fetch users", success: false },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { name, email, password, about, profileUrl } = await request.json();
    const user = new User({
      name,
      email,
      password,
      about,
      profileUrl,
    });
    user.password = await bcrypt.hash(user.password, parseInt(process.env.BCRYPT_SALT));
    await connectDB();
    const createdUser = await user.save();
    return NextResponse.json(createdUser, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Create the User !...", success: false },
      { status: 500 }
    );
  }
}
