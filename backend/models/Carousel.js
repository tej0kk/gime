const mongoose = require('mongoose');

const carouselSchema = new mongoose.Schema({
    coverSlide: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Carousel', carouselSchema);