var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('new', { title: 'Express' });
});

router.post('/new', (req, res) => {
  console.log(req.body);
  // res.render('/new');
});
module.exports = router;
