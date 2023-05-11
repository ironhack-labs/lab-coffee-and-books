const express = require('express')
const router = express.Router()

// const places = require('./models/place')

router.get("/", (req, res, next) => {
  res.render("index")
})
module.exports = router