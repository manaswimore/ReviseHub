const Quiz = require("../models/Quiz");
const Attempt = require("../models/Attempt");

exports.createQuiz = async (req, res) => {
  const quiz = await Quiz.create({
    ...req.body,
    createdBy: req.user.id
  });
  res.json(quiz);
};

exports.getQuizzes = async (req, res) => {
  const quizzes = await Quiz.find().select("-questions.correctAnswer");
  res.json(quizzes);
};

exports.submitQuiz = async (req, res) => {
  const { quizId, answers } = req.body;

  const quiz = await Quiz.findById(quizId);
  let score = 0;

  quiz.questions.forEach((q, i) => {
    if (q.correctAnswer === answers[i]) score++;
  });

  const attempt = await Attempt.create({
    userId: req.user.id,
    quizId,
    answers,
    score
  });

  res.json({ score, total: quiz.questions.length });
};
