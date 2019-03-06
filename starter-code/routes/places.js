const express = require("express");
const Router = express.Router();

const Place = require('../models/Place')


Router.get("/", (req, res, next) => {
  Place.find()
  .then(places => {
    res.render("places/index", {places, result: JSON.stringify(places)});
  })
  .catch(err => {
      console.log('Error while finding all places', err)
      next()
  })
})

Router.post("/", (req, res, next) => {
    const {name, type, latitude, longitude} = req.body

    let location = {
          type: "Point",
          coordinates: [longitude, latitude]
        }

    const newPlace = new Place({name, type, location}) 
    
    newPlace.save()
    .then(newPlace  => res.redirect('/places'))
    .catch(error      => {
        console.log(`Error saving new place: ${error}`)
        res.render("places/new")
        next()
    })
})


Router.get("/:id", (req, res, next) => {
 
  Place.findById(req.params.id)
    .then(place => {
      res.render("places/show", {place})
    })
    .catch(err => {
        console.log('Error while finding the place', err)
        next()
    })
})

Router.post("/:id", (req, res, next) => {
  const {name, type, latitude, longitude} = req.body

  let location = {
        type: "Point",
        coordinates: [longitude, latitude]
      }

  Place.update({_id: req.params.id},  { $set: {name, type, location}})

  .then(place    => res.redirect('/places'))
  .catch(err => {
    console.log('Error while updating a place', err)
    next()
  })
})

Router.post("/:id/delete", (req, res, next) => {
 
    Place.findByIdAndRemove(req.params.id)
      .then(place => {
        console.log("He borrado el place " +  place)
        res.redirect("/places")
      })
      .catch(err => {
          console.log('Error while deleting a place', err)
          next()
      })
  })

  Router.post("/:id/edit", (req, res, next) => {
 
    Place.findById(req.params.id)
      .then(place => {
        place.lat = place.location.coordinates[1]
        place.lng = place.location.coordinates[0]
        res.render("places/edit", {place})
      })
      .catch(err => {
          console.log('Error while finding a place to edit', err)
          next()
      })
  })

Router.get("/new", (req, res, next) => {
    res.render("places/new")
})






module.exports = Router;