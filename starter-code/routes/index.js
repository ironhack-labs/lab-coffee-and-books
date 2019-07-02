const express = require('express');
const router  = express.Router();
const  { 
  getPlaces, 
  getCreatePlace, 
  postCreatePlace, 
  getOnePlace, 
  getEditPlace, 
  postEditPlace, 
  getDeletePlace} = require('../controllers/index.controllers')
/* GET home page */

//******************* cRud *************************+ */
router.get('/places/create', getCreatePlace)
router.post('/places/create', postCreatePlace)
//******************* CRUD *************************+ */
router.get('/', getPlaces)
router.get('/places/:id', getOnePlace)
//******************* CRUD *************************+ */
router.get('/places/:id/edit', getEditPlace)
router.post('/places/:id/edit', postEditPlace)
//******************* CRUD *************************+ */
router.get('/places/:id/delete', getDeletePlace)

module.exports = router;
