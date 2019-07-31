const express = require("express");
const router = express.Router();
const Place = require("../models/place");

router.get("/new", (req, res, next) => res.render("place/new"));
