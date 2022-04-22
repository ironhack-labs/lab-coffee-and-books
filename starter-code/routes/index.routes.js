const router = require("express").Router();
const Place = require('./../models/place.model')

router.use('/crud', require('./crud.routes'))
router.use('/api', require('./api.routes'))



router.get('/', (req, res) => {

  Place
    .find()
    .then(local => {
      res.render('index', { local })
      console.log(local)
    })
    .catch(err => console.log(err))

  router.post('/:id/delete', (req, res) => {

    Place
      .findByIdAndDelete(req.params.id)
      .then(() => {
        res.render("index")
      })
      .catch(err => console.log(err))
  })


});


module.exports = router;
