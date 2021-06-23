import { projects, addButtonComponent } from "./addButton";

let projectsArray = JSON.parse(localStorage.getItem("projectsArray"));
projectsArray = !projectsArray ? [] : projectsArray;

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

  let li = document.createElement("li");
  let button = document.createElement("button");
  button.innerHTML = projects[0];
  li.appendChild(button);
  uList.appendChild(li);

  const submitButton = form.children[1].children[0];
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    projects.push(form.children[0].value);
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.innerHTML = form.children[0].value;
    li.appendChild(button);
    uList.appendChild(li);
    localStorage.setItem("projectsArray", JSON.stringify(projects));
  });

  projectList.appendChild(divProjectsButton);

  projectList.appendChild(uList);

  return projectList;
};

export { projectListComponent };
