import "./dashboard.css";

import pendingTaskIcon from '../../public/icons/task-pending.svg';
import projectsIcon from '../../public/icons/projects-icon.svg';
import taskCompletionIcon from '../../public/icons/task-complete.svg'


const Dashboard = () => {
    return (
        `<div class="dashboard-wrapper">
            <div class="dashboard-header">
                <div class="welcome-back">Welcome Back, Sundar &#128075;</div>
                <div class="add-project-header"><button><span>+</span> Add Project</button></div>
            </div>
            <div class="dashboard-body-wrapper">
                <div class="to-do-tasks-wrapper card-wrapper">
                    <div class="to-do-header">
                        <div style="">
                            <button class="to-do-header-left"><span class="to-do-header-icon" style="-webkit-mask-image: url(${pendingTaskIcon}); mask-image: url(${pendingTaskIcon});"></span> To-Do</button>  
                          
                        </div>
                        <div><button class="add-task-btn"><span>+</span> Add task</button></div>
                    </div>
                    <div class="tasks-wrapper">
                        <div class="tasks-per-day-wrapper">
                            <div class="task-day">Today</div>
                            <div class="task-card">
                                <div><div class="status-circle status-planned"></div></div>
                                
                                <div class="task-card-body">
                                    <div class="task-card-title">Attend Nischal's birthday Party</div>
                                    <div class="task-card-description">Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements).....</div>
                                    <div class="bottom-card-section">
                                        <div class="task-card-priority">Priority: <span>Moderate</span></div>
                                        <div class="task-card-status">Status: <span>Planned</span></div>
                                        <div class="task-card-creation-date">Created on: 20/06/23</div>
                                    </div>
                                </div>

                                <div class="task-card-menu"><button class="task-card-menu-btn" id="task-card-menu-btn"></button></div>
                            </div>

                            <div class="task-card">
                                <div><div class="status-circle status-ongoing"></div></div>
                                <div class="task-card-body">
                                    <div class="task-card-title">Attend Nischal's birthday Party</div>
                                    <div class="task-card-description">Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements).....</div>
                                    <div class="bottom-card-section">
                                        <div class="task-card-priority">Priority: <span>Moderate</span></div>
                                        <div class="task-card-status">Status: <span>Planned</span></div>
                                        <div class="task-card-creation-date">Created on: 20/06/23</div>
                                    </div>
                                </div>
                                <div class="task-card-menu"><button class="task-card-menu-btn" id="task-card-menu-btn"></button></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="right-section-wrapper">

                    <div class="projects-wrapper">
                        <div class="to-do-header">
                            <div>
                                <button class="projects-header-right"><span class="projects-header-icon" style="-webkit-mask-image: url(${projectsIcon}); mask-image: url(${projectsIcon});"></span> Projects</button>
                            </div>
                            <div><button class="add-task-btn"><span>+</span> Add Project</button></div>
                        </div>
                        <div class="project-wrapper">
                            <div class="task-card">
                                    <div><div class="status-circle status-planned"></div></div>
                                    
                                    <div class="task-card-body">
                                        <div class="task-card-title">Attend Nischal's birthday Party</div>
                                        <div class="task-card-description">Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements).....</div>
                                        <div class="bottom-card-section">
                                            <div class="task-card-priority">Priority: <span>Moderate</span></div>
                                            <div class="task-card-status">Status: <span>Planned</span></div>
                                            <div class="task-card-creation-date">Due Date: 20/06/23</div>
                                            <div>total Tasks: 5</div>
                                        </div>
                                    </div>

                                    <div class="task-card-menu"><button class="task-card-menu-btn" id="task-card-menu-btn"></button></div>
                            </div>
                            
                            <div class="task-card">
                                <div><div class="status-circle status-planned"></div></div>
                                
                                <div class="task-card-body">
                                    <div class="task-card-title">Attend Nischal's birthday Party</div>
                                    <div class="task-card-description">Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements).....</div>
                                    <div class="bottom-card-section">
                                        <div class="task-card-priority">Priority <span>Moderate</span></div>
                                        <div class="task-card-status">Status <span>Planned</span></div>
                                        <div class="task-card-creation-date">Due Date 20/06/23</div>
                                        <div>total Tasks 5</div>
                                    </div>
                                </div>

                                <div class="task-card-menu"><button class="task-card-menu-btn" id="task-card-menu-btn"></button></div>
                            </div>
                        </div>
                    </div>
                <div>
            </div>
        </div>`
    )
}


export default Dashboard;