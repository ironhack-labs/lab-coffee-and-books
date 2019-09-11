const Place =require('../models/Place')

exports.deletePlace=async(req,res,next)=>{
  const {_id}=req.params
  await Place.findByIdAndDelete(_id)
  res.redirect('/lugares')
}

exports.updatePlace=async(req,res,next)=>{
  const {name, type}=req.body
  const {placeid}=req.query
  await Place.findByIdAndUpdate(placeid,{name,type})
  res.redirect('/lugares')
}