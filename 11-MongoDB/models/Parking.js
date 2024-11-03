import dbConnect from '../db/dbConnect.js';
import { ObjectId } from 'mongodb';

class Parking {
    constructor(name, location, spotQuantity, description, image) {
        this.name = name;
        this.location = location;
        this.spotQuantity = spotQuantity;
        this.description = description;
        this.image = image;
    }

    save() {
        const parkings = dbConnect.db().collection('parkings').insertOne({
            name: this.name,
            location: this.location,
            spotQuantity: this.spotQuantity,
            description: this.description,
            image: this.image
        });

        return parkings;
    }

    static async getParkings() {
        const parkings = await dbConnect.db().collection('parkings').find().toArray();

        return parkings;
    }

    static async getParkingById(id) {
        const parking = await dbConnect.db().collection('parkings').findOne({
            _id: new ObjectId(id),
        });

        return parking;
    }

    static async removeParkingById(id) {
        await dbConnect.db().collection('parkings').deleteOne({
            _id: new ObjectId(id),
        });

        return;
    }

    updateParking(id) {
        dbConnect.db().collection('parkings').updateOne({
            _id: new ObjectId(id)
        }, {
            $set: this
        });

        return;
    }
}

export default Parking;