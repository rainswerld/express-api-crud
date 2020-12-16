// require express
const express = require('express')
// create express app
const app = express()

// define route
app.get('/books', function(req, res) {
  res.send('Hello World!')
})

// launch app on port 4741
app.listen(4741, function() {
  console.log('Example app listening on port 4741!')
})
