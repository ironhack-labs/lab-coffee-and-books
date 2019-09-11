const Place =require('../models/Place')


// exports.createNew=async(req,res)=>{
//     const {name}=req.body
//     const {type}=req.body
  
//     await New.create({title,body,author:_id})
//     res.redirect('/news')
//   }

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