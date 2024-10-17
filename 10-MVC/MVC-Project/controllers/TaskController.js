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

    static async showTasks(request, response){

        const tasks = await Task.findAll({raw: true});

        response.render('tasks/all', {tasks});
    }

    static async removeTask(request, response){
        const id = request.body.id;

        await Task.destroy(
            {
                where: {
                    id: id,
                },
            }
        );

        response.redirect('/tasks/all');
    }

    static async updateTask(request, response){
        const id = request.params.id;

        const task = await Task.findOne({
            raw: true,
            where: {
                id: id,
            }
        });

        response.render('tasks/edit', { task });
    }
}