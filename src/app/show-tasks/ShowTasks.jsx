"use client";
import Task from "@/app/show-tasks/Task";
import UserContext from "@/context/userContext";
import { deleteTask, getTasksOfUser } from "@/services/taskService";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const ShowTasks = () => {
  const [task, setTask] = useState();
  const context = useContext(UserContext);
  async function loadTasks(userId) {
    try {
      const tasks = await getTasksOfUser(userId);
      setTask([...tasks].reverse());
      // console.log(tasks);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (context.user) {
      loadTasks(context.user._id);
    }
  }, [context.user]);

async function deleteTaskParent(taskId){
  try {
    const result = await deleteTask(taskId);
    console.log(result);
    const newTask = task.filter(item=> item._id !== taskId)
    setTask(newTask);
    toast.success("Task deleted successfully !!....");
  } catch (error) {
    console.log(error);
    toast.error("Failed to delete task !!....");
  }
}

  return (
    <div className="grid grid-cols-12 mt-3">
      <div className="col-span-6 col-start-4">
        <h1 className="text-3xl mb-3 ">Your tasks ( {task && task.length} )</h1>

        {task && task.map((taskk) => (
          <Task
            task={taskk}
            key={taskk._id}
            deleteTaskParent={deleteTaskParent}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowTasks;
