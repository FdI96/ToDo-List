import projectListComponent from "./projects";

const content = document.getElementById('content')
const projectList = projectListComponent();
content.appendChild(projectList);