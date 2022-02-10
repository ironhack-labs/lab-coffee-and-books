module.exports = app => {
    const indexRouter = require("./index.routes");
    app.use("/", indexRouter);

    const placesRouter = require("./places.routes");
    app.use("/", placesRouter);

    const api = require("./api.routes")
    app.use("/api", api)
}