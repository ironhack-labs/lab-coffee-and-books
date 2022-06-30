const router = require("express").Router();

router.get("/map", (req, res) => {
    res.render('maps/firstmap')
})

module.exports = router
