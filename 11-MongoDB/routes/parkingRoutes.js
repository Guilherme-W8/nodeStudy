import express from 'express';
import ParkingController from '../controllers/ParkingController.js';
const router = express.Router();

router.get('/create', ParkingController.createParkingForm);
router.post('/create', ParkingController.createParkingPost);
router.get('/', ParkingController.showParkings);

export default router;