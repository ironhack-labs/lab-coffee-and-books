const mongoose = require("mongoose");

function dbConnect(cb) {
    mongoose
        .connect("mongodb://localhost/coffeandbooks", { useNewUrlParser: true, useUnifiedTopology: true })
        .then(x => {
            console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
            cb();
        })
        .catch(err => {
            console.error("Error connecting to mongo", err);
        });
}


dbConnect(() => {
    const Place = require("../models/Place");

    placesList = [
        {
            name: 'Starbucks',
            type: 'Coffee shop',
            location: {"lat":40.381953,"lng":-3.707500},
            img: '/images/cafe.png',
            imgtitle: '/images/marker_coffee.png'
        },
        {
            name: 'The book',
            type: 'Bookstore',
            location: {"lat":40.392651,"lng":-3.687198},
            img: '/images/libro.jpg',
            imgtitle: '/images/marker_book.png'
        },
        {
            name: 'New Library',
            type: 'Bookstore',
            location: {"lat":40.393764,"lng":-3.729907},
            img: '/images/libro.jpg',
            imgtitle: '/images/marker_book.png'
        },
        {
            name: 'The bear',
            type: 'Coffee shop',
            location: {"lat":40.407105,"lng":-3.720223},
            img: '/images/cafe.png',
            imgtitle: '/images/marker_coffee.png'
        },{
            name: 'Vivari',
            type: 'Coffee shop',
            location: {"lat":40.405497,"lng":-3.707041},
            img: '/images/cafe.png',
            imgtitle: '/images/marker_coffee.png'
        },
        {
            name: 'Plaza de Mayo',
            type: 'Coffee shop',
            location: {"lat":40.406104,"lng":-3.698857},
            img: '/images/cafe.png',
            imgtitle: '/images/marker_coffee.png'
        },
        {
            name: 'London city',
            type: 'Bookstore',
            location: {"lat":40.395936,"lng":-3.694427},
            img: '/images/libro.jpg',
            imgtitle: '/images/marker_book.png'
        },
        {
            name: 'Legazpi',
            type: 'Bookstore',
            location: {"lat":40.3925046,"lng":-3.700465},
            img: '/images/libro.jpg',
            imgtitle: '/images/marker_book.png'
        }
    ]

    Place.deleteMany()
        .then(() => {
            return Place.create(placesList)
        })
        .then(() => {
            console.log("succesfully added all the data");
            mongoose.connection.close();
            process.exit(0);
        });
});