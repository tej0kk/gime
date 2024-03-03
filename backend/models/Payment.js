const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const paymentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    paymentStep: {
        type: String,
        require: true
    },
});

module.exports=mongoose.model('Payment', paymentSchema);