 const express = require('express');
 const router = express.Router();

 const Place = require("../models/place.model");


 router.get("/", (req, res, next) => {
   Place.find({})
     .then(places => {
       res.render("places", {
         places
       });
     })
     .catch(err => console.log("hay un error en el listado de places", err))
 });

 //Formulario de crear una nuevo place
 router.get('/new', (req, res) => res.render('places/new'))

 //Sacar con la id el detalle de un place
 router.get('/:id', (req, res, next) => {

   const placeId = req.params.id

   Place.findById(placeId)
     .then(place => {
       res.render('places/show', {
         place
       })
     })
     .catch(err => {
       console.log("Error consultando el place en la BBDD: ", err)
       next(err)
     })
 });

 //Crear nuevo place
 router.post('/', (req, res) => {

   const {
     name,
     type,
   } = req.body

   Place.create({
       name,
       type,
     })
     .then(() => res.redirect('/places'))
     .catch(err => {
       console.log("Hubo un fallo añadiendo newPlace", err)
     })
   res.redirect("/places")
 });

 //Borrar place
 router.post("/:id/delete", (req, res, next) => {

   const removeId = req.params.id

   Place.findByIdAndRemove(removeId)
     .then(() => res.redirect("/places"))
     .catch(err => {
       console.log("Hubo un error borrando el place en la BBDD: ", err)
       next(err)
     })
 })

 //Formulario para editar un place
 router.get('/:id/edit', (req, res) => {

   const placeId = req.params.id

   Place.findById(placeId)
     .then(place => res.render('places/edit', place))
     .catch(err => console.log(err))
 })

 //Actualización edición place
 router.post('/:id/edit', (req, res, next) => {
   const placeId = req.params.id
   console.log("EL id del place que llega como URL param es:", placeId)

   Place.findByIdAndUpdate(placeId, req.body, {
       useFindAndModify: false
     })
     .then(x => res.redirect(`/places`))
     .catch(err => {
       console.log("Hubo un error al actualizar un place", err)
       next(err)
     })
 })

 module.exports = router;