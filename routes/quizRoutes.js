const express = require("express");
const auth = require("../middleware/authMiddleware");
const {
  createQuiz,
  getQuizzes,
  submitQuiz
} = require("../controllers/quizController");

const router = express.Router();

router.post("/", auth, createQuiz);
router.get("/", getQuizzes);
router.post("/submit", auth, submitQuiz);

module.exports = router;