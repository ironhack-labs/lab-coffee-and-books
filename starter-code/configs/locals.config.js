require('dotenv').config()

module.exports = app => {
  app.locals.title = 'Coffe & Books'
  app.locals.secret = process.env.SECRET
}