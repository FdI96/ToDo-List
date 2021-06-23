import { projectListComponent } from "./projects";
import toDoCollection from "./toDoCollection";

const content = document.getElementById("content");

const projectList = projectListComponent();
content.appendChild(projectList);

const toDoList = toDoCollection();
content.appendChild(toDoList);
