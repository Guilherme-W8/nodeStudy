import Task from '../models/Tasks.js';

export default class TaskController {
    static createTask(request, response){
        response.render('tasks/create');
    }

    static async saveTask(request, response){

        const task = {
            title: request.body.title,
            description: request.body.description,
            done: false
        }

        await Task.create(task);
        
        response.redirect('/tasks/all');
    }

    static showTasks(request, response){
        response.render('tasks/all');
    }
}