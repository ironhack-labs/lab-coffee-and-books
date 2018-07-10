const express = require('express');
const router  = express.Router();
const Places = require('../models/places');

/* GET home page 
router.get('/', (req, res, next) => {
  res.render('index');
});*/

router.get('/', (req, res, next) => {
  Places.find().then( places => {
    console.log(places);
    res.render('index',{places:JSON.stringify(places)});
  })
});

///////////////////////////////////////
router.get("/places", (req, res, next) => {
  Places.find({})
    .then(placesArray => {
      res.render("places", { placesArray });
      console.log("Places OK");
    })
    .catch(error => {
      console.log(error);
    });
});

/*  C(R)UD: Retrieve -> Detalles de una place */
router.get("/places/:id", (req, res, next) => {
  let celID = req.params.id;
  console.log("El celID vale: " + celID);
  Places.findById(celID)
    .then(place => {
      console.log(`Informacion de lugar ${place} OK!`);
 //     res.render("show", { place });
      res.render('show',{place,
        placeRender:JSON.stringify(place)});
    })
    .catch(error => {
      console.log(error);
    });
});

/* (C)RUD: Agrega forma de  place */
router.get("/new", (req, res, next) => {
  res.render("new");
});

/* (C)RUD: Agrega una place a la DB */
router.post("/new", (req, res, next) => {
  const { name, description, tipo , lat, long } = req.body;
   console.log(`Variables del new name: ${name}, clss=${tipo}, latitude=${lat} `)
  new Places({
    name,
    description,
    class: tipo,
    location:{
        type: "Point",
        coordinates:[parseFloat(lat),parseFloat(long)]
    }
    })
    .save()
    .then(place => {
      console.log("place creada!");
      res.redirect("/places");
    })
    .catch(error => {
      console.log(error);
      res.render("new");
    });
});

/* CRU(D): Elimina una place de la DB */
router.post("/places/:id/delete", (req, res, next) => {
  let celID = req.params.id;
  Places.findByIdAndRemove(celID)
    .then(() => {
      res.redirect("/places");
    })
    .catch(error => {
      console.log(error);
    });
});

/* CR(U)D: GET Agrega forma de nueva place */
router.get("/places/:id/edit", (req, res, next) => {
  let celID = req.params.id;
  Places.findById(celID)
    .then(celebrity => {
      console.log(`Informacion ha actualizar de la place ${celebrity} OK!`);
      res.render("places/edit", { celebrity });
    })
    .catch(error => {
      console.log(error);
    });
});

/* CR(U)D: POST Modifica una place */
router.post("/places/edit", (req, res, next) => {
  const { id, name, occupation, catchPhrase } = req.body;
  console.log(`Estos son los parametros: ${name} mas ${occupation} mas ${catchPhrase} mas ${id}`);
  Places.findByIdAndUpdate(id,{ name, occupation, catchPhrase })
  .then( celebrity => {
    res.redirect('/places')
  })
    .catch(error => {
      console.log(error);
    });
});


module.exports = router;
