const Bookstore = require('../models/bookstore.model');
const path = require('path');

module.exports.show = (req, res, next) => {
  res.render("bookstore/index");
};
module.exports.new = (req, res, next) => {
  res.render("bookstore/new");
};
module.exports.create = (req, res, next) => {
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
  }
  // } else {
  //   User.findOne({
  //       username: req.body.username
  //     })
  //     .then(user => {
  //       if (user != null) {
  //         res.render('auth/signup', {
  //           user: user,
  //           error: {
  //             username: 'Username already exists'
  //           }
  //         });
  //       } else {
  //         user = new User(req.body);
  //         user.save()
  //           .then(() => {
  //             // req.flash('info', 'Successfully sign up, now you can login!');
  //             // res.send("GO TO LOGIN");
  //             res.redirect('/login');
  //           }).catch(error => {
  //             if (error instanceof mongoose.Error.ValidationError) {
  //               res.render('auth/signup', {
  //                 user: user,
  //                 error: error.errors
  //               });
  //             } else {
  //               next(error);
  //             }
  //           });
  //       }
  //     }).catch(error => next(error));
  // }
};