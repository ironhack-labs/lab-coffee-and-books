const router = require('express').Router()

const Site = require('./../models/sites.model')

router.get("/mapa", (req, res, next) => res.render("maps/sites"))

module.exports = router

