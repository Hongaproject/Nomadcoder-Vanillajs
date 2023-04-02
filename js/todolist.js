const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input")
const todoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));;
}

function deleteButton(event) {
    const li = event.target.parentElement;
    li.remove();
}

function painToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteButton);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function todoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    toDos.push(newTodo);
    painToDo(newTodo);
    saveToDos();
}

todoForm.addEventListener("submit", todoSubmit);