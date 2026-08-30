import "./style.css";

// componenent
import Nav from './navigation/nav.js';
import Menu from './menu/menu.js'
import Dashboard from './pages/dashboard/dashboard.js';
import MyProjects from './pages/my-projects/myProjects.js';
import MyTasks from './pages/my-tasks/myTasks.js';
import VitalTasks from './pages/vital-tasks/vitalTasks.js';
import Setting from './pages/setting/setting.js';
import Help from './pages/help/help.js';

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

const menContainer = document.getElementById("menu-section");
menContainer.innerHTML = Menu();


const bodyContainer = document.getElementById("body-section");
updatePage("dashboard");

function updatePage(page){
    const selectedBtn = document.getElementById(page);
    selectedBtn.classList.add("selected");

    if (page === "dashboard"){
        bodyContainer.innerHTML = Dashboard();
    } else if (page === "my-projects") {
        bodyContainer.innerHTML = MyProjects();
    } else if (page === "my-tasks") {
        bodyContainer.innerHTML = MyTasks();
    } else if (page === "vital-tasks") {
        bodyContainer.innerHTML = VitalTasks();
    } else if (page === "setting") {
        bodyContainer.innerHTML = Setting();
    } else if (page === "help") {
        bodyContainer.innerHTML = Help();
    } else {
        bodyContainer.innerHTML = "<div><h1>Page Not Found</h1></div>"
    }
}



const menubtn = document.getElementById("menu-btn");
menubtn.addEventListener("click", (e) => {
    if (e.target.getAttribute("id") !== "menu-btn"){
        const currentPage = e.target.getAttribute("id");
        
        for (const child of menubtn.children){
            if (child.classList.contains("selected")){
            child.classList.remove("selected");}
        }
        
        updatePage(currentPage);
    }
});