const mongoose = require('mongoose');

const { Schema } = mongoose;

const QuestionSchema = new Schema({
  level: {
    type: Number,
    // required: true,
  },
  question: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  choices: {
    type: Array,
  },
});

module.exports = mongoose.model('Question', QuestionSchema);