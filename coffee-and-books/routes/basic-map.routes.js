const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/basico", (req, res, next) => {
    res.render("maps/basic-map");
});

module.exports = router;