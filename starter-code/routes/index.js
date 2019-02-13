let express = require("express");
let router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

//Delete
router.post("/places/delete/:id", (req, res, next) => {
  Place.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect("/places");
    })
    .catch(e => next(e));
});

//New
router.get("/places/new", (req, res, next) => {
  const config = {
    action: "/places/new",
    submit: "New",
    name: "",
    stars: "",
    title: "Add new place"
  };
  res.render("new", config);
});

router.post("/places/new", (req, res, next) => {
  Place.create({ ...req.body })
    .then(place => {
      res.redirect(`/places/detail/${place._id}`);
    })
    .catch(err => {
      res.send(err);
    });
});

//Edit View
router.get("/places/edit/:id", (req, res, next) => {
  const { id } = req.params;
  Place.findById(id)
    .then(place => {
      const config = {
        action: `/places/edit/${place._id}`,
        submit: "Update",
        name: place.name,
        stars: place.stars,
        title: "Edit this place"
      };

      res.render("new", config);
    })
    .catch(err => {
      res.send(err);
    });
});

router.post("/places/edit/:id", (req, res, next) => {
  const { id } = req.params;
  Place.findByIdAndUpdate(id, { ...req.body }, { new: true })
    .then(() => {
      res.redirect(`/places/detail/${id}`);
    })
    .catch(err => {
      res.send(err);
    });
});

//Detail view
router.get("/places/detail/:id", (req, res, next) => {
  //deconstruir
  const { id } = req.params;
  Place.findById(id)
    .then(place => {
      //No va con llaves porque ya es un objeto
      res.render("detail", place);
    })
    .catch(err => {
      res.render("place", err);
    });
});

//Show all
router.get("/places", (req, res, next) => {
  Place.find()
    .then(places => {
      res.render("places", { places });
    })
    .catch(err => {
      res.render("places", err);
    });
});

module.exports = router;
