"use client";
import { toast } from "react-toastify";
import { addTask } from "@/services/taskService";
import Image from "next/image";
import React, { useState } from "react";

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "64a506ab413f1d5bcafcdbec",
  });
  const handleAddTask = async (event) => {
    event.preventDefault();
    // console.log(task);

    //validate the task

    try {
      if (task.title.trim() === "" || task.title == null) {
        toast.warning("Please Enter Title", {
          position: "top-center",
        });
        return;
      }
      if (task.content.trim() === "" || task.content == null) {
        // Fixed this line
        toast.warning("Please Enter Content", {
          position: "top-center",
        });
        return;
      }
      if (task.status !== "pending" && task.status !== "completed") {
        toast.warning("Please Select Proper Status", {
          position: "top-center",
        });
        return;
      }

      const result = await addTask(task);
      console.log(result);
      toast.success("Task Added Successfully", {
        position: "top-center",
      });
      setTask({
        title: "",
        content: "",
        status: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Task Not Added", {
        position: "top-center",
      });
    }
  };

  const clearForm = () => {
    setTask({
      title: "",
      content: "",
      status: "none",
    });
  };

  return (
    <div className="grid grid-cols-12 justify-center mt-4">
      <div className="col-span-4 col-start-5 shadow-sm  p-5">
        <div className="my-8 flex justify-center mt-1">
          <Image
            src="login.svg"
            width={500}
            height={200}
            style={{ width: "50%", height: "50%" }}
            alt="Task Image"
            priority
          ></Image>
        </div>
        <h1 className="text-3xl flex justify-center ">
          Add Your Task Here !...
        </h1>

        <form action="#!" onSubmit={handleAddTask}>
          {/* ------------ */}
          {/* Task Title */}
          <div className="mt-4">
            <label
              htmlFor="task_title"
              className="block text-sm font-medium mb-2 "
            >
              Title
            </label>
            <input
              type="text"
              name="task_title"
              title="Please Write Title"
              onChange={(event) => {
                setTask({ ...task, title: event.target.value });
              }}
              value={task.title}
              className="w-full p-3 rounded-lg bg-gray-900 focus:ring-gray-400 border border-gray-800"
              id="task_title"
            />
          </div>

          {/* ---------- */}
          {/* Task Content */}
          <div className="mt-4">
            <label
              htmlFor="task_content"
              className="block text-sm font-medium mb-2 "
            >
              Content
            </label>
            <textarea
              type="text"
              name="task_content"
              title="Please Write Content"
              onChange={(event) => {
                setTask({ ...task, content: event.target.value });
              }}
              value={task.content}
              className="w-full p-3 rounded-lg bg-gray-900 focus:ring-gray-400 border border-gray-800"
              id="task_content"
              rows={3}
            />
          </div>

          {/* ---------- */}
          {/* Task Content */}
          <div className="mt-4">
            <label
              htmlFor="task_content"
              className="block text-sm font-medium mb-2 "
            >
              Status
            </label>
            <select
              id="task_status"
              className="w-full p-3 rounded-lg bg-gray-900 focus:ring-gray-400 border border-gray-800 "
              title=" Status"
              name="task_status"
              onChange={(event) => {
                setTask({ ...task, status: event.target.value });
              }}
              value={task.status}
            >
              <option value="none" disabled className=" cursor-not-allowed">
                ---Select Status---
              </option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* ---------- */}
          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800"
            >
              Add Task
            </button>
            <button
              onClick={clearForm}
              className="bg-red-600 py-2 px-3 rounded-lg hover:bg-red-800 ms-3"
            >
              Clear
            </button>
          </div>

          {/* {
            JSON.stringify(task)
          }  */}
        </form>
      </div>
    </div>
  );
};

export default AddTask;
