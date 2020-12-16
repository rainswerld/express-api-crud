const express = require('express')
const router = express.Router()

// require model
const Book = require('./../models/book')

router.post('/books/:id/reviews', (req, res) => {
  const id = req.params.id
  const review = req.body.review
  Book.findById(id)
    .then(book => {
      book.reviews.push(review)
      return book.save()
    })
    .then(book => res.status(201).json({ book: book }))
    .catch(console.error)
})

module.exports = router
