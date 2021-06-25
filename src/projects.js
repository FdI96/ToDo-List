import { projects, addButtonComponent } from "./addButton";
import { ToDo } from "./toDo";

let currentProject = localStorage.getItem("currentProject");
currentProject ??= localStorage.setItem("currentProject", "Default");
let allToDos = JSON.parse(localStorage.getItem("allToDosArray"));
allToDos ??= [];

let projectsArray = JSON.parse(localStorage.getItem("projectsArray"));
projectsArray ??= [];
let currentArray = JSON.parse(localStorage.getItem("Default"));
currentArray ??= [];

const projectListComponent = () => {
  const projectList = document.getElementById("projectList");
  console.log(projectList);
  // const projectList = document.createElement("div");
  // projectList.setAttribute("class", "col-4");

  const divProjectsButton = document.createElement("div");
  divProjectsButton.setAttribute("class", "row");

  const title = document.createElement("h1");
  title.setAttribute("class", "col-8");
  title.innerHTML = "Projects";
  divProjectsButton.appendChild(title);
  const form = addButtonComponent();
  divProjectsButton.appendChild(form);

  const uList = document.createElement("ul");

  for (let index = 0; index < projects.length; index++) {
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.innerHTML = projects[index];
    button.addEventListener("click", (e) => {
      localStorage.setItem("currentProject", e.target.innerHTML);
      currentArray = JSON.parse(localStorage.getItem(e.target.innerHTML));
      console.log(currentArray);
      localStorage.setItem("currentArray", JSON.stringify(currentArray));
      let list = document.getElementById("toDoListShow");
      console.log(list);
      list.innerHTML = null;
      let currentProject = localStorage.getItem("currentProject");
      const arrayAux =
        currentProject == "Default"
          ? allToDos
          : JSON.parse(localStorage.getItem("currentArray"));
      console.log("array Auxiliar", arrayAux);
      for (let index = 0; index < arrayAux.length; index++) {
        let card = new ToDo(
          arrayAux[index].title,
          arrayAux[index].description,
          arrayAux[index].date,
          arrayAux[index].priority
        );
        console.log("card,", card);
        if (card.title) {
          let renderCard = card.print();
          list.appendChild(renderCard);
          toDoList.appendChild(list);
        }
      }
    });

    li.appendChild(button);
    uList.appendChild(li);

    currentArray = JSON.parse(localStorage.getItem(currentProject));
  }

  projectList.appendChild(divProjectsButton);

  projectList.appendChild(uList);
  console.log("here", form.children[1].children[0]);

  const submitButton = form.children[1].children[0];
  submitButton.addEventListener("click", (e) => {
    projects.push(form.children[0].value);
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.innerHTML = form.children[0].value;
    button.addEventListener("click", (e) => {
      localStorage.setItem("currentProject", e.target.innerHTML);
      let item = localStorage.getItem("currentProject");
      currentArray = JSON.parse(localStorage.getItem(item));
      localStorage.setItem("currentArray", JSON.stringify(currentArray));
    });
    console.log(form.children[0].value);
    localStorage.setItem("currentProject", form.children[0].value);
    let key = form.children[0].value;
    localStorage.setItem(`${key}`, JSON.stringify([]));
    localStorage.setItem("currentArray", "[]");
    let toDoListShow = document.getElementById("toDoListShow");
    toDoListShow.innerHTML = null;
    li.appendChild(button);
    uList.appendChild(li);
    localStorage.setItem("projectsArray", JSON.stringify(projects));
  });

  return projectList;
};

export { projectListComponent };
