import { projects, addButtonComponent } from "./addButton";

localStorage.setItem("Default", "[]");

let currentProject = localStorage.getItem("currentProject");
currentProject ??= localStorage.setItem("currentProject", "Default");

let projectsArray = JSON.parse(localStorage.getItem("projectsArray"));
projectsArray ??= [];
let currentArray = JSON.parse(localStorage.getItem("Default"));
currentArray ??= [];

const projectListComponent = () => {
  const projectList = document.createElement("div");
  projectList.setAttribute("class", "col-4");

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
    });
    li.appendChild(button);
    uList.appendChild(li);

    currentArray = JSON.parse(localStorage.getItem(currentProject));
    console.log(currentArray);
  }

  projectList.appendChild(divProjectsButton);

  projectList.appendChild(uList);

  const submitButton = form.children[1].children[0];
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    projects.push(form.children[0].value);
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.innerHTML = form.children[0].value;
    button.addEventListener("click", (e) => {
      localStorage.setItem("currentProject", e.target.innerHTML);
      currentArray = JSON.parse(localStorage.getItem(e.target.innerHTML));
    });

    localStorage.setItem("currentProject", form.children[0].value);
    localStorage.setItem(form.children[0].value, JSON.stringify([]));
    currentArray = JSON.parse(localStorage.getItem(e.target.value));
    console.log(currentArray);
    li.appendChild(button);
    uList.appendChild(li);
    localStorage.setItem("projectsArray", JSON.stringify(projects));
  });

  return projectList;
};

export { projectListComponent };
