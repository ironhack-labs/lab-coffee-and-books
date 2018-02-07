const express = require("express");
const router = express.Router();

const Place = require("../models/place");

router.get("/", (req, res, next) => {
	Place.find((err, places) => {
		if(err){
			next(err);
		} else {
			res.render("index", { title: 'Cofee & Books', places });
		}
	});
});

router.get("/:id", (req, res, next) => {
	Place.findById(req.params.id, (err, place) => {
		if(err){
			next(err);
		} else if(!place){
			const tempErr= new Error("place not found");
			next(tempErr);
		} else {
			res.render("show", { place });
		}
	});
});

module.exports = router;