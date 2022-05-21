const mongoose = require('mongoose');

const { Schema } = mongoose;

const PlayerSchema = new Schema({
  name: {
    type: String,
    // required: true,
  },
  score: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Player', PlayerSchema);