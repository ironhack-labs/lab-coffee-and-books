const router = require('express').Router()
const Place = require('../models/Place')

router.get('/', (req, res) => {
  res.render('coffeeViews/dashboard')
})

module.exports = router