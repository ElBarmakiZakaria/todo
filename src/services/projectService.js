class ProjectService {
    // 1. Set the storage key as a static property
    static storageKey = "projects_data";

    // 2. Add 'static' to all methods
    static saveProjects(projectsArray) {
        const projectsJSON = JSON.stringify(projectsArray, null, 2);
        localStorage.setItem(this.storageKey, projectsJSON);
    }

    static loadProjects() {
        const projectsJSON = localStorage.getItem(this.storageKey);

        if (projectsJSON) {
            return JSON.parse(projectsJSON);
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

    static updateProject(updatedProjectData) {
        let projects = this.loadProjects();

        let index = projects.findIndex(p => String(p.id) === String(updatedProjectData.id));

        if (index !== -1) {
            projects[index] = { ...projects[index], ...updatedProjectData};
        }

        this.saveProjects(projects);
    }
}

export default ProjectService;