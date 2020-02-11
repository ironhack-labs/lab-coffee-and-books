const express = require("express");
const router = express.Router();
const Places = require("../models/place");

/* GET home page */
router.get("/", (req, res, next) => {
  Places.find()
    .then(placesFound => res.render("index", { placesFound }))
    .catch(err => {
      console.error("Error connecting to mongo");
      next(err);
    });
});

router.post("/", (req, res, next) => {
  console.log("reqbody", req.body);
  Places.create({
    name: req.body.name,
    type: req.body.type,
    positionlat: req.body.lat,
    positionlng: req.body.lng
  }).then(() => {
    Places.find()
      .then(placesFound => res.render("index", { placesFound }))
      .catch(err => {
        console.error("Error connecting to mongo");
        next(err);
      });
  });
  // }
});

// router.get("/places", (req, res, next) => {
//   Places.find()
//     .then(placesFound => res.render("index", { placesFound }))
//     .catch(err => {
//       console.error("Error connecting to mongo");
//       next(err);
//     });
// });

router.post("/places/:id/delete", (req, res, next) => {
  let { id } = req.params;
  Places.findByIdAndRemove(id).then(() => {
    res.redirect("/").catch(err => {
      console.error("Error connecting to mongo");
      next(err);
    });
  });
  // }
});

router.get("/places/:id", (req, res, next) => {
  let { id } = req.params;
  Places.findById(id)
    .then(placesFound => res.render("detail", placesFound))
    .catch(err => {
      console.error("Error connecting to mongo");
      next(err);
    });
});
////////PARA AXIOS
router.get("/placesForAxios/:id", (req, res, next) => {
  let { id } = req.params;
  Places.findById(id)
    .then(placesFound => res.json(placesFound))
    .catch(err => {
      console.error("Error connecting to mongo");
      next(err);
    });
});

router.get("/placesForAxios", (req, res, next) => {
  Places.find()
    .then(placesFound => res.json(placesFound))
    .catch(err => {
      console.error("Error connecting to mongo");
      next(err);
    });
});

router.post("/places/:id", (req, res, next) => {
  let { id } = req.params;
  let place = {
    name: req.body.name,
    type: req.body.type
  };
  Places.findByIdAndUpdate(id, place)
    .then(() => Places.findById(id))
    .then(placesFound => res.render("detail", placesFound))
    .catch(err => {
      console.error("Error connecting to mongo");
      next(err);
    });
});

router.post("/updatelocation", (req, res, next) => {
  console.log(req.body);
  let id = req.body.id;
  let place = {
    positionlat: req.body.positionlat.toString(),
    positionlng: req.body.positionlng.toString()
  };
  Places.findByIdAndUpdate(id, place)
    .then(() => Places.findById(id))
    .then(found => res.json(found))
    .catch(err => {
      console.error("Error connecting to mongo");
      next(err);
    });
});

module.exports = router;
