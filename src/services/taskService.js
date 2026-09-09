class TaskService {
    // 1. Replace the constructor with a static property
    static storageKey = "tasks_data";

    // 2. Add 'static' to every method
    static saveTasks(tasksArray) {
        const tasksJSON = JSON.stringify(tasksArray, null, 2);
        localStorage.setItem(this.storageKey, tasksJSON);
    }

    static loadTasks() {
        const tasksJSON = localStorage.getItem(this.storageKey);

        if (tasksJSON) {
            // Note: Remember our earlier conversation about rehydration! 
            // If you need class methods like updatePriority(), you will 
            // still need to map these plain objects back into Task instances here.
            return JSON.parse(tasksJSON);
        } else {
            return [];
        }
    }

    static addTask(task) {
        let tasks = this.loadTasks();
        
        tasks.push(task);
        
        
        this.saveTasks(tasks);
        return this.loadTasks();
    }

    static deleteTask(task) {
        
        
        let tasks = this.loadTasks();
        let index = tasks.findIndex(t => t.id === task.id);

        if (index !== -1) {
            tasks.splice(index, 1);
        }

        this.saveTasks(tasks);
        return this.loadTasks();
    }

    static updateTask(updatedTaskData) {
        let tasks = this.loadTasks();
        
        let index = tasks.findIndex(t => String(t.id) === String(updatedTaskData.id));

        if (index !== -1) {
            tasks[index] = { ...tasks[index], ...updatedTaskData };
        }

        this.saveTasks(tasks);
        // return this.loadTasks();
    }
}

export default TaskService;