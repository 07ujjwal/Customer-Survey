const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["rating", "text"],
    required: true,
  },
  ratingScale: {
    type: Number,
    enum: [5, 10],
    required: function () {
      return this.type === "rating";
    },
  },
});

module.exports = mongoose.model("Question", questionSchema);
