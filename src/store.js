import { configureStore, createSlice } from "@reduxjs/toolkit";

const save = (state) => {
  window.localStorage.setItem("todos", JSON.stringify(state));
  return state;
};

const todoSlice = createSlice({
  name: "todoReducer",
  initialState: JSON.parse(window.localStorage.getItem("todos")) || [],
  reducers: {
    ADD_TODO: (state, action) => {
      return save([{ text: action.payload, id: Date.now() }, ...state]);
    },
    DELETE_TODO: (state, action) => {
      return save(state.filter((todo) => todo.id !== parseInt(action.payload)));
    },
  },
});

export const { ADD_TODO, DELETE_TODO } = todoSlice.actions;

export default configureStore({ reducer: todoSlice.reducer });
