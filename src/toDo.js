class ToDo {
  constructor(title, description, date, priority, id) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    if (id) {
      this.id = id;
    } else {
      let acc = localStorage.getItem("accToDo");
      acc = Number(acc);
      acc += 1;
      this.id = acc;
      localStorage.setItem("accToDo", acc);
    }
  }

  removeElement() {
    const arrayDefault = JSON.parse(localStorage.getItem("Default"));
    const currentArray = JSON.parse(localStorage.getItem("currentArray"));
    localStorage.setItem("currentArray", JSON.stringify(currentArray));
    const findById = (element) => element.id === this.id;
    const indexDefault = arrayDefault.findIndex(findById);
    const indexCA = currentArray.findIndex(findById);
    arrayDefault.splice(indexDefault, 1);
    localStorage.setItem("Default", JSON.stringify(arrayDefault));

    currentArray.splice(indexCA, 1);
    const currentProject = localStorage.getItem("currentProject");
    localStorage.setItem(currentProject, JSON.stringify(currentArray));

    localStorage.setItem("currentArray", JSON.stringify(currentArray));

    const cardToRemove = document.getElementById(`${this.id}`);
    const showToDoList = document.getElementById("toDoListShow");
    showToDoList.removeChild(cardToRemove);
  }

  editElement() {
    let father = document.getElementById(`${this.id}`);

    const formEdit = document.createElement("form");
    father.appendChild(formEdit);

    const inputTitle = document.createElement("input");
    inputTitle.setAttribute("type", "text");
    inputTitle.setAttribute("id", `inputTitleEdit${this.id}`);
    const inputDescription = document.createElement("input");
    inputDescription.setAttribute("type", "text");
    inputDescription.setAttribute("id", `inputDescriptionEdit${this.id}`);
    const inputDate = document.createElement("input");
    inputDate.setAttribute("type", "date");
    inputDate.setAttribute("id", `inputDateEdit${this.id}`);

    const inputPriorityNLabel = document.createElement("div");
    inputPriorityNLabel.setAttribute("id", `inputPriorityEdit${this.id}`);
    let label = document.createElement("label");
    label.innerHTML = "Priority:";
    label.setAttribute("for", "priority");
    inputPriorityNLabel.appendChild(label);
    let priority;
    for (let index = 0; index < 3; index += 1) {
      let input = document.createElement("input");

      switch (index) {
        case 0:
          priority = "low";
          break;

        case 1:
          priority = "medium";
          break;
        case 2:
          priority = "urgent";
          break;

        default:
          break;
      }

      label = document.createElement("label");
      label.setAttribute("for", priority);
      label.innerHTML = priority;
      inputPriorityNLabel.appendChild(label);
      input.setAttribute("type", "radio");
      input.setAttribute("name", priority);
      input.setAttribute("id", `${priority}${this.id}`);
      inputPriorityNLabel.appendChild(input);
    }

    formEdit.appendChild(inputTitle);
    formEdit.appendChild(inputDescription);
    formEdit.appendChild(inputDate);
    formEdit.appendChild(inputPriorityNLabel);

    const editKeypad = document.createElement("button");
    editKeypad.setAttribute("type", "submit");
    editKeypad.setAttribute("id", "editButtonAccept");
    editKeypad.innerHTML = "Accept";

    formEdit.appendChild(editKeypad);

    editKeypad.addEventListener("click", () => {
      let title = document.getElementById(`inputTitleEdit${this.id}`);
      let description = document.getElementById(
        `inputDescriptionEdit${this.id}`
      );
      let date = document.getElementById(`inputDateEdit${this.id}`);
      const priorityLow = document.getElementById(`low${this.id}`);
      const priorityMedium = document.getElementById(`medium${this.id}`);
      const priorityUrgent = document.getElementById(`urgent${this.id}`);
      priority = null;
      if (priorityLow.checked) {
        priority = priorityLow.name;
      } else if (priorityMedium.checked) {
        priority = priorityMedium.name;
      } else {
        priority = priorityUrgent.name;
      }

      let card = new ToDo(
        title.value,
        description.value,
        date.value,
        priority,
        this.id
      );

      let defaultArray = JSON.parse(localStorage.getItem("Default"));
      let index = defaultArray.findIndex((element) => element.id == this.id);
      defaultArray[index] = card;
      localStorage.setItem("Default", JSON.stringify(defaultArray));

      let currentProject = localStorage.getItem("currentProject");
      let projectArray = JSON.parse(localStorage.getItem(`${currentProject}`));
      index = projectArray.findIndex((element) => element.id == this.id);
      projectArray[index] = card;
      localStorage.setItem(`${currentProject}`, JSON.stringify(projectArray));

      localStorage.setItem("currentArray", JSON.stringify(projectArray));

      // console.log(description.value);
      // const oldTitle = father.childNodes[0];

      // console.log(oldDescription);

      // oldDescription.innerHTML = description.value;

      // const oldDate = father.childNodes[1].childNodes[0];
      // const oldPriority = father.childNodes[1].childNodes[0];

      // oldTitle.textContent = title.value;
      // oldDate.textContent = date.value;
      // oldPriority.textContent = priority.value;

      // let color = null;
      // if (oldPriority.textContent === "low") {
      //   color = "primary";
      // } else if (oldPriority.textContent === "medium") {
      //   color = "warning";
      // } else {
      //   color = "danger";
      // }
      // father.setAttribute("class", `card text-white bg-${color}`);

      // father.removeChild(formEdit);
      // window.location.reload();
    });
  }

  print() {
    const card = document.createElement("div");
    let color = null;
    if (this.priority === "low") {
      color = "primary";
    } else if (this.priority === "medium") {
      color = "warning";
    } else {
      color = "danger";
    }
    card.setAttribute("class", `card text-white bg-${color}`);
    card.setAttribute("id", `${this.id}`);

    const title = document.createElement("div");
    title.setAttribute("id", "cardTitle");
    title.setAttribute("class", "card-header text-white");
    title.innerHTML = this.title;
    card.appendChild(title);

    const body = document.createElement("div");
    body.setAttribute("class", "card-body text-white");
    body.setAttribute("id", "body");
    card.appendChild(body);

    const bodyTitle = document.createElement("h5");
    bodyTitle.setAttribute("id", `description${this.id}`);
    bodyTitle.setAttribute("class", "card-title text-white");
    bodyTitle.innerHTML = this.description;
    body.appendChild(bodyTitle);

    let bodyP = document.createElement("p");
    bodyP.setAttribute("class", "card-text text-white");
    bodyP.setAttribute("id", "dateToDo");
    bodyP.innerHTML = this.date;
    body.appendChild(bodyP);

    bodyP = document.createElement("p");
    bodyP.setAttribute("class", "card-text text-white");
    bodyP.setAttribute("id", "priorityToDo");
    bodyP.innerHTML = this.priority;
    body.appendChild(bodyP);

    const keypad = document.createElement("div");
    keypad.setAttribute("class", "row container");
    card.appendChild(keypad);

    const delButton = document.createElement("button");
    delButton.setAttribute("id", "deleteButton");
    delButton.setAttribute("class", "col-2");
    delButton.innerHTML = "Delete";
    keypad.appendChild(delButton);
    delButton.addEventListener("click", () => this.removeElement());

    const editButton = document.createElement("button");
    editButton.setAttribute("id", "editButton");
    editButton.setAttribute("class", "col-2");
    editButton.innerHTML = "Edit";
    keypad.appendChild(editButton);
    editButton.addEventListener("click", () => this.editElement());

    return card;
  }
}

export default ToDo;
