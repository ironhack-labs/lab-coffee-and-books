const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post("/", (req, res, next) => {
  const name = req.body.name;
  const kind = req.body.kind;

  const location = {
    type: "Point",
    coordinates: [ req.body.latitude, req.body.longitude ]
  }

  const newPlace = new Place({
    name,
    kind,
    location
  });

  newPlace.save()
    .then( () => {
      res.redirect("/");
    })
    .catch( (err) => {
      console.log(err);
    });
})

module.exports = router;
