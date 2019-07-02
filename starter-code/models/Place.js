const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaName = new Schema({
    name: String,
    type: {
        type: String,
        enum: ['coffee shop', 'bookstore'],
        default: 'coffee shop'
    },
    location: { 
        type: {
            type: String
        },
        coordinates: [Number]
    }
}, 
{
    timestamps: { 
        createdAt: "created_at", updatedAt: "updated_at"
    }
});

const Model = mongoose.model('Place',schemaName);
module.exports = Model;