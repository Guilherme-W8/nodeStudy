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

    static async removeParking(request, response) {
        const id = request.params.id;

        await Parking.removeParkingById(id);

        response.redirect('/parking');
    }

    static createParkingForm(request, response) {
        response.render('parkings/create');
    }

    static async createParkingPost(request, response) {
        const name = request.body.name;
        const location = request.body.location;
        const spotQuantity = request.body.spotQuantity;
        const description = request.body.description;
        const image = request.body.image;

        const parking = new Parking(name, location, spotQuantity, description, image);

        await parking.save();

        response.redirect('/parking');
    }
}