const mongoose = require('mongoose');

const featureSchema = new mongoose.Schema({
    featureName: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Feature', featureSchema);