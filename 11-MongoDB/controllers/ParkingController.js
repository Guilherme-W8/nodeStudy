import Parking from '../models/Parking.js';

export default class ParkingController {
    static showParkings(request, response) {
        response.render('parkings/all');
    }

    static createParkingForm(request, response) {
        response.render('parkings/create');
    }

    static createParkingPost(request, response) {
        const location = request.body.location;
        const spotQuantity = request.body.spotQuantity;
        const description = request.body.description;

        const parking = new Parking(location, spotQuantity, description);

        parking.save();

        response.redirect('/parking');
    }
}