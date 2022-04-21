const router = require('express').Router()

const Place = require('../models/place.model')

// ------------------
// NEW PLACE 
// ------------------

router.get("/create", (req, res, next) => {
    res.render("places/new-place");

})

router.post("/create", (req, res, next) => {
    const { name, type, description, lat, lng} = req.body;

    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }
    
    Place
        .create({name, type, description, location})
        .then (() => res.redirect("/places"))
        .catch(err => {console.log('An error occurred when creating the place', err)})

})

// ------------------
// LISTING
// ------------------

router.get("/places", (req, res, next) => {
          
    Place
      .find()
      .then(places => {
          res.render("places/list", {places})
    })
      .catch(err => console.log(err))
    
    });

 // ------------------
// EDIT
// ------------------ 

router.get("/:id/edit", (req, res, next) => {

    const { id } = req.params

    Place
      .findById(id)
      .then(place => {
        res.render('places/edit', place)
    })
    .catch(err => console.log(err))
})

      
router.post("/:id/edit", (req, res, next) => {
    
    const { id } = req.params
    const { name, type, description} = req.body;
      
    Place
        .findByIdAndUpdate(id, { name, type, description })
        .then(() => res.redirect("/places"))    
        .catch(err => console.log(err))
    
})

 // ------------------
// DELETE
// ------------------     
      
router.post("/:id/delete", (req, res, next) => {

    const { id } = req.params;
    
    Place
        .findByIdAndDelete(id)
        .then(() => res.redirect("/"))
        .catch((err) => console.log(err))
    })
      




module.exports = router;