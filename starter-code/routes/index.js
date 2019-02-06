const express = require('express');
const router  = express.Router();

/* GET home page */
// router.get('/', (req, res, next) => {
//   res.render('index');
// });

router.get('/coffeeshops', (req, res, next) => {
  res.render('index');
});
module.exports = router;
