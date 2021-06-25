class ToDo {
  constructor(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    let acc = localStorage.getItem("accToDo");
    this.id = acc++;
    localStorage.setItem("accToDo", acc);
  }

  removeElement() {
    let arrayDefault = JSON.parse(localStorage.getItem("Default"));
    let currentArray = JSON.parse(localStorage.getItem("currentArray"));
    let findById = (element) => {
      return element.id == this.id;
    };
    let indexDefault = arrayDefault.findIndex(findById);
    let indexCA = currentArray.findIndex(findById);
    arrayDefault.splice(indexDefault, 1);
    localStorage.setItem("Default", JSON.stringify(arrayDefault));

    currentArray.splice(indexCA, 1);
    let currentProject = localStorage.getItem("currentProject");
    localStorage.setItem(currentProject, JSON.stringify(currentArray));

    let cardToRemove = document.getElementById(`${this.id}`);
    let showToDoList = document.getElementById("toDoListShow");
    showToDoList.removeChild(cardToRemove);
  }

  print() {
    let card = document.createElement("div");
    let color = null;
    if (this.priority == "low") {
      color = "primary";
    } else if (this.priority == "medium") {
      color = "warning";
    } else {
      color = "danger";
    }
    card.setAttribute("class", `card text-white bg-${color}`);
    card.setAttribute("id", `${this.id}`);

    let title = document.createElement("div");
    title.setAttribute("class", "card-header text-white");
    title.innerHTML = this.title;
    card.appendChild(title);

    let body = document.createElement("div");
    body.setAttribute("class", "card-body text-white");
    card.appendChild(body);

    let bodyTitle = document.createElement("h5");
    bodyTitle.setAttribute("class", "card-title text-white");
    bodyTitle.innerHTML = this.description;
    body.appendChild(bodyTitle);

    let bodyP = document.createElement("p");
    bodyP.setAttribute("class", "card-text text-white");
    bodyP.innerHTML = this.date;
    body.appendChild(bodyP);

    bodyP = document.createElement("p");
    bodyP.setAttribute("class", "card-text text-white");
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

    return card;
  }
}

export { ToDo };
