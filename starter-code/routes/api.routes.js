const express = require("express")
const router = express.Router()

const Places = require('../models/places.models')

router.get('/', (req, res) => {
  Places.find()
    .then(places => res.json(places))
    .catch(err => console.log("Ha ocurrido un erro en la api: ", err))
})

module.exports = router