import "./myTasks.css";

import pendingTaskIcon from '../../public/icons/task-pending.svg';
import {returnProjects, returnTaskById, returnTasks, returnTasksByProject} from '../../services/storageManager.js';
import { format, differenceInCalendarDays } from "date-fns";




export function returnTaskPreview(showenTask) {
    if (!showenTask) {
        return (`
            <div>Empty<div>
        `);
    }

    const dayLeft = differenceInCalendarDays(showenTask.dueDate, new Date());
    return (`
        <div class="overview-wrapper">
            
            <div class="task-data-overview">
                <div class="task-overview-header">
                    <div class="task-overview-title">
                        <span class="span">Task title: </span>
                        <div>${showenTask.title}</div>
                    </div>

                    <div class="task-overview-day-left ${dayLeft < 0 && showenTask.status !== "Completed" ? "red" : "normal"}">
                        <span class="span">Days left: </span>
                        <div>
                            ${dayLeft}
                        </div>
                    </div>
                </div>


                <div class="task-overview-mid-section">
                    <div class="task-overview-description">
                        <span class="span">Task description: </span>
                        <div>${showenTask.description}</div>
                    </div>
                    
                    <div class="task-overview-due-date">
                        <span class="span">Due Date: </span>
                        <div>${format(showenTask.dueDate, "dd/MM/yyyy")}</div>
                    </div>    
                </div>

                <div class="task-overview-info">
                    <div class=""><span class="span">Priority:</span> <span class="${showenTask.priority}">${showenTask.priority}</span></div>
                    <div class=""><span class="span">Status:</span> <span class="${showenTask.status}">${showenTask.status}</span></div>
                    <div class=""><span class="span">Related Project:</span> <span class="">${showenTask.project}</span></div>
                </div>
            </div>


            <div class="task-overview-bottom">
                <div class="creation-date"><span class="span">Created:</span> ${showenTask.creationDate}</div>
                
                <div>
                <button id="edit-task" class="overview-primary" data-id="${showenTask.id}">Edit</button>
                <button id="delete-task" class="overview-primary" data-id="${showenTask.id}">Delete</button>
                </div>
            </div>

        </div>`);
}

export function populateTasksSection(tasks) {
    return (`
        ${tasks.map(task => {
        return `
            <div class="item-card" data-id="${task.id}" id="${task.id}">
                <div class="status-circle status-${task.status}"></div>
            
                <div class="item-card-body">
                    <div class="item-card-title" >${task.title}</div>
                    <div class="item-card-description" >${task.description}</div>
                    <div class="item-card-details" >
                        <div>Priority: <span class="${task.priority}">${task.priority}</span></div>
                        <div>Status: <span class="${task.status}" >${task.status}</span></div>
                        <div class="item-card-date">${task.creationDate}</div>
                    </div>
                </div>
                <!-- Removed duplicate ID here -->
                <!-- <button class="item-card-menu-btn" ></button> -->
            </div>
        `
        }).join('')}
        `)
}

const MyTasks = () => {

    const tasks = returnTasks();
    let currentProjects = returnProjects();

    return (
            `<div class="dashboard-wrapper">
                <div class="filters">
                    <div>Filter By:</div>

                    <div class="filter-bottom">
                        <div class="project-filter">
                            <label>Projects</label>
                            <select class="project-select" id="project-filter" name="projects" default="all">
                                <option value="all">All</option>
                                ${currentProjects.map(project => {
                                    return `<option value="${project.title}" >${project.title}</option>`
                                }).join('')}
                            </select>
                        </div>
                        <div class="filter-btn">
                            <button id="filter-Btn" class="overview-primary">Filter</button>
                        </div>
                    </div>
                    
                </div>

                <div class="dashboard-body-wrapper">
                    
                    <!-- LEFT COLUMN: TO-DO -->
                    <div class="dashboard-panel">
                        <div class="panel-header">
                            <button class="panel-title">
                                <span class="panel-icon" style="background-color: var(--grey-color); -webkit-mask-image: url(${pendingTaskIcon}); mask-image: url(${pendingTaskIcon});"></span> 
                                To-Do
                            </button>  
                            <button class="add-btn" id="add-task" data-type="task"><span>+</span> Add task</button>
                        </div>
                        
                        <div class="panel-list-wrapper" id="tasks-wrapper">
                            <!-- <div class="list-subheader">Today</div> -->
                            
                            ${populateTasksSection(tasks)}
                            
    
                        </div>
                    </div>
    
                    <!-- RIGHT COLUMN: PROJECTS -->
                    <div class="dashboard-panel" style="background-color: white;" id="task-overview">
                        ${returnTaskPreview(tasks[0])}
                    </div>
    
                </div>
            </div>`
        );
}

export function initMyTasks(handleModalCallback) {
    let showenTask = returnTasks()[0]; 

    const addTaskBtn = document.getElementById("add-task");
    
    if (addTaskBtn) {
        addTaskBtn.addEventListener("click", () => {
            handleModalCallback("task", "create", "my-tasks"); 
        });
    }

    const leftSection = document.getElementById("tasks-wrapper");
    const rightSection = document.getElementById("task-overview");

    if (showenTask){
        leftSection.children[0].classList.add("card-focused");
    }

    if (leftSection) {
        bindFilterButton(leftSection, rightSection, handleModalCallback);

        leftSection.addEventListener("click", (e) => {
            const clickedCard = e.target.closest(".item-card");

            if (!clickedCard) return;

            for (const child of leftSection.children){
                if (child.classList.contains("card-focused")){
                child.classList.remove("card-focused");}
            }

            const currentTask = clickedCard.getAttribute("data-id");
            
            
            if (currentTask) {
                showenTask = returnTaskById(currentTask);
                clickedCard.classList.add("card-focused");
                rightSection.innerHTML = returnTaskPreview(showenTask);

                
                bindEditButton(showenTask, handleModalCallback);
                bindDeleteButton(showenTask, handleModalCallback);
            }
        });

    }

    bindEditButton(showenTask, handleModalCallback);
    bindDeleteButton(showenTask, handleModalCallback);
}

function bindEditButton(taskData, handleModalCallback) {
    const editBtn = document.getElementById("edit-task");
    if (editBtn) {
        editBtn.addEventListener("click", () => {
            handleModalCallback("task", "update", "my-tasks", taskData);
        });
    }
}

function bindDeleteButton(taskData, handleModalCallback) {
    const deleteBtn = document.getElementById("delete-task");
    if (deleteBtn) {
        deleteBtn.addEventListener("click", () => {
            handleModalCallback("task", "delete", "my-tasks", taskData);
        })
    }
}

function bindFilterButton(leftSection, rightSection, handleModalCallback) {
    const filterBtn = document.getElementById("filter-Btn");
    const filterProject = document.getElementById("project-filter");
    filterBtn.addEventListener("click", () => {
        if (filterProject.value !== "all"){
            const filteredTask = returnTasksByProject(filterProject.value);
            leftSection.innerHTML = populateTasksSection(filteredTask);
            rightSection.innerHTML = returnTaskPreview(filteredTask[0]);
            if(filteredTask.length > 0) {

                leftSection.children[0].classList.add("card-focused");
                bindEditButton(filteredTask[0], handleModalCallback);
                bindDeleteButton(filteredTask[0], handleModalCallback);
            }
        } else {
            const tasks = returnTasks();
            leftSection.innerHTML = populateTasksSection(tasks);
        }
    });

}




export default MyTasks;