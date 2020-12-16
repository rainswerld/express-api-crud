
// logs when the server has a request
const requestLogger = function(req, res, next){
  console.log('\n======== INCOMING REQUEST ========\n')
  // shows the date and time
  console.log(`${new Date()}`)
  // shows the method we required and the path
  console.log(`${req.method} ${req.url}`)
  // stringify the data contained in the body
  console.log(`body: ${JSON.stringify(req.body)}`)
  console.log('\n==================================\n')
  // moves onto the next middleware function
  next()
}

module.exports = requestLogger
