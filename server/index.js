import express from "express";
import config from "config";
import mongoose from "mongoose";
import cors from "cors";
import { router } from "./routes/auth.routes.js";
import { answersRouter } from "./routes/answer.routes.js";

const PORT = config.get("port") || 5000;
const MONGODB_URL = config.get("mongoDbUrl");

const app = express();

app.use(cors({ origin: "*" }));
app.use(
  express.json({
    extended: true,
  })
);
app.use("/api/auth/", router);
app.use("/api/answers/", answersRouter);

async function start() {
  try {
    await mongoose.connect(MONGODB_URL);

    app.listen(PORT, () => {
      console.log("Server start on 5000 - port");
    });
  } catch (e) {
    console.log(e);
  }
}
start();
