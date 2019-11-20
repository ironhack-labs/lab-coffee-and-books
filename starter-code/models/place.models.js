const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coffeeSchema = new Schema({
    name: String,
    type: ["coffee shop", "bookstore"],
}, {
    timestamps: true
})


const Coffeeshops = mongoose.model("Coffeeshops", coffeeSchema)

module.exports = Coffeeshops