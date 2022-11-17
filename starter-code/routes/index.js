// const express = require('express');
// const router  = express.Router();

// /* GET home page */
// router.get('/', (req, res, next) => {
//   res.render('index');
// });

// module.exports = router;

module.exports = app => {
  app.use('/', require('./index.routes'))
  app.use('/restaurantes', require('./restaurantes.routes'))
  app.use('/mapas', require('./maps.routes'))
  app.use('/api', require('./api.routes'))
}