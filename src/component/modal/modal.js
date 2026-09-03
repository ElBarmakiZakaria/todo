import './modal.css';
import ProjectService from "../../services/projectService.js";


const Modal = (dataType, type, isOpen = true, data = null) => {
    // If not open, return nothing
    if (!isOpen) return ``;

    // 1. Set the title dynamically (e.g., "Create Task" or "Update Project")
    const formTitle = `${type === 'create' ? 'Create' : 'Update'} ${dataType === 'project' ? 'Project' : 'Task'}`;

    // 2. Generate the specific fields based on the dataType
    let formFields = '';
    let currentProjects = ProjectService.loadProjects();
    
    if (dataType === 'task') {
        formFields = `
            <div class="form-group">
                <label>Title</label>
                <input type="text" name="title" id="form-title" value="${data ? data.title : ''}" required>
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea id="form-desc" name="description" required>${data ? data.description : ''}</textarea>
            </div>
            <div class="form-group">
                <label>Due Date</label>
                <input type="date" name="dueDate" id="form-date" value="${data ? data.dueDate : ''}" required>
            </div>
            <div class="form-group" >
                <label>Priority</label>
                <select id="form-priority" name="priority">
                    <option value="Low" ${data && data.priority === 'Low' ? 'selected' : ''}>Low</option>
                    <option value="Medium" ${data && data.priority === 'Medium' ? 'selected' : ''}>Medium</option>
                    <option value="High" ${data && data.priority === 'High' ? 'selected' : ''}>High</option>
                </select>
            </div>
            <div class="form-group" >
                <label>Status</label>
                <select id="form-status" name="status" ${type === "create" ? "disabled" : ""}>
                    <option value="Planned" ${data && data.status === 'Planned' ? 'selected' : ''}>Planned</option>
                    <option value="Ongoing" ${data && data.status === 'Ongoing' ? 'selected' : ''}>Ongoing</option>
                    <option value="Completed" ${data && data.status === 'Completed' ? 'selected' : ''}>Completed</option>
                </select>
                ${type === "create" ? `<input type="hidden" name="status" value="Planned">` : ""}
            </div>
            <div class="form-group" >
                <label>Related Project</label>
                <select id="form-project" name="project" ${type !== "create" ? "disabled" : ""}>
                    ${currentProjects.map(project => {
                            return `<option value="${project.title}" ${data && data.project === project.title ? 'selected' : ''}>${project.title}</option>`
                        }).join('')}
                </select>
                ${type === "create" ? `<input type="hidden" name="status" value="Planned">` : ""}
            </div>

        `;
    } else if (dataType === 'project') {
        formFields = `
            <div class="form-group">
                <label>Project Title</label>
                <input type="text" name="title" id="form-title" value="${data ? data.title : ''}" required>
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea id="form-desc" name="description" required>${data ? data.description : ''}</textarea>
            </div>
            <div class="form-group">
                <label>Due Date</label>
                <input type="date" name="dueDate" id="form-date" value="${data ? data.dueDate : ''}" required>
            </div>
            <div class="form-group" >
                <label>Priority</label>
                <select id="form-priority" name="priority">
                    <option value="Low" ${data && data.priority === 'Low' ? 'selected' : ''}>Low</option>
                    <option value="Medium" ${data && data.priority === 'Medium' ? 'selected' : ''}>Medium</option>
                    <option value="High" ${data && data.priority === 'High' ? 'selected' : ''}>High</option>
                </select>
            </div>
            <div class="form-group" >
                <label>Status</label>
                <select id="form-status" name="status" ${type === "create" ? "disabled" : ""}>
                    <option value="Planned" ${data && data.status === 'Planned' ? 'selected' : ''}>Planned</option>
                    <option value="Ongoing" ${data && data.status === 'Ongoing' ? 'selected' : ''}>Ongoing</option>
                    <option value="Completed" ${data && data.status === 'Completed' ? 'selected' : ''}>Completed</option>
                </select>
                ${type === "create" ? `<input type="hidden" name="status" value="Planned">` : ""}
            </div>
        `;
    }

    // 3. Wrap the fields inside the final modal structure
    return `
        <div class="modal-overlay form-container" id="modal-overlay"> 
            <div class="form-container form-div">
                <div class="modal-header" style="display: flex; justify-content: space-between;">
                    <h2>${formTitle}</h2>
                    <button type="button" id="modal-close-btn">&times;</button>
                </div>
                
                <form id="${dataType}-form">
                    ${formFields}
                    <button type="submit" style="margin-top: 15px;">
                        ${type === 'create' ? 'Create' : 'Save Changes'}
                    </button>
                </form>
            </div>
        </div>
    `;
}; 

export default Modal;