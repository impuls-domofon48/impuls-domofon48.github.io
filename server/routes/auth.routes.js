import Router from "express";
import validator from "express-validator";
import { login } from "../controllers/auth/login.js";
import { registration } from "../controllers/auth/registration.js";

const { check } = validator;
export const router = Router();

router.post(
  "/registration",
  [
    check("email", "Incorrect Email").isEmail(),
    check("password", "Minimal 6 characters").isLength({ min: 6 }),
  ],
  async (req, res) => {
    registration(req, res);
  }
);
router.post(
  "/login",
  [
    check("email", "Input correct email")
      .normalizeEmail()
      .isEmail(),
    check("password", "Input password").exists(),
  ],
  async (req, res) => {
    login(req, res);
  }
);
