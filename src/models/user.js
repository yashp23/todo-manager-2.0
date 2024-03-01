import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email is already in use"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  about: String,
  profileUrl: String,
});

// Check if the model already exists
const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;