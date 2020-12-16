const express = require('express')
const router = express.Router()

// require model
const Book = require('./../models/book')

// INDEX: define route GET to /books that responds with books JSON
router.get('/books', (req, res) => {
  Book.find()
  .then(books => res.json({ books: books }))
  .catch(console.error)
})

// SHOW: define route GET to /books/:id that responds with book JSON
router.get('/books/:id', (req, res) => {
  const books = req.body
  const id = req.params.id
  const book = books[id]
  Book.findById(id)
    .then(book => res.json({ book: book }))
    .catch(console.error)


  // below is for when we had a mock database
  // const id = req.params.id
  // // // this will console.log to the server
  // // console.log(id)
  // const book = books[id]
  // res.json({ book: book })
})

// CREATE:
router.post('/books', (req, res) => {
  const book = req.body.book
  Book.create(book)
    .then(book => res.status(201).json({ book: book }))
    .catch(console.error)

  // below is for when we had a mock database
  // // accept data from the request
  // const book = req.body.book
  // // add book to the array
  // books.push(book)
  // // respond with the book
  // res.status(201).json({ book: book })
})

// PATCH:
router.patch('/books/:id', (req, res) => {
  const id = req.params.id
  const bookData = req.body.book
  Book.findById(id)
    .then(book => book.updateOne(bookData))
    .then(() => res.sendStatus(204))
    .catch(console.error)
})

// DESTROY:
router.delete('/books/:id', (req, res) => {
  const books = req.body
  const id = req.params.id
  const book = books[id]
  Book.findById(id)
    .then(book => {
      return book.deleteOne()
    })
    .then(book => {
      res.sendStatus(204)
    })
    .catch(console.error)
  // below is for when we had a mock database
  // const id = req.params.id
  // books.splice(id, 1)
  // res.sendStatus(204)
})

// export the function
module.exports = router
