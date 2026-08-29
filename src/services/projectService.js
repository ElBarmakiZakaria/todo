class ProjectService {
    constructor () {
        this.storageKey = "projects_data";
    }

    saveProjects(projectsArray){
        const projectssJSON = JSON.stringify(projectsArray, null, 2);
        localStorage.setItem(this.storageKey, projectssJSON);
    }

    loadProjects() {
        const projectssJSON = localStorage.getItem(this.storageKey);

        if (projectssJSON) {
            return JSON.parse(projectssJSON);
        }else {
            return [];
        }
    }


    addProject(project) {

        let projects = this.loadProjects();

        project.forEach(element => {
            projects.push(element);
        });
        

        this.saveProjects(projects);
        return this.loadProjects();
    }

    deleteProject(project) {        
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