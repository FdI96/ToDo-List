class ToDo {
  constructor(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
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

    return card;
  }
}

export { ToDo };
