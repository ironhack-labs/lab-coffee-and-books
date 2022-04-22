const router = require('express').Router()

router.get('mapa/mapa-basico', (req, res) => {
    res.render('mapa-basico')
})

router.get('/place', (req, res) => {
    res.render('place')
})

module.exports = router