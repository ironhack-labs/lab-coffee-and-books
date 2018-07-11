const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const passport = require('passport');
const bcryptSalt = Number(process.env.SALTNUM);
const bcryptSaltWord = process.env.SALTWORD;
const router = express.Router();
const { isAdmin } = require('../middleware/passportMW');

router.get('/login', (req, res, next) => {
  res.render('users/login');
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/users/login",
  failureFlash: true,
  passReqToCallback: true
})
);

router.get('/signup', (req, res, next) => {
  if (res.locals.user !== undefined) {
    if (res.locals.user.role == 'admin')
      res.locals.isAdmin = true;
    if (res.locals.user.role == 'editor')
      res.locals.isEditor = true;
  }
  res.render('users/signup');
});

router.post('/signup', (req, res, next) => {
  const posterIsAdmin = true;
  const posterIsEditor = true;
  if (req.body.role == undefined) {
    req.body.role = 'guest';
  }
  const {
    username,
    password,
    role
  } = req.body;

  User.findOne({
    username
  })
    .then(user => {
      if (user !== null) {
        throw new Error("Username Already exists");
      }

      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(bcryptSaltWord.concat(password), salt);

      const newUser = new User({
        username,
        password: hashPass,
        role
      });

      return newUser.save()
    })
    .then(user => {
      res.redirect("/");
    })
    .catch(err => {
      console.log(err);
      res.render("users/signup", {
        flashMessage: err.message
      });
    })
});

router.get('/update', isAdmin, (req, res, next) => {
  User.find({}).then(users => {
    res.render('users/control-panel', { users });
  })
});

router.post('/update/:id', isAdmin, (req, res, next) => {
  console.log(req.user);
  console.log(req.params);
  console.log(req.body);
  User.findById(req.params.id).then((user) => {
    console.log('user encontrado')
    console.log(user);
    if (req.body.username)
      user.username = req.body.username;
    if (req.body.password) {
      const salt = bcrypt.genSaltSync(bcryptSalt);
      user.password = bcrypt.hashSync(bcryptSaltWord.concat(req.body.password), salt);
    }
    if (req.body.role !== undefined)
      user.role = req.body.role;

    User.findByIdAndUpdate(user._id, {$set:user})
      .then((res) => {
        res.redirect('users/update', {
          flashMessage: 'User updated!'
        });
      })
      .catch((err) => {
        res.redirect('users/update', {
            flashMessage: 'a problem occured!'
          });
      })
  })
});

router.post('/delete/:id',
  isAdmin, (req, res, next) => {
    User.findByIdAndRemove(req.params.id)
      .then(() => {
        res.redirect('users/manage',
          { flashMessage: 'User deleted' });
      })
      .catch((err) => {
        next();
      })
  });


router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});


module.exports = router;


