const express = require('express');
const router  = express.Router();
const { home, editPlace, editPlaceForm, addPlace, addPlaceForm,deletePlace } =require('../controllers/index')
const { catchErrors } = require('../middlewares/catchErrors')

router.get('/', home)
router.get('/editplace', editPlaceForm)
router.post('/editplace', catchErrors(editPlace))
router.post('/addplace', catchErrors(addPlace))
router.get('/addplace', addPlaceForm)
router.post('/:id/delete', catchErrors(deletePlace))


module.exports = router;
