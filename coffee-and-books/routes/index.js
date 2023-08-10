module.exports = app => {

    const indexRoutes = require("./index.routes");
    app.use("/", indexRoutes);

    const placesRoutes = require("./places.routes");
    app.use("/", placesRoutes);

    const apiRoutes = require("./api.routes");
    app.use("/api", apiRoutes);

}

