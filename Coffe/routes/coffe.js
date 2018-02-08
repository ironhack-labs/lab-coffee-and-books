const express = require('express');
const router = express.Router();
const Coffee = require('../models/Coffe');

/* GET users listing. */
router.get('/new-coffe', function (req, res, next) {
    Coffee.find({}).then((e, coffe) => {
        res.render('index', { coffeePlaces: coffeePlaces});
    })
    
});
router.post('/', (req, res, next) => {
    const user = req.session.currentUser
    

    const newTweet = new Tweet({
        user_id: user._id,
        user_name: user.username,
        tweet: req.body.tweet
    });
   

    newTweetnew.save((err) => {
        if (err) {
            res.render("tweets/new",
                {
                    username: user.username,
                    errorMessage: err.errors.tweet.message
                });
        } else {
            res.redirect("/");
        }
    });
});


module.exports = router;