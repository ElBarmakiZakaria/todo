import './modal.css';
import ProjectService from "../../services/projectService.js";


const Modal = (dataType, type, isOpen = true, data = null) => {
    // If not open, return nothing
    if (!isOpen) return ``;

    // 1. Set the title dynamically (e.g., "Create Task" or "Update Project")
    const formTitle = `${type === 'create' ? 'Create' : type === 'update' ? "Update" : "Delete"} ${dataType === 'project' ? 'Project' : 'Task'}`;

    // 2. Generate the specific fields based on the dataType
    let formFields = '';
    let currentProjects = ProjectService.loadProjects();
    
    if (dataType === 'task' && type !== "delete") {
        formFields = `
            <div class="form-input-body">
            <div class="form-group">
                <label>Title</label>
                <input class="input" type="text" name="title" id="form-title" maxlength="25" value="${data ? data.title : ''}" required>
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea class="textarea-description" id="form-desc" name="description">${data ? data.description : ''}</textarea>
            </div>
            <div class="selection-area">
                <div class="form-group">
                    <label>Due Date</label>
                    <input class="input" type="date" name="dueDate" id="form-date" value="${data ? data.dueDate : ''}" required>
                </div>
                <div class="form-group" >
                    <label>Priority</label>
                    <select class="input" id="form-priority" name="priority">
                        <option value="Low" ${data && data.priority === 'Low' ? 'selected' : ''}>Low</option>
                        <option value="Medium" ${data && data.priority === 'Medium' ? 'selected' : ''}>Medium</option>
                        <option value="High" ${data && data.priority === 'High' ? 'selected' : ''}>High</option>
                    </select>
                </div>
                <div class="form-group" >
                    <label>Status</label>
                    <select class="input" id="form-status" name="status" ${type === "create" ? "disabled" : ""}>
                        <option value="Planned" ${data && data.status === 'Planned' ? 'selected' : ''}>Planned</option>
                        <option value="Ongoing" ${data && data.status === 'Ongoing' ? 'selected' : ''}>Ongoing</option>
                        <option value="Completed" ${data && data.status === 'Completed' ? 'selected' : ''}>Completed</option>
                    </select>
                    ${type === "create" ? `<input type="hidden" name="status" value="Planned">` : ""}
                </div>
                <div class="form-group" >
                    <label>Related Project</label>
                    <select class="input" id="form-project" name="project" ${type !== "create" ? "disabled" : ""}>
                        ${currentProjects.map(project => {
                                return `<option value="${project.title}" ${data && data.project === project.title ? 'selected' : ''}>${project.title}</option>`
                            }).join('')}
                    </select>
                    ${type === "update" && data ? `<input type="hidden" name="project" value="${data.project}">` : ""}
                </div>
            </div>
            </div>

        `;
    } else if (dataType === 'project' && type !== "delete") {
        formFields = `
        <div class="form-input-body">
            <div class="form-group">
                <label>Project Title</label>
                <input class="input" type="text" name="title" id="form-title" value="${data ? data.title : ''}" required>
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea class="textarea-description" id="form-desc" name="description">${data ? data.description : ''}</textarea>
            </div>
                <div class="selection-area">
                    <div class="form-group">
                        <label>Due Date</label>
                        <input class="input" type="date" name="dueDate" id="form-date" value="${data ? data.dueDate : ''}" required>
                    </div>
                    <div class="form-group" >
                        <label>Priority</label>
                        <select class="input" id="form-priority" name="priority">
                            <option value="Low" ${data && data.priority === 'Low' ? 'selected' : ''}>Low</option>
                            <option value="Medium" ${data && data.priority === 'Medium' ? 'selected' : ''}>Medium</option>
                            <option value="High" ${data && data.priority === 'High' ? 'selected' : ''}>High</option>
                        </select>
                    </div>
                    <div class="form-group" >
                        <label>Status</label>
                        <select class="input" id="form-status" name="status" ${type === "create" ? "disabled" : ""}>
                            <option value="Planned" ${data && data.status === 'Planned' ? 'selected' : ''}>Planned</option>
                            <option value="Ongoing" ${data && data.status === 'Ongoing' ? 'selected' : ''}>Ongoing</option>
                            <option value="Completed" ${data && data.status === 'Completed' ? 'selected' : ''}>Completed</option>
                        </select>
                        ${type === "create" ? `<input type="hidden" name="status" value="Planned">` : ""}
                    </div>
                </div>
            </div>
        `;
    }

    if (type === "delete"){
        formFields =  `
            <div class="form-input-body">Are you sure you want to delete this ${dataType}??</div>
        `
    }

    // 3. Wrap the fields inside the final modal structure
    return `
        <div class="modal-overlay" id="modal-overlay"> 
            <div class="form-container">
                <div class="modal-header">
                    <button type="button" id="modal-close-btn" class="modal-close-btn">&times;</button>
                    <div class="modal-header-title">${formTitle}</div>    
                </div>
                
                <form id="${dataType}-form" class="form-body">
                    ${formFields}
                    ${type === 'update' && data ? `<input type="hidden" name="id" value="${data.id}">` : ''}
                    <button type="submit" class="submit-btn">
                        ${type === 'create' ? 'Create' : type === 'delete' ? 'Delete' : 'Save Changes'}
                    </button>
                </form>
            </div>
        </div>
    `;
}; 

export default Modal;