const express = require('express');

const apiRouter = express.Router();
const CoofeeAndBook = require('../models/coffeeandbook.js');

apiRouter.route('/').get((req, res) => {
  CoofeeAndBook.find((error, shops) => { // mongoose result comming back from the db into variable "shops""
    console.log(shops);
    if (error) {
      res.status(500).json({ message: error });
    } else {
      // res.render('api/index', { shops });
      res.status(200).json(shops);
    }
  });
});

module.exports = apiRouter;
