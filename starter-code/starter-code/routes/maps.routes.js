const express = require('express');
const router = express.Router();

router.get("/basico", (req, res, next) => {
    res.render("maps/basics");
});

module.exports = router;