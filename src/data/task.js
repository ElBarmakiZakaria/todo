import { format } from "date-fns";

class Task {
    constructor (title, description, dueDate, priority, status, project) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.dueDate = format(dueDate, "yyyy-MM-dd");
        this.priority = priority;
        this.status = status;
        this.project = project || 'default';        
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