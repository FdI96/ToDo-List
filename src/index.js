import projectListComponent from './projects';
import toDoCollection from './toDoCollection';
import ToDo from './toDo';

let allToDos = JSON.parse(localStorage.getItem('allToDosArray'));
allToDos ??= [];
localStorage.setItem('allToDosArray', JSON.stringify(allToDos));

const currentAcc = localStorage.getItem('accToDo');
if (currentAcc == null) {
  localStorage.setItem('accToDo', 0);
}
let currentProject = localStorage.getItem('currentProject');
currentProject ??= localStorage.setItem('currentProject', 'Default');

const defProject = JSON.parse(localStorage.getItem('Default'));
if (defProject == null) {
  localStorage.setItem('Default', JSON.stringify([]));
}

let currentArray = JSON.parse(localStorage.getItem(`${currentProject}`));
if (currentArray === null || currentArray === []) {
  currentArray = [];
}

localStorage.setItem('currentArray', JSON.stringify(currentArray));

const content = document.getElementById('content');

const ptList = document.createElement('div');

ptList.setAttribute('class', 'col-4');
ptList.setAttribute('id', 'projectList');
content.appendChild(ptList);

const toList = document.createElement('div');
toList.setAttribute('class', 'col-8');
toList.setAttribute('id', 'toDoList');
content.appendChild(toList);

const projectList = projectListComponent();

content.appendChild(projectList);

const toDoList = toDoCollection();
content.appendChild(toDoList);

const getTitle = () => {
  const title = document.getElementById('title');
  return title.value;
};

const getDescription = () => {
  const description = document.getElementById('description');
  return description.value;
};

const getDate = () => {
  const date = document.getElementById('dueDate');
  return date.value;
};

const getPriority = () => {
  const priorityLow = document.getElementById('low');
  const priorityMedium = document.getElementById('medium');
  const priorityUrgent = document.getElementById('urgent');
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

const onSubmitForm = document.getElementById('submitButton');
onSubmitForm.addEventListener('click', (e) => {
  e.preventDefault();
  const title = getTitle();
  const desc = getDescription();
  const date = getDate();
  const prior = getPriority();

  const toDo = new ToDo(title, desc, date, prior);
  const toDoListShow = document.getElementById('toDoListShow');
  toDoListShow.appendChild(toDo.print());
  allToDos.push(toDo);
  currentArray = JSON.parse(localStorage.getItem('currentArray'));
  localStorage.setItem('Default', JSON.stringify(allToDos));
  currentArray.push(toDo);
  currentProject = localStorage.getItem('currentProject');
  localStorage.setItem('currentArray', JSON.stringify(currentArray));
  localStorage.setItem(`${currentProject}`, JSON.stringify(currentArray));
  localStorage.setItem('allToDosArray', JSON.stringify(allToDos));
  toDoList.appendChild(toDoListShow);
});
