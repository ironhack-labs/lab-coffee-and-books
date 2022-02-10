module.exports = (app) => {
  app.use("/", require("./base"));
  app.use("/maps", require("./maps"));
  app.use("/places", require("./places"));
  app.use("/api", require("./api"));
};
