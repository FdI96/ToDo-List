const addButtonComponent = () => {
  const spanAddButton = document.createElement('span')
  spanAddButton.setAttribute('class', 'col-4')
  const addButton = document.createElement('button')
  addButton.innerHTML = 'Add project';
  spanAddButton.appendChild(addButton);

  return spanAddButton
}

export default addButtonComponent;