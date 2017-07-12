const express = require('express');
const placeRouter = express.Router();

/* GET home page. */
placeRouter.get('/new', function(req, res, next) {
  res.render('places/createplace');
});

placeRouter.post('/new', function(req, res, next) {
  const placeInfo = {
    name: req.body.name,
    typePlace: req.body.typePlace,
  };
  const newUser = new User(userInfo);

  newUser.save((err) => {
    if (err) {
      return next(err);
    }
    return res.redirect('/newuser');
  });
});

module.exports = placeRouter;
