const mongoose = require('mongoose');
const express = require('express');
// const Question = require('./api/question/question.model')
const expressConfig = require('./config/express');
const routes = require('./routes')

// const URI = process.env.DB_URI;
const URI = "mongodb+srv://marktpul_user:OuByWjza6p97nO6x@marktcluster.ikcnf.mongodb.net/Quiz-contest?retryWrites=true&w=majority"
const PORT = 8080

const app = express();
expressConfig(app);

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
    console.error(error);
  }

  routes(app);

  console.log(`Server running 🤖 at http://localhost:${PORT}/`);
});

