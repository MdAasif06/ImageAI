import express from "express";
import cors from "cors";
import "dotenv/config";
import connetDB from "./config/mongoDb.js";
import userRouter from "./routes/userRoute.js";
import imageRouter from "./routes/imageRoutes.js";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());
// app.use((req, res, next) => {
//   console.log("Request received:", req.method, req.url);
//   next();
// });

await connetDB();

app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);
app.get("/", (req, res) => {
  res.send("api working is fine");
});

app.listen(PORT, () => {
  console.log(`server has started ${PORT}`);
});
