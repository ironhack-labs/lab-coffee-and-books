const express = require('express');
const { findById } = require('./../models/User.model');
const router = express.Router();
const Restaurant = require('./../models/User.model')


//detalles restaurantes
router.get("/lista", (req, res, next) => {

  Restaurant
    .find()
    .then(ele => {
      res.render('restaurant/list-restaurant', { restaurantes: ele })
    }
    )

})



/* crear restaurantes */
router.get("/crear", (req, res, next) => {
  res.render("restaurant/new-restaurant");
});


router.post("/crear", (req, res, next) => {

  const { name, type, latitude, longitude } = req.body

  const location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  }

  Restaurant
    .create({ name, type, location })
    .then(restaurantesFromDB => {
      console.log(restaurantesFromDB)
      res.redirect('/restaurantes/lista')
    })
    .catch(err => console.log(err))
});

//Upgrade restaurante

router.get("/upgrade/:res_id", (req, res, next) => {

  const { res_id } = req.params

  Restaurant
    .findById(res_id)
    .then(ele => {
      res.render("restaurant/edit-restaurant", { restaurantes: ele })
    })
    .catch(err => console.log(err))

});
router.post("/upgrade/:res_id", (req, res, next) => {

  const { name, type, latitude, longitude } = req.body
  const { res_id } = req.params
  console.log(req.body)
  Restaurant
    .findByIdAndUpdate(res_id, { name, type, latitude, longitude })
    .then(() => {
      res.redirect("/restaurantes/lista")
    })
    .catch(err => console.log(err))

});

//delete restaurant
router.post("/delete/:res_id", (req, res, next) => {

  const { res_id } = req.params

  Restaurant
    .findByIdAndDelete(res_id)
    .then(() => res.redirect("/restaurantes/lista"))
    .catch(err => console.log(err))
})

router.get('/mapa', (req, res, next) => res.render('restaurant/restaurants-map'))





module.exports = router;
