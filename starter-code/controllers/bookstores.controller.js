const Bookstore = require('../models/bookstore.model');
const path = require('path');

module.exports.show = (req, res, next) => {
  res.render("bookstore/index");
};
module.exports.new = (req, res, next) => {
  res.render("bookstore/new");
};
module.exports.create = (req, res, next) => {
  // res.json({hoola:"todo bon"});
  const {
    name,
    description,
    lat,
    lng
  } = req.body;
  if (!name || !description || !lat || !lng) {
    res.json({
      error: {
        name: name ? '' : 'name is required',
        description: description ? '' : 'description is required',
        lat: lat ? '' : 'lat is required',
        lng: lng ? '' : 'lng is required'
      }
    });
  }else{
    Bookstore.findOne({
        name: req.body.name
      })
      .then(bookstore => {
        if (bookstore != null) {
          res.json({
            bookstore: bookstore,
            error: {
              name: 'Bookstore name already exists'
            }
          });
        } else {
          bookstore = new Bookstore(req.body);
          bookstore.save()
            .then(() => {
              // req.flash('info', 'Successfully sign up, now you can login!');
              // res.send("GO TO LOGIN");
              res.json({success:"Bookstore save successfully"});
            }).catch(error => {
              if (error instanceof mongoose.Error.ValidationError) {
                res.json({
                  bookstore: bookstore,
                  error: error.errors
                });
              } else {
                next(error);
              }
            });
        }
      }).catch(error => next(error));
  }
};