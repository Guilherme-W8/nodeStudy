import express from 'express';
import ParkingController from '../controllers/ParkingController.js';
const router = express.Router();

router.get('/create', ParkingController.createParkingForm);
router.post('/create', ParkingController.createParkingPost);
router.get('/', ParkingController.showParkings);
router.get('/:id', ParkingController.showParking);

export default router;