import TaskService from "./taskService.js";
import Project from '../data/project.js';
import Task from '../data/task.js';
import ProjectService from "./projectService.js";

import { endOfYear, format } from "date-fns";


export function addTask(task) {
    const taskInfo = new Task(
        task.title,
        task.description,
        task.dueDate,
        task.priority,
        task.status,
        task.project,
    )
    
    TaskService.addTask(taskInfo);
}


export function addProject(project) {
    const projectInfo = new Project(
        project.title,
        project.description,
        project.dueDate,
        project.priority,
        project.status,
    )
    
    ProjectService.addProject(projectInfo);
}

export function addDefaultProject(projects) {
    if (projects.length === 0){

        addProject(
            { 
                title: "Default project",
                description: "Default project - this a placeholder project.", 
                dueDate: format(endOfYear(new Date()), "yyyy-MM-dd"), 
                priority: "Low", 
                status: "Planned" 
            });
    }

    return ProjectService.loadProjects();
}

export function returnTotalTasksperProject(project){
    
    const tasks = TaskService.loadTasks();



    const count = tasks.filter(e => e.project === project).length;
    return count;
}


export function returnTaskById(id) {
    const tasks = TaskService.loadTasks();
    const task = tasks.filter(e => e.id === id);
    return task[0];
}