const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  }
})

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  reviews: [reviewSchema]
}, {
  timestamps: true
})

module.exports = mongoose.model('Book', bookSchema)
