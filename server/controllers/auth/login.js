import bcrypt from "bcryptjs";
import User from "../../models/auth/index.js";
import validator from "express-validator";
import config from "config";
import jwt from "jsonwebtoken";

const { validationResult } = validator;

export async function login(req, res) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
      return res
        .status(400)
        .json({ errors: errors.array(), message: "Incorrect login data" });
    }
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }
    const token = jwt.sign({ userId: user.id }, config.get("jwtSecret"), {
      expiresIn: "1h",
    });
    console.log(user.adminLevel);
    return res.json({
      token,
      userId: user.id,
      user,
      message: "User are logged in",
    });
  } catch (e) {
    console.log(e);
  }
}
