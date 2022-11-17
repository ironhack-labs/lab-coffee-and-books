const router = require("express").Router()

const Site = require('./../models/sites.model')

router.get("/map", (req, res) => {

    Site
        .find()
        .then(maps => res.json(maps))
        .catch(err => console.log(err))
})

module.exports = router