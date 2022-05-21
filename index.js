const mongoose = require('mongoose');
const express = require('express');
const Question = require('./api/question/question.model')
const routes = require('./routes')

const URI = process.env.DB_URI;
const PORT = 8080

const app = express();

app.listen(PORT, () => {
  // connect to database
  try {
    mongoose.connect(URI,
     {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
    console.log(`Server running 🤖 at http://localhost:8080/`)
  } catch (error) {
    console.log(error);
    // process.exit(1);
  }

  // Routes
  routes(app);

  console.log(`Server running 🤖 at http://localhost:${PORT}/`);
});

  // async function getAllQuestions() {
  //   try {
  //     const courses = await Question.find();
  //     // console.log('get', courses)
  //     return courses;
  //   } catch (error) {
  //     console.log('error', error);
  //     throw error;
  //   }
  // }
  
  // async function createQuestion() {
  //   const question = {
  //     level: 5,
  //     question: "¿Cómo se llama el componente mínimo que forma a los seres vivos?",
  //     category: "science",
  //     answer: "Célula",
  //     choices: ["Tejido", "Particula", "Célula", "Calcio"]
  //   }
  //   try {
  //     const newCourse = new Question(question);
  //     const savedCourse = await newCourse.save();
  //     console.log('ques new', savedCourse)
  //     return savedCourse;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // // createQuestion();
  // getAllQuestions();
