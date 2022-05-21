const { getAllQuestions, createQuestion } = require("./question.service");


async function getAllQuestionsHandler(req, res) {
    try {
      const questions = await getAllQuestions();
  
      if (questions.length === 0) {
        return res.status(404).json({ message: 'no Courses found' });
      }
  
      return res.status(200).json(questions);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } 
  

  async function createQuestionHandler(req, res) {
    const { level, question, category, answer, choices } = req.body;
    try {
      if (!level || !question || !category || !answer || !choices) {
        return res.status(422).json({ response: 'Missing values in the body' });
      }
      const questionNew = await createQuestion(req.body);
  
      return res.status(201).json(questionNew);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  
  
  module.exports = {
    getAllQuestionsHandler,
    createQuestionHandler
  };

  