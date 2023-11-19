const express = require('express');
const router = express.Router();

router.get("/maps/basic-map", (req, res, next) => {
    res.render("maps/basic-map")
})

module.exports = router