const express = require("express");
const router = express.Router();

const Cafeteria = require("../models/Place.model");

// Listado
router.get("/cafeterias", (req, res, next) => {
	Cafeteria.find()
		.then((cafeterias) => res.render("places/list", { cafeterias }))
		.catch((err) => console.log(err));
});

// Crear nueva cafetería
router.get("/cafeterias/crear", (req, res) => {
	res.render("places/create").catch((err) => console.log(err));
});

router.post("/cafeterias/crear", (req, res) => {
	const { name, type, lat, lng } = req.body;

	const location = {
		type: "Point",
		coordinates: [lat, lng],
	};

	Cafeteria.create({ name, type, location })
		.then((cafeteria) => res.redirect("/cafeterias"))
		.catch((err) => console.log(err));
});

// Editar cafetería
router.get("/cafeterias/editar/:id", (req, res) => {
	const { id: cafeteria_id } = req.params;

	Cafeteria.findById(cafeteria_id)
		.then((details) => {
			res.render("places/edit", details);
		})
		.catch((err) => console.log(err));
});

router.post("/cafeterias/editar/:id", (req, res) => {
	const { id: cafeteria_id } = req.params;
	const { name, type, lat, lng } = req.body;

	const location = {
		type: "Point",
		coordinates: [lat, lng],
	};

	Cafeteria.findByIdAndUpdate(cafeteria_id, { name, type, location })
		.then(() => res.redirect("/cafeterias"))
		.catch((err) => console.log(err));
});

module.exports = router;
