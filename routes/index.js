const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  if (res.locals.user !== undefined) {
    if (res.locals.user.role == 'admin')
      res.locals.isAdmin = true;
    if (res.locals.user.role == 'editor')
      res.locals.isEditor = true;
  }
  res.render('index');
});

module.exports = router;

/* 
title: 'Coffee & Books!',
user: { _id: 5b4548493ffb401d43cb0841,
   updated_at: 2018-07-10T23:59:05.867Z,
   created_at: 2018-07-10T23:59:05.867Z,
   username: 'a',
   password: '$2b$06$wBXY7rOYHd0Ihi/ZyxBqr.rk.C8Vgv5Lb/p/wVdaRYlyZjU3xeYSG',
   role: 'admin',
   __v: 0 },
message: [] }
 */