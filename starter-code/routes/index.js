const express = require('express');
const router = express.Router();
const coffeBooks = require("../models/place");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post("/allplaces", (req, res, next) => {
  console.log(req.body)
  const {
    name,
    type,
    location
  } = req.body;

  coffeBooks.create({
    name,
    type,
    location
  })
    .then(() => {
      res.redirect("/allplaces");
    })
    .catch(error => {
      console.log(error);
    })
})


router.get('/allplaces', (req, res) => {
  res.render('allplaces')
})




module.exports = router;
