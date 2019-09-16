const Place = require('../models/Place')

exports.showAllPlaces = async (req, res) => {
  try {
    const places = await Place.find()
    res.render('place/all', { places })
  } catch (error) {
    console.log(error)
  }
}

exports.showNewPlaceForm = (req, res) => {
  const options = {
    title: 'Create a new place',
    action: '/place/create',
    buttonText: 'Create'
  }
  res.render('place/form', { options })
}

exports.createNewPlace = async (req, res) => {
  try {
    const { name, type, address, lng, lat } = req.body
    const newPlace = {
      name,
      type,
      address,
      location: {
        type: 'Point',
        coordinates: [lng, lat]
      }
    }
    await Place.create(newPlace)
    res.redirect('/place/all')
  } catch (error) {
    console.log(error)
  }
}

exports.showEditPlaceForm = async (req, res) => {
  const { placeId } = req.params
  const options = {
    title: 'Editing:',
    action: `/place/edit/${placeId}`,
    buttonText: 'Update',
    edit: true
  }
  const placeToEdit = await Place.findById(placeId)
  res.render('place/form', { placeToEdit, options })
}

exports.updatePlace = async (req, res) => {
  try {
    const { placeId } = req.params
    const { name, type, address, lng, lat } = req.body
    const updatedPlace = {
      name,
      type,
      address,
      location: {
        type: 'Point',
        coordinates: [lng, lat]
      }
    }
    await Place.findByIdAndUpdate(placeId, updatedPlace)
    res.redirect('/place/all')
  } catch (error) {
    console.log(error)
  }
}

exports.deletePlace = async (req, res) => {
  try {
    const { placeId } = req.params
    await Place.findByIdAndDelete(placeId)
    res.redirect('/')
  } catch (error) {
    console.log(error)
  }
}
