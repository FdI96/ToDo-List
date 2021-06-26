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
    const findById = (element) => element.id === this.id;
    const indexDefault = arrayDefault.findIndex(findById);
    const indexCA = currentArray.findIndex(findById);
    arrayDefault.splice(indexDefault, 1);
    localStorage.setItem("Default", JSON.stringify(arrayDefault));

    currentArray.splice(indexCA, 1);
    const currentProject = localStorage.getItem("currentProject");
    localStorage.setItem(currentProject, JSON.stringify(currentArray));

    localStorage.setItem("currentArray", currentArray);

    const cardToRemove = document.getElementById(`${this.id}`);
    const showToDoList = document.getElementById("toDoListShow");
    showToDoList.removeChild(cardToRemove);
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
    title.setAttribute("class", "card-header text-white");
    title.innerHTML = this.title;
    card.appendChild(title);

    const body = document.createElement("div");
    body.setAttribute("class", "card-body text-white");
    card.appendChild(body);

    const bodyTitle = document.createElement("h5");
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

export default ToDo;
