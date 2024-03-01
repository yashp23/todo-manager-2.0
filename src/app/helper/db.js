import mongoose, { connection } from "mongoose";
// import User from '../models/user';

const config = {
  isConnected: 0,
};

export default async function connectDB() {
  if (config.isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");
    console.log(connection.readyState);
    config.isConnected = connection.readyState;

    // For testing purposes, create a user after connecting to the database
    // const user = new User({
    //   name: 'test1',
    //   email: 'test1@gmail.com',
    //   password: 'test1',
    //   about: 'test1',
    // });

    // await user.save();
    // console.log('User is created...');
  } catch (e) {
    console.error("Failure to connect to the database:", e);
  }
}
