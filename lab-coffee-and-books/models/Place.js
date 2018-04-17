const mongoose = require('mongoose'); // Importar mongoose
const Schema = mongoose.Schema; // Declarar la variable modelo

const placeSchema = new Schema(
    {   // Creating the Schema with the properties
        name: String,
        description: String,
        type: String,
        location: { type: { type: String }, coordinates: [Number] },
        
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

placeSchema.index({ location: '2dsphere' });


const Place = mongoose.model('Place', placeSchema); // Creating the celebrity model

module.exports = Place; // Exportar el modelo


