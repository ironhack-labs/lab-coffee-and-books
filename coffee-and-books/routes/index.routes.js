const express = require('express')
const router = express.Router()

//Models
const Place = require('./../models/Place.model')

// Index
router.get("/", (req, res, next) => {
  res.render("index")
})

module.exports = router
