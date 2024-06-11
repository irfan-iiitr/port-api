import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = process.env.mongoURI;

export async function connectDB() {
  try {
    console.log("Connecting to MongoDB..");
    mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected to MongoDB..at last");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err;
  }
}