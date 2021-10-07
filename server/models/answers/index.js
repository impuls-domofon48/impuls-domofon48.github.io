import mongoose from "mongoose";

const Answer = new mongoose.Schema({
  answer: { type: String, required: true, unique: true },
  question: { type: String, required: true, unique: true },
  // owner: { type: mongoose.ObjectId, ref: "User" },
});
export default mongoose.model("Answer", Answer);
