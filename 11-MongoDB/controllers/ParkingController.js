// import Parking from '../models/Parking.js';

export default class Parking {
    static showParkings(request, response) {
        response.render('parkings/all');
    }
}