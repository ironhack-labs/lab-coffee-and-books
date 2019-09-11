const express = require('express');
const router  = express.Router();
const {mostrarPlaces, mostrarForm, updateMap, agregarAlMapa, deleteNew} = require('../controllers/index')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index')
});

router.get('/map', agregarAlMapa)

//Nuevas rutas
router.get('/places', mostrarPlaces)
router.get('/crud', mostrarForm)
router.post('/crud', updateMap)
router.post('/delete/:id', deleteNew)

module.exports = router;
