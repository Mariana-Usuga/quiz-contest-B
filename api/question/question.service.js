const Question = require('./question.model')

async function getAllQuestions() {
    try {
      const questions = await Question.find();
      // console.log('get', questions)
      return questions;
    } catch (error) {
      console.log('error', error);
      throw error;
    }
  }

async function createQuestion(question) {
    try {
      const newQuestion = new Question(question);
      const savedQuestion = await newQuestion.save();
      return savedQuestion;
    } catch (error) {
      throw error;
    }
  }

  module.exports = {
    getAllQuestions,
    createQuestion
  };