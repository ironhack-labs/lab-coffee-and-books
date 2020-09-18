module.exports = app => {
    app.locals.title = 'Coffee and Books'
    app.locals.googleKey = process.env.googleKey
}
