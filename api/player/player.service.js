const Player = require('./player.model');

async function createPlayer(user) {
    try {
      const newPlayer = new Player(user);
      const savedPlayer = await newPlayer.save();
      return savedPlayer;
    } catch (error) {
      throw error;
    }
  }


  module.exports = {
      createPlayer
  }