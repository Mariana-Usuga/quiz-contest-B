const mongoose = require('mongoose');
// import mongoose from "mongoose";
// import mongoose from './'

// const { config } = require('./index');

// const URI = process.env.DB_URI;
// console.log('uri', URI)

async function connectDB() {
    // console.log('uri', URI)
  try {
    await mongoose.connect("mongodb+srv://marktpul_user:OuByWjza6p97nO6x@marktcluster.ikcnf.mongodb.net/Quiz-contest?retryWrites=true&w=majority",
     {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.log(error);
    // process.exit(1);
  }
}

// export { connectDB }
module.exports = connectDB;

