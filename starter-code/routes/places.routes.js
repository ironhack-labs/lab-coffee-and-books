const express = require("express");
const placesRouter = express.Router();
const Places = require("../models/Places");

/* GET home page */
placesRouter.get("/", (req, res, next) => {
  Places.find().then(allPlaces => {
    res.json(allPlaces);
  });
});

placesRouter.get("/new", (req, res, next) => {
  res.render("places/new");
});

placesRouter.post("/new", (req, res, next) => {
  const { name, type, latitude, longitude } = req.body;
  if (name === "" || type === "") {
    res.render("places/new", {
      message: "Please, introduce all the fields"
    });
  }
  Places.findOne({ name })
    .then(placeFound => {
      if (placeFound === null) {
        const newPlace = new Places({
          name,
          type,
          location: {
            coordinates: [longitude, latitude],
            type: "Point"
          }
        });
        newPlace.save(err => {
          if (err) {
            res.render("places/new", {
              message: "Something went wrong"
            });
          } else {
            res.redirect("/");
            return;
          }
        });
      } else {
        res.render("places/new", {
          message: "This place already exists"
        });
      }
    })
    .catch(error => {
      next(error);
    });
});

placesRouter.get("/generalView", (req, res, next) => {
  if (req.query.error) {
    Places.find()
      .select({ name: 1 })
      .then(allPlaces => {
        res.render("places/generalView", {
          allPlaces,
          error: "Something went wrong, please, try again"
        });
      })
      .catch(error => {
        res.json({ error: "Error while getting the users from the DB" });
      });
  } else {
    Places.find()
      .select({ name: 1 })
      .then(allPlaces => {
        res.render("places/generalView", { allPlaces });
      })
      .catch(error => {
        res.json({ error: "Error while getting the users from the DB" });
      });
  }
});

placesRouter.get("/details/:id", (req, res, next) => {
  Places.findById(req.params.id)
    .then(placeFound => {
      res.render("places/details", { placeFound });
    })
    .catch(error => {
      res.json({ error: "This celebrity was not found" });
    });
});
placesRouter.get("/edit/:id", (req, res, next) => {
  Places.findById(req.params.id)
    .then(placeFound => {
      res.render("places/edit", { placeFound });
    })
    .catch(error => {
      res.json({ error: "Please, try again" });
    });
});

//No funciona ¿¿¿???
placesRouter.post("/edit/:id", (req, res, next) => {
  console.log("hola")
  const { name, latitude, longitude, type } = req.body;
  Places.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        name,
        type,
        location: { type: "Point", coordinates: [longitude, latitude] }
      }
    },
    { new: true }
  ).then(updatedPlace => {
    console.log(req.body);
    res.redirect(`/details/${req.body._id}`);
  })
  .catch(error => next(error));
});

module.exports = placesRouter;
