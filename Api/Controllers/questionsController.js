const Question = require("../Models/questions");

exports.createQuestion = async (req, res) => {
  try {
    const newQuestion = new Question(req.body);
    await newQuestion.save();
    res.status(201).json({ success: true, data: newQuestion });
  } catch (error) {
    res.status(500).json({ message: "Error creating question", error });
  }
};

exports.getQuestions = async (req, res) => {
  try {
    const survey = await Question.find();
    if (!survey) {
      return res.status(404).json({ message: "Survey not found" });
    }
    res.json(survey);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
