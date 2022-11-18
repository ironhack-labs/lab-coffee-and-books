const { Schema, model } = require("mongoose");

const placesSchema = new Schema(
    {
        name:String,
       
        type: {
            type: String,
            enum:['coffeShop', 'bookStore']
            }

    },
    {
        timestamps: true
    }
)



const Places = model("Places", placesSchema);

module.exports = Places;

