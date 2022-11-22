document.toDo = {
    variable: '',
    controls: {
        container: undefined,
        wrapper: undefined,
        items: undefined,
        input: undefined
    }
}

function createContainer() {
    var container = document.createElement('div');
    container.classList.add('container');

    document.toDo.controls.container = container;

    var app = document.getElementById('app')
    if (app){
        app.append(container);
    }
}

function createWrapper() {
    var { container } = document.toDo.controls;
    var wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    container.append(wrapper);
}

//присваиваем значение введенного в поле переменной
function onChangeInput(event) {
    const {toDo} = document;
    toDo.variable = event.target.value;
}

function createItem(text) {

    var item = document.createElement('div');
    item.classList.add('item');

    var  span = document.createElement('span');
    span.innerText = text;
    item.append(span);

    var items = document.querySelector('#app > .container > .wrapper > .items')
    if (items){
        items.append(item);
        return true;
    }
}

function onKeyDownInput(event) {
    // обработчик интер по полю ввода
    const {toDo} = document;
    if(event.key == "Enter" && toDo.variable !== ''){
      var isCreated = createItem(toDo.variable);

      if (isCreated){
          document.toDo.variable = '';
          var input = document.querySelector('#app > .container > .wrapper > .input');
          input.value = '';
      }
    }

}


function createInput() {
    var input = document.createElement('input');
    input.classList.add('input');
    input.addEventListener('change', onChangeInput)
    input.addEventListener('keydown', onKeyDownInput)

    var wrapper = document.querySelector('#app > .container > .wrapper')
    if (wrapper){
        wrapper.append(input);
    }
}

function createItems() {
    var items = document.createElement('div');
    items.classList.add('items');
    var wrapper = document.querySelector('#app > .container > .wrapper')
    if (wrapper){
        wrapper.append(items);
    }
}

function init() {
    createContainer();
    createWrapper();
    createInput();
    createItems()
}

document.addEventListener("DOMContentLoaded", init);