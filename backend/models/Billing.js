const mongoose = require('mongoose');
const Game = require('./Game');
const User = require('./User');
const Payment = require('./Payment');
const { ObjectId } = mongoose.Schema;

const billingSchema = new mongoose.Schema({
    gameId: {
        type: ObjectId,
        ref: Game
    },
    userId: {
        type: ObjectId,
        ref: User
    },
    paymentId: {
        type: ObjectId,
        ref: Payment
    },
    status: {
        type: String,
        enum: ['paid', 'unpaid']
    }
});

module.exports = mongoose.model('Billing', billingSchema);