const axios = require('axios')
const express = require('express')
const router  = express.Router()

// Load the Place DB document mongoose model
const Place = require('../models/Place')

// GET home page 
router.get('/',
  (_, res, next) =>
{
  axios
  .get(
    `http://localhost:${process.env.PORT}/api/places`)
  .then(
    serverResponse =>
    res.render('index', {places: serverResponse.data, gMapAPIKey: process.env.GMAPS_API_KEY})
  )
  .catch(
    error =>
    next(error)
  )
})

module.exports = router
