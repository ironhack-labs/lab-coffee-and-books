const express = require('express')
const router = express.Router()
const {
  getPlaces,
  getCreatePlace,
  postCreatePlace,
  getEditPlace,
  postEditPlace,
  getOnePlace,
  getDeletePlace
} = require('../controllers/index.controllers')

//*********Crud**********//
router.get('/places/create', getCreatePlace)
router.post('/places/create', postCreatePlace)

//*********cRud**********/
router.get('/', getPlaces)
router.get('/places/:id', getOnePlace)

//*********crUd**********/

router.get('/places/edit/:id', getEditPlace)
router.post('/places/edit/:id', postEditPlace)

//*********cruD**********/
router.get('/places/:id/delete', getDeletePlace)

module.exports = router
