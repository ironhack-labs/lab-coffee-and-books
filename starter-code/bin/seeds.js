const mongoose = require('mongoose')
const Climbing = require('../models/Climbing')

const climbingData = [
    {
        name: 'Magic Mountain',
        location: {
            lat: 52.552185,
            lng: 13.381167
        }
    },
    {
        name: 'Berta block Boulderhalle',
        location: {
            lat: 52.566627,
            lng: 13.40881
        }
    },
    {
        name: 'Cliffhanger Boulderlounge',
        location: {
            lat: 52.544767,
            lng: 13.220801
        }
    },
    {
        name: 'Boulderworx',
        location: {
            lat: 52.489763,
            lng: 13.317692
        }
    }
]

mongoose
    .connect(
        'mongodb://localhost/climbing-wall-locations',
        { useMongoClient: true }
    )
    .then(() => {
        return Climbing.findOne({ name: 'Rusty' })
    })
    .then(rusty => {
        if (rusty) return
        return Climbing.create(climbingData)
    })
    .then(() => {
        process.exit(0)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    })
