import addButtonComponent from './addButton';
import ToDo from './toDo';

let projects = JSON.parse(localStorage.getItem('projectsArray'));
projects = !projects ? ['Default'] : projects;
localStorage.setItem('projectsArray', projects);

let currentP = localStorage.getItem('currentProject');
currentP ??= localStorage.setItem('currentProject', 'Default');

let arrayCurrent = JSON.parse(localStorage.getItem('Default'));
arrayCurrent ??= [];

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
      const targetValue = e.target.innerHTML;
      const getValue = localStorage.getItem(targetValue);
      const arrayCurrent = JSON.parse(`${getValue}`);

      localStorage.setItem('currentArray', JSON.stringify(arrayCurrent));
      const list = document.getElementById('toDoListShow');

      list.innerHTML = null;
      const currentP = localStorage.getItem('currentProject');
      const arrayAux = currentP === 'Default'
        ? JSON.parse(localStorage.getItem('Default'))
        : JSON.parse(localStorage.getItem('currentArray'));

      for (let index = 0; index < arrayAux.length; index += 1) {
        const card = new ToDo(
          arrayAux[index].title,
          arrayAux[index].description,
          arrayAux[index].date,
          arrayAux[index].priority,
          arrayAux[index].id,
        );

        if (card.id) {
          const renderCard = card.print();
          list.appendChild(renderCard);
          const toList = document.getElementById('toDoList');
          toList.appendChild(list);
        }
      }
    });

    li.appendChild(button);
    uList.appendChild(li);

    arrayCurrent = JSON.parse(localStorage.getItem(currentP));
  }

  projectList.appendChild(divProjectsButton);

  projectList.appendChild(uList);

  const submitButton = form.children[1].children[0];
  submitButton.addEventListener('click', () => {
    projects.push(form.children[0].value);
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.innerHTML = form.children[0].value;
    button.addEventListener('click', (e) => {
      localStorage.setItem('currentProject', e.target.innerHTML);
      const item = localStorage.getItem('currentProject');
      arrayCurrent = JSON.parse(localStorage.getItem(item));
      localStorage.setItem('currentArray', JSON.stringify(arrayCurrent));
      const toDoL = document.getElementById('toDoListShow');
      toDoL.innerHTML = null;
      for (let index = 0; index < arrayCurrent.length; index += 1) {
        const card = new ToDo(
          arrayCurrent[index].title,
          arrayCurrent[index].description,
          arrayCurrent[index].date,
          arrayCurrent[index].priority,
          arrayCurrent[index].id,
        );
        if (card.id) {
          const renderCard = card.print();
          const toDoListShow = document.getElementById('toDoListShow');
          toDoListShow.appendChild(renderCard);
        }
      }
    });
    localStorage.setItem('currentProject', form.children[0].value);
    const key = form.children[0].value;
    localStorage.setItem(`${key}`, JSON.stringify([]));
    localStorage.setItem('currentArray', '[]');
    const toDoListShow = document.getElementById('toDoListShow');
    toDoListShow.innerHTML = null;
    li.appendChild(button);
    uList.appendChild(li);
    localStorage.setItem('projectsArray', JSON.stringify(projects));
  });

  return projectList;
};

export default projectListComponent;
