const express = require('express');
const router = express.Router();

router.get('/map', (req, res, next) => {
    res.render('maps/map')
})

module.exports = router