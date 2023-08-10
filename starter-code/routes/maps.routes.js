const router = require('express').Router()


router.get('/mapa', (req, res, next) => {
    res.render('maps/map')
})

module.exports = router