const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/map", (req, res, next) => {
    res.render("places/maps");
});

module.exports = router;