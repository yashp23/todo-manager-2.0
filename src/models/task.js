import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  content: {
    type: String,
    required: [true, "Content is required"],
  },
  addedDate: {
    type: Date,
    required: [true, "Date is required"],
    default: Date.now(),
  },
  addedDate: {
    type: Date,
    required: [true, "Date is required"],
    default: Date.now(),
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },
  userId: {
    type: mongoose.ObjectId,
    required: true,
  },
  //  LastDate:{
  //     type: Date,
  //     required: [true, "Date is required"],
  //     default: ()=>{
  //         const currentDate = new Date();
  //         currentDate.setDate(currentDate.getDate()+1);
  //         return currentDate;
  //     }
  //  },
});

const Task = mongoose.models.task || mongoose.model("task", TaskSchema);
export default Task;
