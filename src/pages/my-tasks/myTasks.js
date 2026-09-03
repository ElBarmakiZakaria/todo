import "./myTasks.css";

import pendingTaskIcon from '../../public/icons/task-pending.svg';
import {returnTaskById} from '../../services/storageManager.js';


export function returnTaskPreview(showenTask) {
    // const showenTask = returnTaskById(id);

    return (`
            <div>${showenTask.title}<div>
            <div><button id="edit-task" data-id="${showenTask.id}">edit</button></div>
        `);
}

const MyTasks = (tasksList) => {
    // let taskcode = '';

    // if (taskId) {
    //     showenTask = returnTaskById(taskId);
    //     taskcode = `
    //         <div>${showenTask.title}<div>
    //     `
    // }else {
    //     taskcode = `
    //         <div>${tasksList[0].title}<div>
    //     `
    // }
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
                        
                        <div class="panel-list-wrapper" id="tasks-wrapper">
                            <!-- <div class="list-subheader">Today</div> -->
                            
                            ${tasksList.map(task => {
                                return `
                                <div class="item-card" data-id="${task.id}" id="${task.id}">
                                    <div class="status-circle status-${task.status}"></div>
                                
                                    <div class="item-card-body" data-id="${task.id}">
                                        <div class="item-card-title" data-id="${task.id}">${task.title}</div>
                                        <div class="item-card-description" data-id="${task.id}">${task.description}</div>
                                        <div class="item-card-details" data-id="${task.id}">
                                            <div>Priority: <span class="${task.priority}">${task.priority}</span></div>
                                            <div>Status: <span class="${task.status}" >${task.status}</span></div>
                                            <div class="item-card-date">${task.creationDate}</div>
                                        </div>
                                    </div>
                                    <!-- Removed duplicate ID here -->
                                    <button class="item-card-menu-btn" data-id="${task.id}"></button>
                                </div>
                            `;
                            }).join('')}
                            
    
                        </div>
                    </div>
    
                    <!-- RIGHT COLUMN: PROJECTS -->
                    <div class="dashboard-panel" id="task-overview">
                        ${returnTaskPreview(tasksList[0])}
                    </div>
    
                </div>
            </div>`
        );
}

export default MyTasks;