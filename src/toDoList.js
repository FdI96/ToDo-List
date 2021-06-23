const toDoListComponent = () => {
  const toDoList = document.createElement("div");
  toDoList.setAttribute("class", "toDoListContainer");
  const form = document.createElement("form");
  form.addEventListener("onsubmit", "onSubmitFuction");
  toDoList.appendChild(form);

  return toDoList;
};

export default toDoListComponent;
