module.exports = app => {

    const indexRoutes = require("./index.routes")
    app.use("/", indexRoutes)

    const coffeBook = require('./coffe-books.routes')
    app.use('/', coffeBook)

    const apiRoutes = require('./api.routes')
    app.use('/api', apiRoutes)

}