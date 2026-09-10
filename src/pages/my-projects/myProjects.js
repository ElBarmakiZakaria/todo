import "./myProjects.css";

import { returnProjects, returnProjectById, returnTotalTasksperProject } from '../../services/storageManager.js';
import projectsIcon from '../../public/icons/projects-icon.svg';
import { format, differenceInCalendarDays } from "date-fns";


export function returnProjectPreview(showenProject) {
    if (!showenProject) {
        return (`
            <div>Empty<div>
        `);
    }

    const dayLeft = differenceInCalendarDays(showenProject.dueDate, new Date());

    return (`
        <div class="overview-wrapper">
                    
                    <div class="task-data-overview">
                        <div class="task-overview-header">
                            <div class="task-overview-title">
                                <span class="span">Project title: </span>
                                <div>${showenProject.title}</div>
                            </div>
        
                            <div class="task-overview-day-left ${dayLeft < 0 && showenProject.status !== "Completed" ? "red" : "normal"}">
                                <span class="span">Days left: </span>
                                <div>
                                    ${dayLeft}
                                </div>
                            </div>
                        </div>
        
        
                        <div class="task-overview-mid-section">
                            <div class="task-overview-description">
                                <span class="span">Project description: </span>
                                <div>${showenProject.description}</div>
                            </div>
        
                            <div class="task-overview-due-date">
                                <span class="span">Due Date: </span>
                                <div>${format(showenProject.dueDate, "dd/MM/yyyy")}</div>
                            </div>    
                        </div>
        
                        <div class="task-overview-info">
                            <div class=""><span class="span">Priority:</span> <span class="${showenProject.priority}">${showenProject.priority}</span></div>
                            <div class=""><span class="span">Status:</span> <span class="${showenProject.status}">${showenProject.status}</span></div>
                            <div class=""><span class="span">Total Tasks:</span> <span class="">${returnTotalTasksperProject(showenProject.title)}</span></div>
                        </div>
                    </div>
        
        
                    <div class="task-overview-bottom">
                        <div class="creation-date"><span class="span">Created:</span> ${showenProject.creationDate}</div>
                        
                        <div>
                        <button id="edit-project" class="overview-primary" data-id="${showenProject.id}">Edit</button>
                        <button id="delete-project" class="overview-primary" data-id="${showenProject.id}">Delete</button>
                        </div>
                    </div>
        
                </div>`
        );
}

const MyProjects = () => {
    const projects = returnProjects();
    return (        
        `<div class="dashboard-wrapper">
            <div></div>
            
            <div class="dashboard-body-wrapper">
                
                <div class="dashboard-panel">
                    <div class="panel-header">
                        <button class="panel-title">
                            <span class="panel-icon" style="background-color: var(--grey-color); -webkit-mask-image: url(${projectsIcon}); mask-image: url(${projectsIcon});"></span> 
                            Projects
                        </button>  
                        <button class="add-btn" id="add-project" data-type="project"><span>+</span> Add project</button>
                    </div>
                    
                    <div class="panel-list-wrapper" id="projects-wrapper">
                        <!-- <div class="list-subheader">Today</div> -->
                        
                        ${projects.map(project => {
                            return `
                            <div class="item-card" data-id="${project.id}" id="${project.id}">
                                <div class="status-circle status-${project.status}"></div>
                            
                                <div class="item-card-body">
                                    <div class="item-card-title" >${project.title}</div>
                                    <div class="item-card-description" >${project.description}</div>
                                    <div class="item-card-details" >
                                        <div>Priority: <span class="${project.priority}">${project.priority}</span></div>
                                        <div>Status: <span class="${project.status}" >${project.status}</span></div>
                                        <div class="item-card-date">${project.creationDate}</div>
                                    </div>
                                </div>
                            </div>
                        `;
                        }).join('')}
                        

                    </div>
                </div>

                <!-- RIGHT COLUMN: PROJECTS -->
                <div class="dashboard-panel" style="background-color: white;" id="project-overview">
                    ${returnProjectPreview(projects[0])}
                </div>

            </div>
        </div>`
    );
}

export function initMyProjects(handleModalCallback) {
    let showenProject = returnProjects()[0];

    const addProjectBtn = document.getElementById("add-project")

    if (addProjectBtn) {
        addProjectBtn.addEventListener("click", () => {
            handleModalCallback("project", "create", "my-projects");
        });
    }

    const leftSection = document.getElementById("projects-wrapper");
    const rightSection = document.getElementById("project-overview");

    if (showenProject) {
        leftSection.children[0].classList.add("card-focused");
    } 

    if (leftSection) {
        leftSection.addEventListener("click", (e) => {
            const clickedCard = e.target.closest(".item-card");

            if (!clickedCard) return;

            for (const child of leftSection.children){
                if (child.classList.contains("card-focused")){
                    child.classList.remove("card-focused");
                }
            }

            const currentProject = clickedCard.getAttribute("data-id");

            if (currentProject) {
                showenProject = returnProjectById(currentProject);
                clickedCard.classList.add("card-focused");
                rightSection.innerHTML = returnProjectPreview(showenProject);

                bindEditButton(showenProject, handleModalCallback);
                bindDeleteButton(showenProject, handleModalCallback);
            }
        });
    }

    bindEditButton(showenProject, handleModalCallback);
    bindDeleteButton(showenProject, handleModalCallback);

}


function bindEditButton(projectData, handleModalCallback) {
    const editBtn = document.getElementById("edit-project");
    if (editBtn) {
        editBtn.addEventListener("click", () => {
            handleModalCallback("project", "update", "my-projects", projectData);
        });
    }
}

function bindDeleteButton(projectData, handleModalCallback) {
    const deleteBtn = document.getElementById("delete-project");
    if (deleteBtn) {
        deleteBtn.addEventListener("click", () => {
            handleModalCallback("project", "delete", "my-projects", projectData);
        })
    }
}


export default MyProjects;