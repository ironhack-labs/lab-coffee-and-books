const express = require('express');
const router  = express.Router();
const { getPlaces, getPlacesById, getCreatePlaces, postCreatePlaces, deletePlaces, getUpdatePlaces, postUpdatePlaces} = require('../controllers/index')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


//Crud
router.get('/places/create', getCreatePlaces)
router.post('/places/create', postCreatePlaces)

// cRud
router.get('/places', getPlaces)
router.get('/places/:id', getPlacesById)

// crUd
router.get('/places/:id/edit', getUpdatePlaces)
router.post('/places/:id/edit', postUpdatePlaces)

// cruD
router.get('/places/:id/delete', deletePlaces)



module.exports = router;
