const question = require('./api/question');
const player = require('./api/player')

function routes(app) {
   app.use('/api/question', question);
   app.use('/api/player', player);
}

module.exports = routes;
