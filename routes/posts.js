const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

function isAuth(req, res, next) {
  if (req.isAuthenticated()) return next();
  return res.redirect("/auth/login");
}

function checkIfIs(role) {
  return function(req, res, next) {
    if (req.user.role === role) return next();
    return res.send({ message: `No eres un ${role}` });
  };
}

router.post("/new", isAuth, checkIfIs("EDITOR"), (req, res, next) => {
  req.body.user = req.user._id;
  Post.create(req.body).then(post => {
    res.redirect("/posts");
  });
});

router.get("/new", isAuth, checkIfIs("ADMIN"), (req, res, next) => {
  res.render("posts/new");
});

/* GET list page */
router.get("/", (req, res, next) => {
  Post.find().then(posts => {
    res.render("posts/list", { posts });
  });
});

module.exports = router;
