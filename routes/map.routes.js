const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('places/map')
})

module.exports = router