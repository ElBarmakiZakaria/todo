import "./dashboard.css";

import pendingTaskIcon from '../../public/icons/task-pending.svg';


const Dashboard = () => {
    return (
        `<div class="dashboard-wrapper">
            <div class="dashboard-header">
                <div class="welcome-back">Welcome Back, Sundar &#128075;</div>
                <div class="add-project-header"><button><span>+</span> Add Project</button></div>
            </div>
            <div class="dashboard-body-wrapper">
                <div class="to-do-tasks-wrapper">
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
                                <div class="status-circle"></div>
                                <div>
                                    <div>Attend Nischal's birthday Party</div>
                                    <div>Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements).....</div>
                                    <div class="bottom-card-section">
                                        <div>Priority: Moderate</div>
                                        <div>Status: Planned</div>
                                        <div>Created on: 20/06/23</div>
                                    </div>
                                </div>
                                <div>...</div>
                            </div>
                            <div class="task-card">
                                <div class="status-circle"></div>
                                <div>
                                    <div>Attend Nischal's birthday Party</div>
                                    <div>Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements).....</div>
                                    <div class="bottom-card-section">
                                        <div>Priority: Moderate</div>
                                        <div>Status: Planned</div>
                                        <div>Created on: 20/06/23</div>
                                    </div>
                                </div>
                                <div>...</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <div>
                            <div>Task Status</div>
                        </div>
                        <div>
                            <div>Completed</div>
                            <div>In progress</div>
                            <div>Planned</div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <div>Projects</div>
                        </div>
                        <div>
                            <div></div>
                            <div>
                                <div>Attend Nischal's birthday Party</div>
                                <div>Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements).....</div>
                                <div>
                                    <div>Priority: Moderate</div>
                                    <div>Tasks: 2</div>
                                    <div>due Date: 20/06/23</div>
                                </div>
                            </div>
                            <div>...</div>
                        </div>
                        <div>
                            <div></div>
                            <div>
                                <div>Attend Nischal's birthday Party</div>
                                <div>Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements).....</div>
                                <div>
                                    <div>Priority: Moderate</div>
                                    <div>Tasks: 2</div>
                                    <div>due Date: 20/06/23</div>
                                </div>
                            </div>
                            <div>...</div>
                        </div>
                    </div>
                <div>
            </div>
        </div>`
    )
}


export default Dashboard;