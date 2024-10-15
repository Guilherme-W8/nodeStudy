import Task from '../models/Tasks.js';

export default class TaskController {
    static createTask(request, response){
        response.render('tasks/create');
    }

    static showTasks(request, response){
        response.render('tasks/all');
    }
}