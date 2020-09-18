const express = require("express");
const Places = require("../models/place");
const router = express.Router();

const Place = require("../models/place")

// /places

router.get("/list", (req, res) => {
    
    Places
        .find({})
        .then(places => res.render("places-list", { places }))
        .catch(err => console.log("error-------",err))
})



router.get("/edit/:_id", (req, res) => {

    const id = req.params._id  

  Places.findById(id)
        .then((places) => res.render("places-edit-form",  places ))
        .catch((err) => console.log("error-------", err));
});

router.post("/edit/:_id", (req, res) => {

    const id = req.params._id;
    
    const { name, type } = req.body
    
    Places.findByIdAndUpdate(id, { name, type })
      .then(() => res.redirect("/places/list"))
      .catch((err) => console.log("error-------", err));
    
});

router.get("/delete/:_id", (req, res) => {
  const id = req.params._id;

    
  Places.findByIdAndDelete(id)
    .then(() => res.redirect("/places/list"))
    .catch((err) => console.log("error-------", err));
});


router.get("/create", (req, res) => res.render("places-create-form"));

router.post("/create", (req, res) => {

    let location = {
        type: "Point",
        coordinates: [req.body.longitude,req.body.latitude]
    }

    const { name, type, } = req.body
    console.log(req.body);
    
    Places.create({ name, type, location })
      .then(() => res.redirect("/places/list"))
      .catch((err) => console.log("error-------", err));
})



module.exports = router;