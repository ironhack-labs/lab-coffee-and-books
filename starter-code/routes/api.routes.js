const router = require("express").Router();

const Cafeteria = require("./../models/Place.model");

router.get("/cafeterias", (req, res) => {
	Cafeteria.find()
		.then((cafeterias) => res.json(cafeterias))
		.catch((err) => console.log(err));
});

module.exports = router;
