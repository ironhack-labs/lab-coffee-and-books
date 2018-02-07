const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/coffee-and-books");
const CoffeeShop = require("../models/place");
const BookStore = require("../models/place");

const coffeeShops = [
  {
    title: "The Book Club",
    description: "Beautiful",
    location: ""
  },
  {
    title: "The Book Club",
    description: "Beautiful",
    location: ""
  }
];

const bookStores = [
  {
    title: "The Book Lover",
    description: "A very big store containig a large choice of books",
    location: ""
  },
  {
    title: "The Book Lover",
    description: "A very big store containig a large choice of books",
    location: ""
  }
];

CoffeeShop.create(coffeeShops, (err, savedCoffeeShops) => {
  if (err) {
    throw err;
  }

  BookStore.create(bookStores, (err, savedBookStores) => {
    if (err) {
      throw err;
    }
    savedBookStores.forEach(theBookStore => {
      console.log(`${theBookStore.title} - ${theBookStore._id}`);
    });
  });

  savedCoffeeShops.forEach(theCoffeeShop => {
    console.log(`${theCoffeeShop.name} - ${theCoffeeShop._id}`);
  });
  mongoose.disconnect();
});
