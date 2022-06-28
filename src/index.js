import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const Actions = {
  CREATE: "create",
  UPDATE: "update",
  DELETE: "delete",
};

const ADD_TODO = (text) => {
  return {
    type: Actions.CREATE,
    text,
  };
};

const DELETE_TODO = (id) => {
  return {
    type: Actions.DELETE,
    id,
  };
};

const todoReducer = (todos = [], action) => {
  console.log(todos, action);
  switch (action.type) {
    case Actions.CREATE:
      return [{ id: Date.now(), text: action.text }, ...todos];
    case Actions.UPDATE:
      break;
    case Actions.DELETE:
      const newTodos = todos.filter((todo) => todo.id !== parseInt(action.id));
      return newTodos;
    default:
      return todos;
  }
};

const todoStore = createStore(todoReducer);

const onStateChange = () => {
  ul.innerHTML = "";
  todoStore.getState().forEach((todo) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = "DEL";
    button.addEventListener("click", onDelete);
    li.id = todo.id;
    li.innerText = todo.text;
    li.appendChild(button);
    ul.appendChild(li);
  });
};

todoStore.subscribe(onStateChange);

const addTodo = (text) => {
  todoStore.dispatch(ADD_TODO(text));
};

const onSubmit = (e) => {
  e.preventDefault();
  const todo = input.value;
  input.value = "";
  addTodo(todo);
};

const onDelete = (e) => {
  todoStore.dispatch(DELETE_TODO(e.target.parentNode.id));
};

form.addEventListener("submit", onSubmit);
