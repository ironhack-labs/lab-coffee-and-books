const express = require('express')
const router = express.Router()


/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('location/index')
})

/* GET home page. */
router.post('/add', (req, res, next) => {
  res.render('index')
})



module.exports = router
