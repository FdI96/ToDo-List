import { projects, addButtonComponent } from './addButton';
import ToDo from './toDo';

let currentP = localStorage.getItem('currentProject');
currentP ??= localStorage.setItem('currentProject', 'Default');
let allToDos = JSON.parse(localStorage.getItem('allToDosArray'));
allToDos ??= [];

let currentA = JSON.parse(localStorage.getItem('Default'));
currentA ??= [];

const projectListComponent = () => {
  const projectList = document.getElementById('projectList');

  const divProjectsButton = document.createElement('div');
  divProjectsButton.setAttribute('class', 'row');

  const title = document.createElement('h1');
  title.setAttribute('class', 'col-8');
  title.innerHTML = 'Projects';
  divProjectsButton.appendChild(title);
  const form = addButtonComponent();
  divProjectsButton.appendChild(form);

  const uList = document.createElement('ul');

  for (let index = 0; index < projects.length; index += 1) {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.innerHTML = projects[index];
    button.addEventListener('click', (e) => {
      localStorage.setItem('currentProject', e.target.innerHTML);
      currentA = JSON.parse(localStorage.getItem(e.target.innerHTML));

      localStorage.setItem('currentArray', JSON.stringify(currentA));
      const list = document.getElementById('toDoListShow');

      list.innerHTML = null;
      const currentP = localStorage.getItem('currentProject');
      const arrayAux = currentP == 'Default'
        ? allToDos
        : JSON.parse(localStorage.getItem('currentArray'));

      for (let index = 0; index < arrayAux.length; index += 1) {
        const card = new ToDo(
          arrayAux[index].title,
          arrayAux[index].description,
          arrayAux[index].date,
          arrayAux[index].priority,
        );

        if (card.title) {
          const renderCard = card.print();
          list.appendChild(renderCard);
          toDoList.appendChild(list);
        }
      }
    });

    li.appendChild(button);
    uList.appendChild(li);

    currentA = JSON.parse(localStorage.getItem(currentP));
  }

  projectList.appendChild(divProjectsButton);

  projectList.appendChild(uList);

  const submitButton = form.children[1].children[0];
  submitButton.addEventListener('click', (e) => {
    projects.push(form.children[0].value);
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.innerHTML = form.children[0].value;
    button.addEventListener('click', (e) => {
      localStorage.setItem('currentProject', e.target.innerHTML);
      const item = localStorage.getItem('currentProject');
      currentA = JSON.parse(localStorage.getItem(item));
      localStorage.setItem('currentArray', JSON.stringify(currentA));
      const toDoList = document.getElementById('toDoListShow');
      toDoList.innerHTML = null;
      for (let index = 0; index < currentA.length; index += 1) {
        const card = new ToDo(
          currentA[index].title,
          currentA[index].description,
          currentA[index].date,
          currentA[index].priority,
        );
        if (card.id) {
          const renderCard = card.print();
          toDoListShow.appendChild(renderCard);
        }
      }
    });
    localStorage.setItem('currentProject', form.children[0].value);
    const key = form.children[0].value;
    localStorage.setItem(`${key}`, JSON.stringify([]));
    localStorage.setItem('currentArray', '[]');
    let toDoListShow = document.getElementById('toDoListShow');
    toDoListShow.innerHTML = null;
    li.appendChild(button);
    uList.appendChild(li);
    localStorage.setItem('projectsArray', JSON.stringify(projects));
  });

  return projectList;
};

export { projectListComponent };
