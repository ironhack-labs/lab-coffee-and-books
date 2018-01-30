const Bookstore = require('../models/bookstore.model');
const path = require('path');

module.exports.show = (req,res,next)=>{
  res.render("bookstore/index");
};
module.exports.new = (req,res,next)=>{
  res.render("bookstore/new");
};