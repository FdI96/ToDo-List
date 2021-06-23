import { projectListComponent } from "./projects";
import toDoCollection from "./toDoCollection";

const myStorage = window.localStorage;
const content = document.getElementById("content");

const projectList = projectListComponent();
content.appendChild(projectList);

const toDoList = toDoCollection();
content.appendChild(toDoList);
