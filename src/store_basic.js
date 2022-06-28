import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ActionTypes = {
  ADD: "add",
  MINUS: "minus",
};

const initialState = {
  count: 0,
};

const countReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case ActionTypes.ADD:
      return {
        count: state.count + 1,
      };
    case ActionTypes.MINUS:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const countStore = createStore(countReducer);
console.log(countStore);

const onChange = () => {
  number.innerText = countStore.getState().count;
};
countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: ActionTypes.ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: ActionTypes.MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
