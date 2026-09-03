import { format } from "date-fns";

class Task {
    constructor (title, description, dueDate, priority, status, project) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
        this.project = project || 'Default project';        
        this.creationDate = format(new Date(), "yyyy-MM-dd");
    }


    updatePriority(newPriority) {
        this.priority = newPriority;
    }

    updateStatus(newStatus) {
        this.status = newStatus;
    }


}


export default Task;