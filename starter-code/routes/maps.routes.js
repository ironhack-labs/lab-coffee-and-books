const router = require("express").Router()

router.get('/maps', (req, res) => res.render('maps/map'))

module.exports = router