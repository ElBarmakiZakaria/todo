import "./style.css";

// componenent
import Nav from './navigation/nav.js';
import Menu from './menu/menu.js'
import Dashboard, {initMyDashboard} from './pages/dashboard/dashboard.js';
import MyProjects, {initMyProjects} from './pages/my-projects/myProjects.js';
import MyTasks, {initMyTasks} from './pages/my-tasks/myTasks.js';

import Modal from './component/modal/modal.js';


import {addTask, addProject, addDefaultProject, updateTask, deleteTask, updateProject, deleteProject} from './services/storageManager.js';




addDefaultProject();


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
        loadMyProjects();
    } else if (page === "my-tasks") {
        loadMyTasks();
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
        modalOverlay.remove();
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

function loadMyProjects() {
    bodyContainer.innerHTML = MyProjects();

    initMyProjects(handleModal);
}