const express = require('express');
const router = express.Router();

router.get("/basic", (req, res, next) => {
    res.render("map/basic-map")
})

module.exports = router