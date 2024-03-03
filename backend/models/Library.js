const mongoose = require('mongoose');
const Game = require('./Game');
const User = require('./User');
const { ObjectId } = mongoose.Schema;

const librarySchema = new mongoose.Schema({
    gameId: {
        type: ObjectId,
        ref: Game
    },
    userId: {
        type: ObjectId,
        ref: User
    },
});

module.exports = mongoose.model('Library', librarySchema);