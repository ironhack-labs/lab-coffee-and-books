const router = require("express").Router()

router.get("/mapa", (req, res, next) => {
    res.render("map/map")
})


module.exports = router