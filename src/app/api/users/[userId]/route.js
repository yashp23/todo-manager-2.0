import User from "@/models/user";
import { NextResponse } from "next/server";

//get User
export async function GET(request, { params }) {
  
  await connectDB();
  const { userId } = params;
  const user = await User.findById(userId).select("-password");

  return NextResponse.json(user);
}

// Delete User
export async function DELETE(request, { params }) {
  const { userId } = params;
  //   console.log({ userId });

  try {
    const ans = await User.deleteOne({ _id: userId });
    // console.log(ans);

    if (ans.deletedCount === 1) {
      return NextResponse.json({ msg: "user deleted successfully" });
    } else {
      console.log("User not found or not deleted.");
      return NextResponse.json({ msg: "user not found or not deleted" });
    }
  } catch (error) {
    console.error(error); // Log the actual error for debugging
    return NextResponse.json({
      msg: "failed to delete user",
      error: error.message,
    });
  }
}

//update user

export async function PUT(request, { params }) {
  
  const { userId } = params;
  console.log({ userId });
  const { name, password, about, profileUrl } = await request.json();
  console.log({ name, password, about, profileUrl });

  const user = await User.findById(userId);
  // console.log(user);

  try {
    let user = await User.findById(userId);
    // console.log(user);
    user.name = name;
    user.password = password;
    user.about = about;
    user.profileUrl = profileUrl;
    //add more information
    
    await connectDB();
    const updatedUser = await user.save();
    // console.log(updatedUser);
    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json({ msg: "failed to update user", success: false });
  }
}
