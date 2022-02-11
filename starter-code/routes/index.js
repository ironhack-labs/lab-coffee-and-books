module.exports = app => {

    // Base routes
    const placeRouter = require("./place.routes");
    app.use("/", placeRouter);

}
