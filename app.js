const mongoose = require('mongoose');
const express = require('express');
const expressConfig = require('./config/express');
const routes = require('./routes')

const URI = process.env.DB_URI;
const PORT = process.env.PORT || 8080;

const app = express();
expressConfig(app);

app.listen(PORT, () => {
  try {
    mongoose.connect(URI,
     {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(error);
  }

  routes(app);

  console.log(`Server running 🤖 at http://localhost:${PORT}/`);
});

