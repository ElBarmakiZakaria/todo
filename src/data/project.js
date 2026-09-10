import { format } from "date-fns";


class Project {
    
    constructor (title, description, dueDate, priority, status){
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
        this.creationDate = format(new Date(), "yyyy-MM-dd");
    }

    updatePriority(newPriority) {
        this.priority = newPriority;
    }

    updateStatus(newStatus) {
        this.status = newStatus;
    }
    
}

export default Project;