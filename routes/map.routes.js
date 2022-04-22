const router = require('express').Router()

router.get('/restaurantes', (req, res) => {
    res.render('maps/restaurants-map')
})

module.exports = router