import mongoose from "mongoose";
import "dotenv/config";
const connetDB = async () => {
  console.log(
    "MongoDB host:",
    process.env.MONGO_URI?.split("@")[1]?.split("/")[0],
  );
  mongoose.connection.on("connected", () => {
    console.log("Database is connected");
  });

  await mongoose.connect(`${process.env.MONGO_URI}`);
};

export default connetDB;
