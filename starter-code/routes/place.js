router.get('/new', (req, res, next) => {
    res.render('place/new');
  });
  
  router.post('/new', (req, res, next) => {
  
    let place = {
      name: req.body.name,
      description: req.body.description,
      location: {
        type: 'Point',
        coordinates: [Number(req.body.latitude), Number(req.body.longitude)]
      }
    }
    console.log(place);
    Place.create(place).then( place => {
      res.redirect('/place');
    }).catch(e=> next(e));
  });
  
  
  module.exports = router;