const express = require('express');
const router = express.Router();

router.get("/paints", (req, res, next) => {
    res.render("maps/places-maps")
})

module.exports = router