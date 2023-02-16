const express = require('express');
const router = express.Router();

router.get('/basic-map', (req, res, next) => {
    res.render('maps/basic-map')
})

module.exports = router