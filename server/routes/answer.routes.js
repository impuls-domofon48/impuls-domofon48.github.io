import Router from "express";
import { getAnswers, setAnswer } from "../controllers/answers/answer.js";

export const answersRouter = Router();

answersRouter.get("/", (req, res) => {
  getAnswers(req, res);
});
answersRouter.post("/new", (req, res) => {
  setAnswer(req, res);
});
