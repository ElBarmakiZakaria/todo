class ProjectService {
    // 1. Set the storage key as a static property
    static storageKey = "projects_data";

    // 2. Add 'static' to all methods
    static saveProjects(projectsArray) {
        const projectssJSON = JSON.stringify(projectsArray, null, 2);
        localStorage.setItem(this.storageKey, projectssJSON);
    }

    static loadProjects() {
        const projectssJSON = localStorage.getItem(this.storageKey);

        if (projectssJSON) {
            // Rehydration reminder: If your Project class has custom methods,
            // you will need to map these parsed objects back into Project instances here.
            return JSON.parse(projectssJSON);
        } else {
            return [];
        }
    }

    static addProject(project) {
        let projects = this.loadProjects();

        projects.push(project);
    
        
        this.saveProjects(projects);
        return this.loadProjects();
    }

    static deleteProject(project) {        
        let projects = this.loadProjects();
        let index = projects.findIndex(p => p.id === project.id);

        if (index !== -1) {
            projects.splice(index, 1);
        }

        this.saveProjects(projects);
        return this.loadProjects();
    }
}

export default ProjectService;