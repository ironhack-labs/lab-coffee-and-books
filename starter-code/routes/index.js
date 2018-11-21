const express = require('express');
const router = express.Router();
const Places = require("../models/Place");

/* GET home page */
router.get('/', (req, res, next) => {
    Places.find()
        .then(places => res.render('index', { places }))
        .catch(err => { next(err) });
});

router.post('/:id/delete', (req, res, next) => {
    Places.findByIdAndRemove(req.params.id)
        .then(() => res.redirect('index'))
        .catch(error => next(error))
})



module.exports = router;