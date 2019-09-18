const express = require('express');
const router  = express.Router();
const Place = require('../models/Place');

router.use('/', require('./place.routes'));
/* GET home page */
/* router.get('/', (req, res, next) => {
  res.render('index');
}); */
 
router.get("/", (req, res, next) => {
  Place.find()
    .select({
      name: 1
    })
    .then(allPlaces => {
      console.log(allPlaces)
      res.render('index', {
        allPlaces
      });
    })
 });
  router.post("/:id/delete", (req, res) => {
    Place.findByIdAndDelete(req.params.id).then(() => {
      res.redirect("/");
    }).catch((err) => console.log(err))
   })
//  app.get("/create-movie", (req, res) => {
//   Directors.find().then(directors => {
//     res.render("add-movie", { directors: directors });
//   });
// });

// app.get("/", (req, res) => {
//   Places.findByIdAndDelete(req.params.name).then(deletedMovie => {
//     res.redirect("/index");
//   });
// });

module.exports = router;
