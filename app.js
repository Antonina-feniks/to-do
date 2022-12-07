document.toDo = {
  variable: "",
  controls: {
    container: undefined,
    wrapper: undefined,
    items: undefined,
    input: undefined,
  },
};
//создание div container
function createContainer() {
  var container = document.createElement("div");
  container.classList.add("container");

  document.toDo.controls.container = container;

  var app = document.getElementById("app");
  if (app) {
    app.append(container);
  }
}

function createWrapper() {
  var { container } = document.toDo.controls;
  var wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  container.append(wrapper);
  document.toDo.controls.wrapper = wrapper;
}

function createItem(text) {
  var item = document.createElement("div");
  item.classList.add("item");

  var span = document.createElement("span");
  span.innerText = text;
  span.classList.add("text-content");
  item.append(span);

  //иконка чек бокса
  var iconComplete = document.createElement("i");
  iconComplete.classList.add("fa");
  iconComplete.classList.add("fa-check-circle-o");
  iconComplete.addEventListener("click", (event) => {
    var parentItem = event.target.parentNode;
    parentItem.classList.toggle("item_completed");
    console.dir(event.target);
    //document.toDo.controls.items.removeChild(event.target)
  });

  item.insertAdjacentElement("afterbegin", iconComplete);

  //иконка корзинки
  var iconTrash = document.createElement("i");
  iconTrash.classList.add("fa");
  iconTrash.classList.add("fa-trash");
  //удаление строки при клике на иконку
  iconTrash.addEventListener("click", (event) => {
    item.remove();
  });
  item.insertAdjacentElement("beforeend", iconTrash);

  var items = document.querySelector("#app > .container > .wrapper > .items");
  if (items) {
    items.insertAdjacentElement("afterbegin", item);
    return true;
  }
}

function onKeyUpInput(event) {
  // обработчик интер по полю ввода
  const { toDo } = document;
  if (event.key === "Enter" && toDo.variable !== "") {
    var isCreated = createItem(toDo.variable);

    if (isCreated) {
      document.toDo.variable = "";
      document.toDo.controls.input.value = "";
    }
  }
}

function onChangeInput(event) {
  document.toDo.variable = event.target.value;
}

function createInput() {
  var input = document.createElement("input");
  input.classList.add("input");
  input.addEventListener("change", onChangeInput);
  input.addEventListener("keyup", onKeyUpInput);
  document.toDo.controls.input = input;
  document.toDo.controls.wrapper.append(input);
}

function createItems() {
  var items = document.createElement("div");
  items.classList.add("items");
  document.toDo.controls.items = items;
  document.toDo.controls.wrapper.append(items);
}

function init() {
  createContainer();
  createWrapper();
  createInput();
  createItems();
}

document.addEventListener("DOMContentLoaded", init);
