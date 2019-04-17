const express = require('express');
const router  = express.Router();
const Shop = require('../models/place');

/* GET home page */
router.get('/', (req, res, next) => {
  Shop.find({})
  .then((shop) => {
    res.render('shop/index', {shop});
  })
  .catch(() => {
    next();
  })
});

router.get("/add", (req, res, next) => {
  res.render('shop/add');
});

router.get("/places", (req,res) => {
  Shop.find()
  .then(places => res.json(places));
});

//map
router.get("/maps", (req, res, next) => {
  let apikey = process.env.APIKEY;
  res.render('shop/maps', {apikey: apikey});
});

//create new shop
router.post('/add', (req, res) => {
  const name = req.body.name;
  const type = req.body.type;
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;

  if (name === "" || type === "" || latitude === "" || longitude === "") {
    res.render("shop/add", { message: "Indicate Name, type and location" });
    return;
  }
  if (longitude < -180 || longitude > 180) {
    res.render("shop/add", { message: "Longitude is wrong!" });
    return;
  }
  if (latitude < -90 || latitude > 90) {
    res.render("shop/add", { message: "Latitude is wrong!" });
    return;
  }
  Shop
    .create({
      name: name,
      type: type,
      location: {
        coordinates: [
          latitude,
          longitude
        ]
      }
    })
    .then(() => {
      res.render("shop/add", { messageAdd: "Added!"});
    })
    .catch(() => {
      res.render("shop/add", { message: "Something went wrong" });
    })
});

//delete shop
router.post('/deleteShop', (req, res, next) => {
  let shopId = req.body.id;
  Shop.findByIdAndDelete(shopId)
  .then(() => {
    res.redirect('/');
  })
  .catch(() => {
    next();
  })
});

//edit shop
router.get("/edit/:id", (req, res, next) => {
  let shopId = req.params.id;
  Shop.findById(shopId)
  .then((shop) => {
    res.render('shop/edit', shop);
  })
  .catch((err) => {
    next(err);
  })
});

router.post('/edit/:id', (req, res, next) => {
  let shopId = req.params.id;
  const {name, type, location} = req.body;
  Shop.findByIdAndUpdate(shopId, req.body)
  .then(() => {
    res.redirect('/');
  })
  .catch(() => {
    res.render("shop/edit", { message: "Something went wrong" });
  })
});


module.exports = router;
