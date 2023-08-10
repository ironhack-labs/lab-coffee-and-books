const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/map", (req, res, next) => {
    res.render("places/map");
});

module.exports = router;