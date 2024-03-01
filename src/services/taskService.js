import { httpAxios } from "@/app/helper/httpHelper";

export async function addTask(task) {
  try {
    const response = await httpAxios.post("/api/tasks", task);
    return response.data;
  } catch (error) {
    console.error("Error adding task:", error);
    throw error; // Rethrow the error or handle it based on your needs
  }
}

export async function getTasksOfUser(userId) {
  const result = await httpAxios
    .get(`/api/users/${userId}/tasks`)
    .then((response) => response.data);
  return result;
}

export async function deleteTask(taskId) {
  const result = await httpAxios
    .delete(`/api/tasks/${taskId}`)
    .then((response) => response.data);
  return result;
}
