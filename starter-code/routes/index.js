const express = require('express');
const router  = express.Router();
const Place = require('../models/place')


/* GET home page */
router.get('/', (req, res, next) => {
  // res.render('index');
  Place.find({})
  .then(allPlaces=>{
    res.render('index',{places: allPlaces});
  })
});

router.get('/crearLocal', (req, res, next) => {
  res.render('create');
});





router.post("/crearLocal", (req, res, next) => {

  const { name, type } = req.body

  if (name === "" || type === "") {
      res.render("create", { message: "Debes rellenar todos los datos" });
      return;
  }

  Place.findOne({ name })
      .then(local => {
          if (local) {
              res.render("create", { message: "El local ya existe" });
              return;
          }

          Place.create({ name, type })
              .then(() => res.redirect('/'))
              .catch(err => console.log('Hubo un error:', err))
          })
      
      .catch(error => {
          next(error)
      })
});



module.exports = router;
