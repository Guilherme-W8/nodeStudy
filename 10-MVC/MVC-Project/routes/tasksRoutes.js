import express from 'express';
import TaskController from '../controllers/TaskController.js';

const router = express.Router();

router.get('/add', TaskController.createTask);
router.post('/add', TaskController.saveTask);
router.post('/remove', TaskController.removeTask);
router.post('/edit', TaskController.updateTaskPost);
router.post('/updatestatus', TaskController.toggleTaskStatus);
router.get('/edit/:id', TaskController.updateTask);
router.get('/all', TaskController.showTasks);

export default router;