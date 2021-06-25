import { ToDo } from "./toDo";

let allToDos = JSON.parse(localStorage.getItem("allToDosArray"));
allToDos ??= [];

const form = () => {
  const form = document.createElement("form");
  const inputTitleNLabel = document.createElement("div");
  form.appendChild(inputTitleNLabel);
  let label = document.createElement("label");
  label.setAttribute("for", "title");
  label.innerHTML = "Title:";
  inputTitleNLabel.appendChild(label);

  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "title");
  input.setAttribute("id", "title");
  inputTitleNLabel.appendChild(input);

  const inputDescriptionNLabel = document.createElement("div");
  form.appendChild(inputDescriptionNLabel);
  label = document.createElement("label");
  label.innerHTML = "Description:";
  label.setAttribute("for", "description");
  inputDescriptionNLabel.appendChild(label);

  input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "description");
  input.setAttribute("id", "description");
  inputDescriptionNLabel.appendChild(input);

  const inputDueDateNLabel = document.createElement("div");
  form.appendChild(inputDueDateNLabel);
  label = document.createElement("label");
  label.innerHTML = "Due Date: ";
  label.setAttribute("for", "dueDate");
  inputDueDateNLabel.appendChild(label);

  input = document.createElement("input");
  input.setAttribute("type", "date");
  input.setAttribute("name", "dueDate");
  input.setAttribute("id", "dueDate");
  inputDueDateNLabel.appendChild(input);

  const inputPriorityNLabel = document.createElement("div");
  form.appendChild(inputPriorityNLabel);
  label = document.createElement("label");
  label.innerHTML = "Priority:";
  label.setAttribute("for", "priority");
  inputPriorityNLabel.appendChild(label);

  for (let index = 0; index < 3; index++) {
    input = document.createElement("input");
    let priority;
    switch (index) {
      case 0:
        priority = "low";
        break;

      case 1:
        priority = "medium";
        break;
      case 2:
        priority = "urgent";
        break;

      default:
        break;
    }

    label = document.createElement("label");
    label.setAttribute("for", priority);
    label.innerHTML = priority;
    inputPriorityNLabel.appendChild(label);
    input.setAttribute("type", "radio");
    input.setAttribute("name", priority);
    input.setAttribute("id", priority);
    inputPriorityNLabel.appendChild(input);
  }

  const sumbitButton = document.createElement("input");
  form.appendChild(sumbitButton);
  sumbitButton.setAttribute("type", "submit");
  sumbitButton.setAttribute("id", "submitButton");
  return form;
};

const toDoCollection = () => {
  const toDoList = document.getElementById("toDoList");
  // const toDoList = document.createElement("div");
  // toDoList.setAttribute("class", "col-8");
  // toDoList.setAttribute("id", "toDoList");

  const title = document.createElement("h2");
  title.setAttribute("class", "text-center");
  title.innerHTML = "List of ToDo";

  toDoList.appendChild(title);

  const toDoListBlock = document.createElement("div");
  toDoListBlock.setAttribute("class", "toDoListBlock");

  toDoListBlock.appendChild(form());
  toDoList.appendChild(toDoListBlock);

  const toDoListShow = document.createElement("div");
  toDoListShow.setAttribute("id", "toDoListShow");
  toDoList.appendChild(toDoListShow);
  let currentProject = localStorage.getItem("currentProject");
  const arrayAux =
    currentProject == "Default"
      ? allToDos
      : JSON.parse(localStorage.getItem(currentProject));
  console.log("array Auxiliar", arrayAux);
  for (let index = 0; index < arrayAux.length; index++) {
    const card = new ToDo(
      arrayAux[index].title,
      arrayAux[index].description,
      arrayAux[index].date,
      arrayAux[index].priority
    );
    if (card.title) {
      let renderCard = card.print();
      toDoListShow.appendChild(renderCard);
    }
  }

  return toDoList;
};

export { toDoCollection, allToDos };
