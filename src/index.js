import { projectListComponent } from "./projects";
import { toDoCollection, allToDos } from "./toDoCollection";
import { ToDo } from "./toDo";

const content = document.getElementById("content");

const projectList = projectListComponent();
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
  toDoList.appendChild(toDo.print());
  allToDos.push(toDo);
  localStorage.setItem("allToDosArray", JSON.stringify(allToDos));
});
