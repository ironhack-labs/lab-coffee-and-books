const express = require('express');
const router  = express.Router();
const Cofbok = require('../models/Cofbok')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

///////////crear lugar

router.get('/new', (req, res, next)=>{
  res.render('new')  
})

router.post('/new', (req, res)=>{
  Cofbok.create(req.body)
    .then(coffes=>{
      res.redirect('/')
    }).catch(e=>{
      console.log(e)
    })
})


/////////////cafeterias

router.get('/list', (req, res)=>{
  Cofbok.find({type:{$ne:'BOOKSTORE'}})
    .then(coffes=>{
      res.render('cafeterias/list', {coffes})
    }).catch(e=>{
      console.log(e)
    })
})


router.get('/list/:id', (req, res)=>{
  Cofbok.findById(req.params.id)
    .then(coffes=>{
      res.render('cafeterias/caf-detail', coffes)
    }).catch(e=>{
      console.log(e)
    })
})

//////////////librerias

router.get('/booklist', (req, res)=>{
  Cofbok.find({type:{$ne:'COFFE'}})
    .then(libros=>{
      res.render('librerias/booklist', {libros})
    }).catch(e=>{
      console.log(e)
    })
})


router.get('/booklist/:id', (req, res)=>{
  Cofbok.findById(req.params.id)
    .then(libros=>{
      res.render('librerias/lib-detail', libros)
    }).catch(e=>{
      console.log(e)
    })
})

//////borrar

router.get('/delete/:id',(req,res,next)=>{
  const {id}=req.params
  Cofbok.findByIdAndRemove(id)
  .then(lugares=>{
    res.redirect('/')
  }).catch(e=>next(e))
})

/////////editar

router.get('/edit/:id',(req, res, next)=>{
  const {id} = req.params
  Cofbok.findById(id)
    .then(lugares=>{
      res.render('editar', lugares)
    }).catch(e=>next(e))
})

router.post('/edit/:id',(req, res, next)=>{
  const {id} = req.params
  Cofbok.findByIdAndUpdate(id,{$set:req.body},{new:true})
    .then(lugares=>{
      res.redirect('/')
    }).catch(e=>next(e))
})



module.exports = router;
