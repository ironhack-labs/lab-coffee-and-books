const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const passport = require('passport');
const bcryptSalt = Number(process.env.SALTNUM);
const bcryptSaltWord= process.env.SALTWORD;
const router  = express.Router();

router.get('/login', (req, res, next) => {
  res.render('/users/login');
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true,
  passReqToCallback: true
})
);

router.get('/signup', (req, res, next) => {
  //logic to create isAdmin and isEditor logic
  res.render('/users/signup');
});

router.post('/signup', (req, res, next) => {
  // console.log(req.body)
  const {
    username,
    password,
  } = req.body;

  User.findOne({
      username
    })
    .then(user => {
      if (user !== null) {
        throw new Error("Username Already exists");
      }

      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(bcryptSaltWord.concat(password),salt);
      
      const newUser = new User({
        username,
        password: hashPass,
        role: [req.body.role]
      });

      return newUser.save()
    })
    .then(user => {
      res.redirect("/");
    })
    .catch(err => {
      console.log(err);
      res.render("auth/signup", {
        errorMessage: err.message
      });
    })
})


router.get('/logout' , (req,res) => {
  req.logout();
  res.redirect('/');
})


module.exports = router;


