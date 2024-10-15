import express from 'express';
import TaskController from '../controllers/TaskController.js';

const router = express.Router();

router.get('/add', TaskController.createTask);
router.get('/all', TaskController.showTasks);

export default router;