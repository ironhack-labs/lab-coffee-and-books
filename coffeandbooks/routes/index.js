const express = require('express');
const router  = express.Router();
const Place = require('../models/Place')

//Index
router.get('/',(req, res, next)=>{
    res.render ('index')
  })

module.exports = router;
