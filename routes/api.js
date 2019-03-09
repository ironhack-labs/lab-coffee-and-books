const express = require('express');
const router  = express.Router();


// Load the Place DB document mongoose model
const Place = require('../models/Place')


// say hello
router.get('/',
  (_, res, next) =>
{
  res.send('Hello! This is the API for "Coffeee and Books" v 0.0.0.\nTo use this API go to /api/places.')
})


// GET list wih limits
router.get('/places',
  (_, res, next) =>
{
  Place.find()
    .then(
      (queryResults) =>
        res.json(queryResults)
    )
    .catch(
      (error) =>
        res.status(400).send("ERROR! There was a problem READING from the database")
    )
})


// 
router.post('/places',
  (req, res, next) =>
  {
    const postedData = req.body
    const newPlace =
        {
          "location": {coordinates: [0, 0], "type": "Point"},
          "name": "The largest bookstore",
          "type": "bookstore",
          "timestamp": null
        }

  Place.create(newPlace)
  .then(
    (document) =>
      res.json(document)
  )
  .catch(
    (error) =>
      res.status(400).send("ERROR! There was a problem WRITING to the database")
  )
})


// 
router.get('/places/:_id',
  (req, res, next) =>
{
  Place.findById(req.params._id) // 5c813df2ec98871b2694b32e
  .then(
    (document) =>
      res.json(document)
  )
  .catch(
    (error) =>
      res.status(400).send("ERROR! There was a problem READING from the database")
    )
})


// 
router.put('/places/:_id',
  (req, res, next) =>
{
  const updateData = req.body
  const updatePlace =
    {
      "location": {coordinates: [180, 90], "type": "Point"}
    }

  Place.findByIdAndUpdate(req.params._id , updatePlace, {"new": true}) // 5c813df2ec98871b2694b32e
  .then(
    (document) =>
      res.json(document)
  )
  .catch(
    (error) =>
      next(error)
  )
});


// 
router.delete('/places/:_id',
  (req, res, next) =>
{
  Place.findByIdAndDelete(req.params._id)
  .then(
    (document) =>
      res.json(document)
  )
  .catch(
    (error) =>
      res.status(400).send("ERROR! There was a problem WRITING to the database")
    )
});


module.exports = router
