import "./style.css";

// componenent
import Nav from './navigation/nav.js';


import {priorities, statuses} from './data/enum.js';
import Project from './data/project.js';
import Task from './data/task.js';

import TaskService from './services/taskService.js';
import ProjectService from './services/projectService.js';


localStorage.clear();
console.log("All local storage data has been completely erased.");

const taskManager = new TaskService();
const projectManager = new ProjectService();



// I want this to be JSON
let projects = projectManager.loadProjects();
let tasks = taskManager.loadTasks();

const defaultProject = new Project(
    "Default", 
    "This is a default project",
    new Date(),
    priorities.low,
    statuses.planned
);

const project1 = new Project(
    "project 1", 
    "this is the description",
    new Date(2026, 10, 11),
    priorities.low,
    statuses.planned
);

const project2 = new Project(
    "project 2", 
    "this is project 2 the description",
    new Date(2026, 10, 11),
    priorities.medium,
    statuses.completed
);

projects = projectManager.addProject([defaultProject, project1, project2]);


const task1 = new Task(
    "task title",
    "task description",
    new Date(2026, 10, 1),
    priorities.medium,
    statuses.planned,
    projects[1].id
);

const task2 = new Task(
    "task title2",
    "task description2",
    new Date(2026, 9, 1),
    priorities.high,
    statuses.ongoing,
    projects[1].id
);

const task3 = new Task(
    "task title 3",
    "task description 3",
    new Date(2026, 9, 1),
    priorities.low,
    statuses.completed,
    projects[2].id
);

tasks = taskManager.addTask([task1, task2])



console.log("-------Total Projects-----------");
console.log(JSON.stringify(projects, null, 2));
console.log(`------------ ${projects[1].title} --------------`);
console.log(
    JSON.stringify(tasks.filter(e => e.project === projects[1].id), null, 2)
);


console.log(`------------ ${projects[2].title} --------------`);
console.log(
    JSON.stringify(tasks.filter(e => e.project === projects[2].id), null, 2)
);

tasks = taskManager.addTask([task3])

console.log(`------------ ${projects[2].title} --------------`);
console.log(
    JSON.stringify(tasks.filter(e => e.project === projects[2].id), null, 2)
);

projects = projectManager.deleteProject(project2);

tasks = taskManager.deleteTask(task3);




console.log("------- NEW Total Projects-----------");
console.log(JSON.stringify(projects, null, 2));


console.log("------- NEW Total tast-----------");
console.log(JSON.stringify(tasks, null, 2));



// -------------------

const navContainer = document.getElementById("nav-section");
navContainer.innerHTML = Nav();