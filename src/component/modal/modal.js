import './modal.css';

const Modal = (dataType, type, isOpen = true, data = null) => {
    // If not open, return nothing
    if (!isOpen) return ``;

    // 1. Set the title dynamically (e.g., "Create Task" or "Update Project")
    const formTitle = `${type === 'create' ? 'Create' : 'Update'} ${dataType === 'project' ? 'Project' : 'Task'}`;

    // 2. Generate the specific fields based on the dataType
    let formFields = '';
    
    if (dataType === 'task') {
        formFields = `
            <div class="form-group">
                <label>Title</label>
                <input type="text" id="form-title" value="${data ? data.title : ''}" required>
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea id="form-desc" required>${data ? data.description : ''}</textarea>
            </div>
            <div class="form-group">
                <label>Due Date</label>
                <input type="date" id="form-date" value="${data ? data.dueDate : ''}" required>
            </div>
            <div class="form-group">
                <label>Priority</label>
                <select id="form-priority">
                    <option value="Low" ${data && data.priority === 'Low' ? 'selected' : ''}>Low</option>
                    <option value="Moderate" ${data && data.priority === 'Moderate' ? 'selected' : ''}>Moderate</option>
                    <option value="High" ${data && data.priority === 'High' ? 'selected' : ''}>High</option>
                </select>
            </div>
        `;
    } else if (dataType === 'project') {
        formFields = `
            <div class="form-group">
                <label>Project Title</label>
                <input type="text" id="form-title" value="${data ? data.title : ''}" required>
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea id="form-desc" required>${data ? data.description : ''}</textarea>
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