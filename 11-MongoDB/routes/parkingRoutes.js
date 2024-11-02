import express from 'express';
import ParkingController from '../controllers/ParkingController.js';
const router = express.Router();

router.get('/create', ParkingController.createParkingForm);
router.post('/create-post', ParkingController.createParkingPost);

router.post('/remove/:id', ParkingController.removeParking);

router.get('/edit/:id', ParkingController.editParkingForm);

router.get('/show/:id', ParkingController.showParking);
router.get('/', ParkingController.showParkings);

export default router;