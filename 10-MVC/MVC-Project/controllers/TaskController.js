import Task from '../models/Tasks.js';

export default class TaskController {
    static createTask(request, response){
        response.render('tasks/creates');
    }
}