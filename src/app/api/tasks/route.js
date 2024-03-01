// api/task/{taskid}

import { getResponseMessage } from "@/app/helper/errorMessage";
import Task from "@/models/task";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectDB from "@/app/helper/db";

export async function GET(request) {
  try {
    await connectDB();
    const tasks = await Task.find();
    return NextResponse.json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return getResponseMessage("Failed to Fetch the Tasks !...", 500, false);
  }
}

export async function POST(request) {
  const { title, content, addedDate, status, userId } = await request.json();

  const authToken = request.cookies.get("authToken")?.value;
  const data = jwt.verify(authToken, process.env.JWT_SECRET);
  // console.log(data._id);
  try {
    const task = new Task({
      title,
      content,
      userId: data._id,
      status,
    });
    await connectDB();
    const createdTask = await task.save();
    console.log(createdTask);

    return NextResponse.json(createdTask, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to Create the Task !...", success: false },
      { status: 500 }
    );
  }
}
