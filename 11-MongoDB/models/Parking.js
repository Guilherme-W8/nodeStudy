import mongoose from 'mongoose';
const { Schema } = mongoose;

const Parking = mongoose.model(
    'Parking',
    new Schema({
        name: { type: String, required: true },
        location: { type: String, required: true },
        spotQuantity: { type: Number, required: true },
        description: { type: String, required: true },
        image: { type: String },
    })
);

export default Parking;