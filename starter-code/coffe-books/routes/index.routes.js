
const router = require("express").Router();

router.get("/", (req, res, next) => {

    res.render("index");
});

//place router
const placeRouter = require('./place.routes')
router.use('/places', placeRouter)

//map router
const mapRouter = require('./maps.routes')
router.use('/maps', mapRouter)

//api router
const apiRouter = require('./api.routes')
router.use('/api', apiRouter)


module.exports = router;



// AIzaSyAMcQ9bKlvREkInysnRWL7ktKtFPGVAC_w