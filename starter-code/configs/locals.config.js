module.exports = app => {
  app.locals.title = 'Café y Libros'
  app.locals.secret = process.env.SECRET
}