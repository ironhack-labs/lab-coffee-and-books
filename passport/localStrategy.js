const User = require('../models/user');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
// const bcryptSalt = Number(process.env.SALTNUM);
const bcryptSaltWord = process.env.SALTWORD;

passport.use(new LocalStrategy((username, password, next) => {
    User.findOne({ username })
        .then(user => {
            if (!user)
                throw new Error("Incorrect Username");
            if (!bcrypt.compareSync(bcryptSaltWord.concat(password), user.password))
                throw new Error("Incorrect Password");

            return next(null, user);
        })
        .catch(e => {
            next(null, false, {
                flashMessage: e.message
            })
        })
}));