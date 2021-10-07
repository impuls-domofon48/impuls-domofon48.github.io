import mongoose from "mongoose";

const User = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  adminLevel: { type: Number, default: 0 },
});

export default mongoose.model("User", User);
