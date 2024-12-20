import Parking from '../models/Parking.js';

export default class ParkingController {
    static async showParking(request, response) {
        const id = request.params.id;

        const parking = await Parking.findById(id).lean();

        return response.render('parkings/parking', { parking });
    }

    static async showParkings(request, response) {
        const parkings = await Parking.find().lean();

        return response.render('parkings/all', { parkings });
    }

    static async removeParking(request, response) {
        const id = request.params.id;

        await Parking.deleteOne({
            _id: id
        });

        return response.redirect('/parking');
    }

    static async editParkingForm(request, response) {
        const id = request.params.id;

        const parking = await Parking.findById(id).lean();

        return response.render('parkings/edit', { parking });
    }

    static async editParkingPost(request, response) {
        const { id, name, location, spotQuantity, description, image } = request.body;

        const parking = { name, location, spotQuantity, description, image };

        await Parking.updateOne({
            _id: id
        }, parking);

        return response.redirect(`/parking/show/${id}`);
    }

    static createParkingForm(request, response) {
        return response.render('parkings/create');
    }

    static async createParkingPost(request, response) {
        const name = request.body.name;
        const location = request.body.location;
        const spotQuantity = request.body.spotQuantity;
        const description = request.body.description;
        const image = request.body.image;

        const parking = new Parking({ name, location, spotQuantity, description, image });

        await parking.save();

        return response.redirect('/parking');
    }
}