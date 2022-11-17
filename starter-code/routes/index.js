module.exports = (app) => {
	// Index
	const index = require("./index.routes");
	app.use("/", index);

	// Cafés
	const cafesRoutes = require("./cafes.routes");
	app.use("/", cafesRoutes);

	// Mapas
	const mapasRoutes = require("./maps.routes");
	app.use("/", mapasRoutes);

	// API
	const apiRoutes = require("./api.routes");
	app.use("/api", apiRoutes);
};
