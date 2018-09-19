const express = require('express')
const router = express.Router()
const Place = require('../models/Place')

// router.get('/mapita',(req,res,next)=>{
//   res.render('index')
// })

/*function checkRole(role){
  return (req, res, next)=>{
    if(req.isAuthenticated() && req.user.role===role){
      next()
    }else{
      res.redirect('/login')
    }
  }
}*/

//lista

router.get('/', (req, res, next)=>{
  Place.find()
  .then(places=>{
  res.render('places/list',{places})
})
})

//detalle

router.get('/detail/:id',(req, res, next)=>{
  const {id} = req.params
  Place.findById(id)
    .then(place=>{
      res.render('places/detail',place)
    }).catch(e=>{
      console.log(e)
      next(e)
    })
})


//agregar

router.get('/new', (req, res, next)=>{
  res.render('places/new')
})

router.post('/new',(req,res,next)=>{
  Place.create(req.body)
 .then(place=>{
    res.redirect('/places')
   }).catch(e=>next(e))
})

//update

router.get('/edit/:id', (req, res, next)=>{
  res.render('places/edit')
})


router.get('/delete/:id', (req, res, next)=>{
  res.render('places/delete')
})


module.exports = router