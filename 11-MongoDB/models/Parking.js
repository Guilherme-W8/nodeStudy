import dbConnect from '../db/dbConnect.js';

class Parking {
    constructor(location, spotQuantity, description) {
        this.location = location;
        this.spotQuantity = spotQuantity;
        this.description = description;
    }

    save() {
        const parkings = dbConnect.db().collection('parkings').insertOne({
            location: this.location,
            spotQuantity: this.spotQuantity,
            description: this.description
        });

        return parkings;
    }
}

export default Parking;