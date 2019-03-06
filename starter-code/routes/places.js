const express = require("express");
const Router = express.Router();

const Place = require('../models/Place')

//vamos a localhost:3000/places. aqui vemos todo (mapa,forms...)
Router.get('/', (req, res, next) => { 

  Place.find()
  .then(places => {
    res.render('index', {places, result: JSON.stringify(places)}); //places lo lee hbs y el otro lo lee JS
  })
  .catch(err => {
    console.log(err)
  })
  
});

//aqui se guarda newplace
Router.post('/', (req, res, next) => {

  const {name, type, latitude, longitude} = req.body

  let location = {
    type: "Point",
    coordinates: [longitude, latitude]
  }

  const newPlace = new Place({
    name,
    type,
    location
  })

  newPlace.save(err => {
    if (err) {
      next(err) 
    } else {
      res.redirect('/')
    }
  })

})



Router.get("/:id", (req, res) => { //cuando pinches  <a href="/places/{{this._id}}">Details</a>  
  Place.findById(req.params.id)
  .then(place  => {
    console.log(place)
    place.lat = place.location.coordinates[1];
    place.lng = place.location.coordinates[0];
    res.render("places/show", {place})} ) //recorre el array de los lugares por ID
  .catch(err    => console.log('Error', err))
})

Router.get("/edit/:id", (req, res) => {
  Place.findById(req.params.id)
  .then(place => {
    console.log(place)
    res.render("places/edit", {place})
  })
  .catch(err => console.log(err))
})


Router.post('/edit/:id', (req, res) => {

  const {name, type} = req.body

  
  Place.update({_id: req.params.id},  {name, type })
  .then(()    => res.redirect('/places'))
  .catch(error  => console.log(`Error updating place: ${error}`))
})


// Router.get("/new", (req, res) => {res.render('places/new')})


// Router.post('/new', (req, res) => {

//   const {name, type, location } = req.body
//   const place = new Place({name, type})

//   place.save()
//     .then(theNewPlace  => res.redirect('/places'))
//     .catch(error       => res.redirect('/places/new'))
// })


Router.post("/:id/delete", (req, res) => {
  Place.findByIdAndRemove(req.params.id)
  .then(place  => res.redirect("/places", {place}) ) 
  .catch(err    => console.log('Error', err))
})







module.exports = Router