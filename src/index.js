import "./style.css";

// componenent
import Nav from './navigation/nav.js';
import Menu from './menu/menu.js'
import Dashboard, {initMyDashboard} from './pages/dashboard/dashboard.js';
import MyProjects from './pages/my-projects/myProjects.js';
import MyTasks, {initMyTasks} from './pages/my-tasks/myTasks.js';
import VitalTasks from './pages/vital-tasks/vitalTasks.js';
import Setting from './pages/setting/setting.js';
import Help from './pages/help/help.js';

import Modal from './component/modal/modal.js';


import TaskService from './services/taskService.js';
import ProjectService from './services/projectService.js';
import {addTask, addProject, addDefaultProject, returnTaskById, updateTask, deleteTask} from './services/storageManager.js';


// localStorage.clear();
// console.log("All local storage data has been completely erased.");

// const taskManager = new TaskService();
// const projectManager = new ProjectService();



let projects = ProjectService.loadProjects();
let tasks = TaskService.loadTasks();

projects = addDefaultProject();



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
        loadDashboard();
    } else if (page === "my-projects") {
        bodyContainer.innerHTML = MyProjects();
    } else if (page === "my-tasks") {
        loadMyTasks();
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






function handleModal(dataType, type,  page, data) {
    document.body.insertAdjacentHTML('beforeend', Modal(dataType, type, true, data));

    const modalOverlay = document.getElementById("modal-overlay");
    const closeBtn = document.getElementById("modal-close-btn");
    const form = document.getElementById(`${dataType}-form`);

    closeBtn.addEventListener("click", () => {
        modalOverlay.remove(); // Completely removes the HTML from the DOM
        updatePage(page);
    });


    form.addEventListener("submit", (event) => {
        event.preventDefault();


        const formData = new FormData(event.target);        
        const formValues = Object.fromEntries(formData.entries());
        
        
        if (type === "create"){
            if (dataType === "project") {
                addProject(formValues);
            } else { 
                addTask(formValues);
            }
        } else if (type === "update") {
            if (dataType === "project") {
                updateProject(formValues);
            } else { 
                updateTask(formValues);
            }
        } else {
            if (dataType === "project") {
                deleteProject(data);
            } else { 
                deleteTask(data);
            }
        }

        updatePage(page);
        modalOverlay.remove();
    } )

}

function loadDashboard() {
    bodyContainer.innerHTML = Dashboard();
    initMyDashboard(handleModal);
    
}


function loadMyTasks() {
    bodyContainer.innerHTML = MyTasks();
    
    initMyTasks(handleModal);
}