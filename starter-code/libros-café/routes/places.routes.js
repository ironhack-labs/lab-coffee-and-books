const router = require("express").Router();
const { findByIdAndUpdate } = require("../models/Place.model");
const Place = require("../models/Place.model")




////////////// C R E A T E /////////////////

router.get("/create", (req, res, next) => {
    Place
        .find()
        .then(() => res.render("places/create-place"))
        .catch(err => console.log(err))

});
router.post("/create", (req, res, next) => {

    Place
        .create({ ...req.body })
        .then(() => { return Place.find() })
        .then(items => {
            //no entinedo como funciona, pero funciona
            successMessage = "Entry created successfully"
            res.render("places/list-place", { items, successMessage })
        })
        .catch(err => {
            res.render("places/create-place", { errorMessage: "An error ocurred during the register process, please try again" })
            console.log(err)
        })


});
/////////////// L I S T   A L L ///////////

router.get("/", (req, res, next) => {

    Place
        .find()
        .then(items => res.render("places/list-place", { items }))
        .catch(err => console.log(err))


});

/////////////// D E T A I L S    O N E  ///////////

router.get("/:id", (req, res, next) => {

    const { id } = req.params
    Place
        .findById(id)
        .then(item => res.render("places/details-place", item))
        .catch(err => console.log(err))
});

//////////////// E D I T /////////////////////

router.get("/edit/:id", (req, res, next) => {


    const { id } = req.params
    Place
        .findById(id)
        .then(item => res.render("places/edit-place", item))
        .catch(err => console.log(err))

});

router.post("/edit/:id", (req, res, next) => {
    const { id } = req.params


    Place

        .findByIdAndUpdate(id, { ...req.body }, { new: true })
        .then(newItem => {
            newItem.successMessage = "Entry edited successfully"
            res.render("places/details-place", newItem)
        })
        .catch(err => console.log(err))
});
//////////////// D E L E T E /////////////////

router.post("/delete/:id", (req, res, next) => {
    const { id } = req.params
    Place
        .findByIdAndDelete(id)
        .then(() => { return Place.find() })
        .then(items => {
            //no entinedo como funciona, pero funciona
            successMessage = "Entry deleted successfully"
            res.render("places/list-place", { items, successMessage })
        })
        .catch(err => console.log(err))
});

module.exports = router;







///////////////////////// R U T A S  M A L D I T A S //////////////

///////////// L I S T   B O O K S  //////////

router.get("/bookstores", (req, res, next) => {

    Place
        .find({ type: "Bookstore" })
        .then(items => {

            res.render("places/list-place", { items })
        })
        .catch(err => console.log(err))

});
////////////// L I S T  S T O R E S/////////

router.get("/coffee-shops", (req, res, next) => {

    Place
        .find({ type: "CoffeeShop" })
        .then(items => res.render("places/list-place", { items }))
        .catch(err => console.log(err))
});
