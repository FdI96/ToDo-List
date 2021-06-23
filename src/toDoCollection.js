const toDoCollection = () => {
  const onSubmitForm = (that) => {
    that.toDoListBlock.value;
    return false;
  };

  const toDoList = document.createElement("div");
  toDoList.setAttribute("class", "col-8");

  const title = document.createElement("h2");
  title.setAttribute("class", "text-center");
  title.innerHTML = "List of ToDo";

  toDoList.appendChild(title);

  const toDoListBlock = document.createElement("div");
  toDoListBlock.setAttribute("class", "toDoListBlock");
  const form = document.createElement("form");
  form.setAttribute("onsubmit", "onSubmitFuction(this)");
  toDoListBlock.appendChild(form);
  toDoList.appendChild(toDoListBlock);

  // form fields

  const inputTitleNLabel = document.createElement("div");
  form.appendChild(inputTitleNLabel);
  let label = document.createElement("label");
  label.setAttribute("for", "title");
  label.innerHTML = "Title:";
  inputTitleNLabel.appendChild(label);

  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "title");
  input.setAttribute("id", "title");
  inputTitleNLabel.appendChild(input);

  const inputDescriptionNLabel = document.createElement("div");
  form.appendChild(inputDescriptionNLabel);
  label = document.createElement("label");
  label.innerHTML = "Description:";
  label.setAttribute("for", "description");
  inputDescriptionNLabel.appendChild(label);

  input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "description");
  input.setAttribute("id", "description");
  inputDescriptionNLabel.appendChild(input);

  const inputDueDateNLabel = document.createElement("div");
  form.appendChild(inputDueDateNLabel);
  label = document.createElement("label");
  label.innerHTML = "Due Date: ";
  label.setAttribute("for", "dueDate");
  inputDueDateNLabel.appendChild(label);

  input = document.createElement("input");
  input.setAttribute("type", "date");
  input.setAttribute("name", "dueDate");
  input.setAttribute("id", "dueDate");
  inputDueDateNLabel.appendChild(input);

  const inputPriorityNLabel = document.createElement("div");
  form.appendChild(inputPriorityNLabel);
  label = document.createElement("label");
  label.innerHTML = "Priority:";
  label.setAttribute("for", "priority");
  inputPriorityNLabel.appendChild(label);

  for (let index = 0; index < 3; index++) {
    input = document.createElement("input");
    let priority = null;
    switch (index) {
      case 0:
        priority = "Low";
        break;

      case 1:
        priority = "Medium";
        break;
      case 2:
        priority = "Urgent";
        break;

      default:
        break;
    }

    label = document.createElement("label");
    label.setAttribute("for", "priority");
    label.innerHTML = priority;
    inputPriorityNLabel.appendChild(label);
    input.setAttribute("type", "radio");
    input.setAttribute("name", "priority");
    input.setAttribute("id", "priority");
    inputPriorityNLabel.appendChild(input);
  }

  const sumbitButton = document.createElement("input");
  form.appendChild(sumbitButton);
  sumbitButton.setAttribute("type", "submit");
  sumbitButton.setAttribute("id", "submitButton");

  return toDoList;
};

export default toDoCollection;
