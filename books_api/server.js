// require express module
const express = require('express')
// require mongoose
const mongoose = require('mongoose')
// require middleware
const requestLogger = require('./lib/requestLogger')
// require route
const bookRoutes = require('./routes/bookRoutes')
const reviewRoutes = require('./routes/reviewRoutes')
// connect to mongodb
mongoose.connect('mongodb://localhost/books_api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// Get the default connection
const db = mongoose.connection
// database coonection verification
db.on('error', console.error.bind(console, 'MondoDB connection error:'))
db.once('open', function () {
  console.log('database connected successfully')
})
// create new express application
const app = express()

// middleware
// middleware to accept request body data
app.use(express.json())
// middleware to log the request
app.use(requestLogger)

// routes
app.use(bookRoutes)
app.use(reviewRoutes)

// start application on port 4741
app.listen(4741, () => console.log('Example app listening on port 4741!'))
