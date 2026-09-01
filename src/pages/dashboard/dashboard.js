import "./dashboard.css";

import pendingTaskIcon from '../../public/icons/task-pending.svg';
import projectsIcon from '../../public/icons/projects-icon.svg';

const Dashboard = (tasksList, projectList) => {



    return (
        `<div class="dashboard-wrapper">
            <div></div>
            <div class="dashboard-header">
                <div class="welcome-back">Welcome Back, Sundar &#128075;</div>
                <div class="add-project-header"><button id="add-project" data-type="project"><span>+</span> Add Project</button></div>
            </div>
            
            <div class="dashboard-body-wrapper">
                
                <!-- LEFT COLUMN: TO-DO -->
                <div class="dashboard-panel">
                    <div class="panel-header">
                        <button class="panel-title">
                            <span class="panel-icon" style="background-color: var(--grey-color); -webkit-mask-image: url(${pendingTaskIcon}); mask-image: url(${pendingTaskIcon});"></span> 
                            To-Do
                        </button>  
                        <button class="add-btn" id="add-task" data-type="task"><span>+</span> Ad task</button>
                    </div>
                    
                    <div class="panel-list-wrapper">
                        <!-- <div class="list-subheader">Today</div> -->
                        
                        ${tasksList.map(task => {
                            return `
                            <div class="item-card">
                                <div class="status-circle status-${task.status}"></div>
                            
                                <div class="item-card-body">
                                    <div class="item-card-title">${task.title}</div>
                                    <div class="item-card-description">${task.description}</div>
                                    <div class="item-card-details">
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
                        <!-- Task Card 1 -->
                        

                    </div>
                </div>

                <!-- RIGHT COLUMN: PROJECTS -->
                <div class="dashboard-panel">
                    <div class="panel-header">
                        <button class="panel-title">
                            <span class="panel-icon" style="background-color: var(--third-color); -webkit-mask-image: url(${projectsIcon}); mask-image: url(${projectsIcon});"></span> 
                            Projects
                        </button>
                    </div>
                    
                    <div class="panel-list-wrapper">
                        
                        ${projectList.map(project => {
                            return `
                            <div class="item-card">
                                <div class="status-circle status-${project.status}"></div>
                                
                                <div class="item-card-body">
                                    <div class="item-card-title">${project.title}</div>
                                    <div class="item-card-description">${project.description}</div>
                                    <div class="item-card-details">
                                        <div class="flex-newline">Priority: <span class="${project.priority}">${project.priority}</span></div>
                                        <div class="flex-newline">Status: <span class="${project.status}">${project.status}</span></div>
                                        <div class="item-card-date flex-newline">Due Date: <span>${project.dueDate}</span></div>
                                        <div class="flex-newline">Total Tasks: <span>5</span></div>
                                    </div>
                                </div>
                                <button class="item-card-menu-btn"></button>
                            </div>
                            `;
                        }).join('')}
                        
                        
                        
                    </div>
                </div>

            </div>
        </div>`
    );
}

export default Dashboard;