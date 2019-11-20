const express = require('express');
const router = express.Router();

const place = require('../models/place')

// Lista de cafes
router.get('/', (req, res) => {
  place.find()
    .then(allTheCoffees => res.render('list-coffee', {
      thecoffee: allTheCoffees
    }))
    .catch(err => console.log("Error consultando la BBDD: ", err))
});


//mandar el formulario para editar un cafe
router.get('/add', (req, res) => res.render('add'))

//editar cafes
router.post('/add', (req, res) => {
  const {
    name,
    type
  } = req.body
  place.create({
    name,
    type
  })
    .then(res.redirect('/'))
    .catch(err => console.log('error!!', err))
})



module.exports = router;