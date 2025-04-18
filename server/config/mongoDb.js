import mongoose from "mongoose";
// import "dotenv/config";
const connetDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Database is connected");
  });
  
  await mongoose.connect(`${process.env.MONGO_URI}/imageAI`
);
};

export default connetDB;