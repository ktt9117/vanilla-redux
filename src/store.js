import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const ADD_TODO = createAction("ADD");
const DELETE_TODO = createAction("DELETE");

const reducer = createReducer(JSON.parse(window.localStorage.getItem("todos")) || [], {
  [ADD_TODO]: (state, action) => {
    return save([{ text: action.payload, id: Date.now() }, ...state]);
  },
  [DELETE_TODO]: (state, action) => {
    return save(state.filter((todo) => todo.id !== parseInt(action.payload)));
  },
});

const save = (state) => {
  window.localStorage.setItem("todos", JSON.stringify(state));
  return state;
};

const store = configureStore({ reducer });

export default store;

export const actionCreators = {
  ADD_TODO,
  DELETE_TODO,
};
