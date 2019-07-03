const router = require("express").Router();
const { getPlaces, getCreatePlace, postCreatePlace, getOnePlace, getEditPlace, postEditPlace, getDeletePlace } = require("../controllers/index.controllers");

router.get("/places/create", getCreatePlace);
router.post("/places/create", postCreatePlace);

router.get("/", getPlaces);
router.get("/places/:id", getOnePlace);

router.get("/places/:id/edit", getEditPlace);
router.post("/places/:id/edit", postEditPlace);

router.get("/places/:id/delete", getDeletePlace);

module.exports = router;
