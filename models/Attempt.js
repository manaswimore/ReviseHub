const mongoose = require("mongoose");

const attemptSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Quiz"
  },
  answers: [String],
  score: Number
}, { timestamps: true });

module.exports = mongoose.model("Attempt", attemptSchema);
