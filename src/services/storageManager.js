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

export function addDefaultProject() {
    if (returnProjects().length === 0){
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

export function returnProjectById(id) {
    const projects = ProjectService.loadProjects();
    const project = projects.filter(e => e.id === id);
    return project[0];
}

export function returnTasksByProject(project) {
    const tasks = TaskService.loadTasks();

    const filteredTasks = tasks.filter(e => e.project === project);

    return filteredTasks;

}


export function returnTasks() {
    return TaskService.loadTasks();
}


export function returnProjects() {
    return ProjectService.loadProjects();
}


export function updateProject(newProject) {
    ProjectService.updateProject(newProject);
}

export function deleteProject(project) {
    ProjectService.deleteProject(project);
}

export function updateTask(newTask) {
    TaskService.updateTask(newTask);
}

export function deleteTask(task) {
    TaskService.deleteTask(task);
}