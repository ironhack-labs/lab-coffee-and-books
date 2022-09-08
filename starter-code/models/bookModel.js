const {Schema, model} = require('mongoose');

const storeSchema = new Schema(
    {
    name: {type: String},
    location: {
        type:{type: String}, 
        coordinate: [Number]},
    type : {
        type: String,
    // enum: ["coffee shop", "bookstore"],
    // default: 'coffee shop'
    },
    
},
{
    timestramps: true,
}
)

storeSchema.index({location:'2dsphere'})
const Store =  model("Store", storeSchema)

module.exports = Store