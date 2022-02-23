const mongoose = require('mongoose');


const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true,
    },
    genres: {
        type: Array,
        required: true,
    },
    ratings: {
        type: Array
    },
    posterurl: {
        type: String
    }
})


module.exports = mongoose.model('movies', movieSchema)