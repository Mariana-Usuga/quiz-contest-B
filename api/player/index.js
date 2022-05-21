const { Router } = require('express');

const { createPlayerHandler } = require('./player.controller');

const router = Router();

router.post('/', createPlayerHandler);

module.exports = router;
