const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/maps", (req, res, next) => {
    res.render("viewsPlace/maps");
});

module.exports = router;