module.exports = app => {
    const indexRoutes = require("./index.routes")
    app.use("/", indexRoutes)

    const placeRoutes = require("./place.routes")
    app.use("/place", placeRoutes)
    const apiRoutes = require("./api.routes")
    app.use("/api", apiRoutes)

}