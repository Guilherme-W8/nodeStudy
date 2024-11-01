import dbConnect from '../db/dbConnect.js';
import { ObjectId } from 'mongodb';

class Parking {
    constructor(image, name, location, spotQuantity, description) {
        this.image = image;
        this.name = name;
        this.location = location;
        this.spotQuantity = spotQuantity;
        this.description = description;
    }

    save() {
        const parkings = dbConnect.db().collection('parkings').insertOne({
            image: this.image,
            name: this.name,
            location: this.location,
            spotQuantity: this.spotQuantity,
            description: this.description
        });

        return parkings;
    }

    static getParkings() {
        const parkings = dbConnect.db().collection('parkings').find().toArray();

        return parkings;
    }

    static async getParkingById(id) {
        const parking = await dbConnect.db().collection('parkings').findOne({
            _id: new ObjectId(id),
        });

        return parking;
    }
}

export default Parking;