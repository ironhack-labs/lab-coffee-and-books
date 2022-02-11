module.exports = (app) => {
  app.use("/", require("./base.routes"));
  app.use("/mapas", require("./maps.routes"));
  app.use("/places", require("./places.routes"));
  app.use("/api", require("./api.routes"));
};
