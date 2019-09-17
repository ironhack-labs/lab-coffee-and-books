const express       = require('express');
const mapRouter     = express.Router();
// const Place         = require('../models/Place');


mapRouter.get('/map', (req, res, next) => {
  res.render('maps/map')
});
  




module.exports = mapRouter;

