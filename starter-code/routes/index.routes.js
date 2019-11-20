const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Store = require('../models/place.model')


/* GET home page */
router.get('/', (req, res, next) => res.render('index'))

// Visualizar todas 
router.get('/resume', (req, res) => {
  Store.find()
    .then(allTheStores => {
      res.render('resume', { stores: allTheStores })
        .catch(err => console.log("error al recuperar la BBDD ", err))
    })
})
// Agregar tiendas
router.get('/add', (req, res) => res.render('add'))
router.post('/add', (req, res) => {
  const name = req.body.name
  const type = req.body.type
  const location = { type: 'Point', coordinates: [req.body.longitude, req.body.latitude] }
  Store.create({ name, type, location })
    .then(x => res.redirect('/resume'))
    .catch(err => console.log("error al crear libreria", err))
})

//Eliminar tiendas
router.get('/:id/delete', (req, res) => {
  Store.findByIdAndRemove(req.params.id)
    .then(x => res.redirect('/resume'))
    .catch(err => console.log("error al eliminar la tienda", err))
})

router.get('/:id/edit', (req, res) => {
  Store.findById(req.params.id)
    .then(theStore => {
      res.render('edit', theStore)
      console.log(req.params.id)
    })
    .catch(err => console.log("error al recibir la informacion BBDD", err))
})
router.post('/:id/edit', (req, res) => {
  const { name, type } = req.body
  Store.findByIdAndUpdate(req.params.id, {
    name, type
  })
    .then(x => res.redirect('/resume'))
    .catch(err => console.log("error al actualizar la tienda", err))

})
router.get('/api', (req, res, next) => {
  Store.find()
    .then(allTheStores => res.status(200).json({ store: allTheStores }))
    .catch(err => next(err))
});






// to see raw data in your browser, just go on: http://localhost:3000/api/someIdHere
router.get('/api/:id', (req, res, next) => {
  let storeId = req.params.id;
  Store.findOne({ _id: storeId }, (error, oneRestaurantFromDB) => {
    if (error) {
      next(error)
    } else {
      res.status(200).json({ store: oneRestaurantFromDB });
    }
  });
});
module.exports = router;
