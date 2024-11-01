import Parking from '../models/Parking.js';

export default class ParkingController {
    static async showParking(request, response) {
        const id = request.params.id;

        const parking = await Parking.getParkingById(id);

        response.render('parkings/parking', { parking });
    }

    static async showParkings(request, response) {
        const parkings = await Parking.getParkings();

        response.render('parkings/all', { parkings });
    }

    static createParkingForm(request, response) {
        response.render('parkings/create');
    }

    static createParkingPost(request, response) {
        const image = request.body.image;
        const name = request.body.name;
        const location = request.body.location;
        const spotQuantity = request.body.spotQuantity;
        const description = request.body.description;

        const parking = new Parking(image, name, location, spotQuantity, description);

        parking.save();

        response.redirect('/parking');
    }
}