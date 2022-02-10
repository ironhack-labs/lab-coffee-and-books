const router = require("express").Router()

const Place = require("../models/Place.model")



router.get("/list", (req, res, next)=>{
    Place
       .find()
       .then(places =>res.render('places/places-list',{places}))
    
})

router.get("/create", (req, res, next)=>{
    res.render('places/add-places')
})

router.post("/create", (req, res, next) =>{
    let {name,type,lat,lng}=req.body
    lat = Number(lat)
    lng = Number(lng)
    let location = {lat,lng}
    console.log(lat,lng)
    console.log(name,type)
    Place
      .create({name,type,location})
      .then(() => res.redirect("/places/list"))
      .catch(err => console.log(err))

})

router.get("/:id/update", (req, res, next) =>{
    const {id} = req.params
    Place
      .findById(id)
      .then(place => { res.render('places/places-update',place)})
      .catch(err => console.log(err))
})

router.post("/:id/update", (req, res, next) =>{
    const { id } = req.params
    const { name, type } = req.body
    Place
      .findByIdAndUpdate(id, { name, type},{new:true})
      .then(() => res.redirect("/places/list"))
      .catch(err => console.log(err))
})
router.post("/:id/delete", (req, res, next) =>{
    const { id } = req.params
    Place
      .findByIdAndDelete(id) 
      .then(() => res.redirect("/places/list"))
      .catch(err => console.log(err))
})
module.exports = router