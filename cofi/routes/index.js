const express = require('express');
const router  = express.Router();
const Coffee = require("../models/coffee");

/* GET home page */
router.get('/', (req, res, next) => {
  Coffee.find()
      .then(coffee =>{
          res.render('index',{coffee});
      })
});

router.get("/maps", (req, res) => {
  res.render("maps");
});

router.get("/new", (req, res) => {
  res.render("new");
});

router.post("/new", (req, res) => {
  const {name, desc, lat, lng} = req.body;
  let coordinates = [];
    coordinates.push(lng);
    coordinates.push(lat);
  let coffee = {
    name,
    desc,
    location:{
      coordinates
    }
  };

    Restaurant.create(coffee)
        .then(()=>{
          res.redirect("/")
        })
});

router.get("/:id", (req, res) =>{
  Restaurant.findById(req.params.id)
      .then(coffee => {
        res.render("detail",{coffee});
      })
});

module.exports = router;