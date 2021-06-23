
const toDoCollection = () => {
  const toDoList = document.createElement('div');
  toDoList.setAttribute('class', 'col-8');

  const title = document.createElement('h2');
  title.setAttribute('class', 'text-center');
  title.innerHTML = 'List of ToDo';

  toDoList.appendChild(title);

  return toDoList
}

export default toDoCollection;
