const router = require("express").Router()

router.get("/maps", (req,res,next)=>{
    res.render("maps/maps")
})

module.exports = router