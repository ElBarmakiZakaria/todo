import { format } from "date-fns";


class Project {
    
    constructor (title, description, dueDate, priority, status){
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.dueDate = format(dueDate, "yyyy-MM-dd");;
        this.priority = priority;
        this.status = status;
    }

    updatePriority(newPriority) {
        this.priority = newPriority;
    }

    updateStatus(newStatus) {
        this.status = newStatus;
    }
    
}

export default Project;