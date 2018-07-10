const User = require('../models/User');
const passport = require('passport');

passport.serializeUser((user, cb) => {
    cb(null, user._id);
});

passport.deserializeUser((id, cbo) => {
    User.findById(id, (err, user) => {
        if (err) {
            return cb(err);
        }
        cbo(null, user);
    });
});
