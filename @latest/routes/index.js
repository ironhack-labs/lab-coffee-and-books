module.exports = app => {

    // Base routes
    const indexRouter = require("./index.routes");
    app.use("/", indexRouter);

    const placesRoutes = require("./places.routes");
    app.use("/places", placesRoutes)

    const apiRoutes = require("./api.routes")
    app.use("/api", apiRoutes)

    const mapRoutes = require("./map.routes")
    app.use("/mapa", mapRoutes)
}