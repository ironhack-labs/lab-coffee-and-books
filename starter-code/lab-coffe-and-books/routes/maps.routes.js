const router = require('express').Router()

router.get('/view', (req, res, render) => {
    res.render('places/map')
})

module.exports = router;