const router = require('express').Router()

/*********************************/
/********** CONTROLLERS **********/
/*********************************/
const {
  showAllPlaces,
  showNewPlaceForm,
  createNewPlace,
  showEditPlaceForm,
  updatePlace,
  deletePlace
} = require('../controllers/place')

/********************************/
/************ CRUD *************/
/*******************************/
router.get('/all', showAllPlaces)
router.get('/create', showNewPlaceForm)
router.post('/create', createNewPlace)
router.get('/edit/:placeId', showEditPlaceForm)
router.post('/edit/:placeId', updatePlace)
router.get('/delete/:placeId', deletePlace)

module.exports = router
