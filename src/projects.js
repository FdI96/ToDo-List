import addButtonComponent from "./addButton";

const projectListComponent = () => {
  const projectList = document.createElement('div');
  projectList.setAttribute('class', 'col-4');

  const divProjectsButton = document.createElement('div')
  divProjectsButton.setAttribute('class', 'row')
  
  const title = document.createElement('h1');
  title.setAttribute('class', 'col-8')
  title.innerHTML = 'Projects'
  divProjectsButton.appendChild(title)

  const button = addButtonComponent();
  
  divProjectsButton.appendChild(button);

  projectList.appendChild(divProjectsButton);
  
  

  return projectList
}

export default projectListComponent;