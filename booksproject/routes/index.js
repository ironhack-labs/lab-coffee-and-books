var express = require('express');
var router = express.Router();
const { dbUrl } = require('../config');
const Place = require('../models/Place');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* CUANDO EL USER RELLENA EL FORM DE NEW PLACE */
router.post("/", (req, res, next) => {
  const {name} = req.body;
  const {description} = req.body;
  const {kindOfEstablishment} = req.body;
  const lat = req.body.coordinates1;
  const lng = req.body.coordinates2;
  //const location = [location1,location2];


  if (name === "" || description === "" || kindOfEstablishment === "" || lat === "" || lng === "") {
      res.render("index", {
          message: "Please make sure you´ve filled all the info"
      });
      return;
  }

  Place.findOne({name}, "name", (err, place) => {
      if (place !== null) {
          res.render("index", {
              message: "That place already exists!"
          });
          return;
      }


      const newPlace = new Place({
          name,
          description,
          kindOfEstablishment,
          location: {
            coordinates: [lat, lng]
          }
        
        
      });
      console.log(newPlace);
      newPlace.save()
        .then(()=>{
          console.log('se ha creado')
          res.redirect("/");
        })
        .catch((err) => {
          console.log(err)
              res.render("index", {
                  message: "Oops, something went wrong..."
              }
            );
          });
      });
  });
module.exports = router;
