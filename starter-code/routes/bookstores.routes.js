const express = require('express');
const router = express.Router();

// const multer = require('multer');
// const upload = multer({ dest: 'documents/' });

const bookstoresController = require('../controllers/bookstores.controller');

router.get('/', bookstoresController.show);


module.exports = router;