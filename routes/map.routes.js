const router = require("express").Router();

router.get("/mapa", (req, res, next) => {
    res.render("places/mapa")
})

module.exports = router