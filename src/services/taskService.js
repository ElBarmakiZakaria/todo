import {priorities, statuses} from '../data/enum.js';

class TaskService {
    constructor () {
        this.storageKey = "tasks_data";
    }

    saveTasks(tasksArray){
        const tasksJSON = JSON.stringify(tasksArray, null, 2);
        localStorage.setItem(this.storageKey, tasksJSON);
    }

    loadTasks() {
        const tasksJSON = localStorage.getItem(this.storageKey);

        if (tasksJSON) {
            return JSON.parse(tasksJSON);
        }else {
            return [];
        }
    }

    addTask(task) {
        let tasks = this.loadTasks();
        task.forEach(element => {
            tasks.push(element);
        });
        

        this.saveTasks(tasks);
        return this.loadTasks();
    }

    deleteTask(task) {
        let tasks = this.loadTasks()
        let index = tasks.findIndex(t => t.id === task.id);

        if (index !== -1) {
            tasks.splice(index, 1);
        }

        this.saveTasks(tasks);
        return this.loadTasks();
    }

    // updateTask(task) {
    //     let tasks = this.loadTasks()
    //     let index = tasks.findIndex(t => t.id === task.id);
    //     tasks[index].priority = priorities.low;
        
    //     this.saveTasks(tasks);
    //     return this.loadTasks();
    // }
}

export default TaskService;