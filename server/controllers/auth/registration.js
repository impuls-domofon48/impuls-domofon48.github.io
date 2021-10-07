import bcrypt from "bcryptjs";
import User from "../../models/auth/index.js";
import validator from "express-validator";

const { validationResult } = validator;
export async function registration(req, res) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Incorrect registration data",
      });
    }
    const { email, password } = await req.body;
    const candidate = await User.findOne({ email });
    if (candidate) {
      return res.status(400).json({ message: "User already exist" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    res.status(200).json({ message: "User created" });
  } catch (e) {
    res.status(500).json({ message: "Error" });
  }
}
