const question = require('./api/question');

function routes(app) {
   app.use('/api/question', question);
}

module.exports = routes;
