const projects = ["Default"];

const addButtonComponent = () => {
  const form = document.createElement("form");
  form.setAttribute("id", "idForm");
  const inputName = document.createElement("input");
  inputName.setAttribute("type", "text");
  inputName.setAttribute("placeholder", "Project name");
  inputName.setAttribute("id", "nameField");
  form.appendChild(inputName);
  const spanAddButton = document.createElement("span");
  spanAddButton.setAttribute("class", "col-4");
  const addButton = document.createElement("button");
  addButton.setAttribute("type", "submit");
  addButton.setAttribute("id", "buttonSubmit");
  addButton.innerHTML = "Add project";

  spanAddButton.appendChild(addButton);
  form.appendChild(spanAddButton);

  return form;
};

export { projects, addButtonComponent };
