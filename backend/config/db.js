import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connectDB = () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI).then(() => {
      console.log(
        `MongoDB connected `
      );
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // ! 1 means failure, 0 means success
  }
};
