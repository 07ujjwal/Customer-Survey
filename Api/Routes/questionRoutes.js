const express = require("express");
const router = express.Router();
const {
  createQuestion,
  getQuestions,
} = require("../Controllers/questionsController");
const { route } = require("./surveyRoutes");

router.post("/", createQuestion);
router.get("/", getQuestions);

module.exports = router;
