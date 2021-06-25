import { projectListComponent } from "./projects";
import { toDoCollection, allToDos } from "./toDoCollection";
import { ToDo } from "./toDo";

let currentProject = localStorage.getItem("currentProject");
currentProject ??= localStorage.setItem("currentProject", "Default");
let defProject = JSON.parse(localStorage.getItem("Default"));
if (defProject == null) {
  localStorage.setItem("Default", "[]");
}

let currentArray = JSON.parse(localStorage.getItem("Default"));
currentArray ??= [];
localStorage.setItem("currentArray", JSON.stringify(currentArray));

const content = document.getElementById("content");

const ptList = document.createElement("div");
console.log(content);
ptList.setAttribute("class", "col-4");
ptList.setAttribute("id", "projectList");
content.appendChild(ptList);
console.log(ptList);

const toList = document.createElement("div");
toList.setAttribute("class", "col-8");
toList.setAttribute("id", "toDoList");
content.appendChild(toList);

let projectList = projectListComponent();

content.appendChild(projectList);

const toDoList = toDoCollection();
content.appendChild(toDoList);

const getTitle = () => {
  let title = document.getElementById("title");
  return title.value;
};

const getDescription = () => {
  let description = document.getElementById("description");
  return description.value;
};

const getDate = () => {
  let date = document.getElementById("dueDate");
  return date.value;
};

const getPriority = () => {
  let priorityLow = document.getElementById("low");
  let priorityMedium = document.getElementById("medium");
  let priorityUrgent = document.getElementById("urgent");
  let priority = null;
  if (priorityLow.checked) {
    priority = priorityLow.name;
  } else if (priorityMedium.checked) {
    priority = priorityMedium.name;
  } else {
    priority = priorityUrgent.name;
  }
  return priority;
};

const onSubmitForm = document.getElementById("submitButton");
onSubmitForm.addEventListener("click", (e) => {
  e.preventDefault();
  let title = getTitle();
  let desc = getDescription();
  let date = getDate();
  let prior = getPriority();

  let toDo = new ToDo(title, desc, date, prior);
  toDoListShow.appendChild(toDo.print());
  allToDos.push(toDo);
  currentArray = JSON.parse(localStorage.getItem("currentArray"));
  localStorage.setItem("Default", JSON.stringify(allToDos));
  currentArray.push(toDo);
  currentProject = localStorage.getItem("currentProject");
  localStorage.setItem("currentArray", JSON.stringify(currentArray));
  localStorage.setItem(`${currentProject}`, JSON.stringify(currentArray));
  localStorage.setItem("allToDosArray", JSON.stringify(allToDos));
  toDoList.appendChild(toDoListShow);
});
