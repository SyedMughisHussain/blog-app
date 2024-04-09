import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB", response.connection.host);
  } catch (error) {
    console.log("Error", error);
  }
};

export default connectDb;
