const express = require('express');
const router = express.Router();

router.get('/mapa', (req, res, next) => {
    res.render('place/place-map')
})


module.exports = router