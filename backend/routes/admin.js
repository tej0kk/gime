const router = require('express');
const gameController = require('../controllers/GameController');

router.get('game', gameController.index);

module.exports = router;