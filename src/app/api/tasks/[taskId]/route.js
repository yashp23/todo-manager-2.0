// api/task/{taskid}

import connectDB from "@/app/helper/db";
import { getResponseMessage } from "@/app/helper/errorMessage";
import Task from "@/models/task";

import { NextResponse } from "next/server";


// Get single task
export async function GET(request, { params }) {
  const { taskId } = params;
  // console.log({ taskId });

  try {
    await connectDB();
    const task = await Task.findById(taskId);
    // console.log(task);
    return NextResponse.json(task);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in fetch the task!...", 500, false);
  }
}

export async function POST(request) {}

//update task
export async function PUT(request, { params }) {
  try {
    const { taskId } = params;

    const { title, content, status } = await request.json();
    
    let task = await Task.findById(taskId);
    console.log(task);
    task.title = title;
    task.content = content;
    task.status = status;

    await connectDB();
    const updatedTask = await task.save();
    return NextResponse.json(updatedTask);
  } catch (error) {
    console.log(error);
    console.log("after error");
    getResponseMessage("Error in update the task!...", 500, false);
  }
}
export async function DELETE(request, { params }) {
  const { taskId } = params;
  try {
    await connectDB();
    await Task.deleteOne({ _id:  taskId });
    return getResponseMessage("Task Deleted Successfully !...", 200, true);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in delete the task!...", 500, false);
  }
}
