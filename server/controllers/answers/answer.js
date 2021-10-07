import Answer from "../../models/answers/index.js";
import config from "config";

export async function getAnswers(req, res) {
  try {
    const answers = await Answer.find();
    res.status(200).json(answers);
  } catch (e) {
    console.log(e);
  }
}
export async function setAnswer(req, res) {
  try {
    const { answer, question } = req.body;
    console.log(req.body);
    const exist =
      (await Answer.findOne({ answer })) ||
      (await Answer.findOne({ question }));
    if (exist) {
      return res.status(200).json({ answer: exist });
    }
    const newAnswer = new Answer({ answer, question });
    await newAnswer.save();
    res.status(201).json({ message: "Success" });
  } catch (e) {
    console.log(e);
  }
}
