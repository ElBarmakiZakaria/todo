import "./myTasks.css";

import pendingTaskIcon from '../../public/icons/task-pending.svg';
import {returnTaskById, returnTasks} from '../../services/storageManager.js';




export function returnTaskPreview(showenTask) {
    if (!showenTask) {
        return (`
            <div>Empty<div>
        `);
    }
    return (`
        <div class="task-overview-wrapper">
            
            <div class="task-data-overview">
                <div class="task-overview-header">
                    <div class="task-overview-title">${showenTask.title}</div>
                    <div class="task-overview-dueDate">${showenTask.dueDate}</div>
                </div>


                <div class="task-overview-description">${showenTask.description}</div>
                <div class="task-overview-info">
                    <div class="">Priority: <span class="${showenTask.priority}">${showenTask.priority}</span></div>
                    <div class="">Status: <span class="${showenTask.status}">${showenTask.status}</span></div>
                    <div class="">Related Project: <span class="">${showenTask.project}</span></div>
                </div>
            </div>


            <div class="task-overview-bottom">
                <div class="creation-date">Created: ${showenTask.creationDate}</div>
                
                <div>
                <button id="edit-task" data-id="${showenTask.id}">Edit</button>
                <button id="delete-task" data-id="${showenTask.id}">Delete</button>
                </div>
            </div>

        </div>`);
}

const MyTasks = () => {

    const tasks = returnTasks();

    return (
            `<div class="dashboard-wrapper">
                <div></div>
               
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
                        
                        <div class="panel-list-wrapper scroller" id="tasks-wrapper">
                            <!-- <div class="list-subheader">Today</div> -->
                            
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
                            `;
                            }).join('')}
                            
    
                        </div>
                    </div>
    
                    <!-- RIGHT COLUMN: PROJECTS -->
                    <div class="dashboard-panel" id="task-overview">
                        ${returnTaskPreview(tasks[0])}
                    </div>
    
                </div>
            </div>`
        );
}

export function initMyTasks(handleModalCallback) {
    let showenTask = returnTasks()[0]; // Set default based on your preview

    // Add Task Button
    const addTaskBtn = document.getElementById("add-task");
    if (addTaskBtn) {
        addTaskBtn.addEventListener("click", () => {
            // We use the callback passed from index.js
            handleModalCallback("task", "create", "my-tasks"); 
        });
    }

    // Left Section (Selecting a task)
    const leftSection = document.getElementById("tasks-wrapper");
    const rightSection = document.getElementById("task-overview");
    
    if (leftSection) {
        leftSection.addEventListener("click", (e) => {
            const clickedCard = e.target.closest(".item-card");

            if (!clickedCard) return;

            const currentTask = clickedCard.getAttribute("data-id");
            
            if (currentTask) {
                showenTask = returnTaskById(currentTask);
                rightSection.innerHTML = returnTaskPreview(showenTask);
                
                // Re-bind the buttons every time the right section HTML is overwritten
                bindEditButton(showenTask, handleModalCallback);
                bindDeleteButton(showenTask, handleModalCallback);
            }
        });
    }

    // Initial binding for the default previewed task
    bindEditButton(showenTask, handleModalCallback);
    bindDeleteButton(showenTask, handleModalCallback);
}

// Helper function to keep code dry since we bind this on load and on click
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




export default MyTasks;