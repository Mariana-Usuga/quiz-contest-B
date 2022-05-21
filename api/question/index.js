const { Router } = require('express');
const bodyParser = require('body-parser')

const { getAllQuestionsHandler, createQuestionHandler } = require('./question.controller');

const router = Router();

const jsonParser = bodyParser.json()

router.get('/', getAllQuestionsHandler);
router.post('/', jsonParser, createQuestionHandler);

module.exports = router;
