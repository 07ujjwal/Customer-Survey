const Survey = require("../Models/survey");

exports.createSurvey = async (req, res) => {
  try {
    const { userId, answers } = req.body;
    const newSurvey = new Survey({ userId, answers });
    await newSurvey.save();
    res.status(201).json(newSurvey);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

