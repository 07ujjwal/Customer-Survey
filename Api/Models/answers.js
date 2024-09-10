const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Question",
  },
  answer: {
    type: String,
    required: true,
  },
});

module.exports = {
  answerSchema,
  Answer: mongoose.model("Answer", answerSchema),
};
