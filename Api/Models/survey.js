const mongoose = require("mongoose");
const { answerSchema } = require("./answers");

const surveySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  answers: [answerSchema],
  status: { type: String, default: "IN_PROGRESS" },
});

module.exports = mongoose.model("Survey", surveySchema);
