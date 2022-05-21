const { createPlayer } = require('./player.service')


async function createPlayerHandler(req, res) {
    const newUser = req.body
  console.log('re body', req.body)
    try {
    //   if (!newUser.email) {
    //     return res.status(422).json({ response: 'Missing values in the body' });
    //   }
      const player = await createPlayer(req.body);
    
      return res.status(201).json(player);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  module.exports = {
      createPlayerHandler
  }