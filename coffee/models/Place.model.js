const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const placeSchema = new Schema(
    {
        name: {
            type: String,

        },
        type: {
            type: String,
            enum: ['coffeshop', 'bookstore'],
        },
        location: {
            type: {
                type: String
            },
            coordinates: [Number]
        }

    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`    
        timestamps: true
    }
);

placeSchema.index({ location: '2dsphere' })


module.exports = model('Place', placeSchema);
