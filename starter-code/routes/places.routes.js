const express = require('express')
const router = express.Router()

const Place = require('../models/place.model')


// >>>>>>> LIST <<<<<<<
router.get("/", (req, res) => {

    Place
        .find()        
        .then(allPlaces => res.render("places/index", { allPlaces }))
        .catch(err => console.log("Error:", err))   
})

// >>>>>>> CREATE <<<<<<<
router.get("/new", (req, res) => res.render("places/new-place"))

router.post("/new", (req, res) => {

    const { name, type } = req.body
    
    Place
        .create({ name, type })
        .then(() => res.redirect("/places"))
        .catch(err => console.log("Error:", err))    
})

// >>>>>>> EDIT <<<<<<<
router.get("/edit", (req, res) => {

    const placeId = req.query.id

    Place
        .findById(placeId)
        .then(placeInfo => res.render("places/edit-place", placeInfo))
        .catch(err => console.log("Error:", err))        
})

router.post("/edit", (req, res) => {

    const placeId = req.query.id

    const { name, type } = req.body 

    Place
        .findByIdAndUpdate(placeId, { name, type })
        .then(() => res.redirect("/places"))
        .catch(err => console.log("Error:", err)) 
    
})

// >>>>>>> DELETE <<<<<<<
router.get("/delete", (req, res) => {

    const placeId = req.query.id

    Place
        .findByIdAndDelete(placeId)
        .then(() => res.redirect("/places"))
        .catch(err => console.log("Error:", err)) 
    
})

module.exports = router