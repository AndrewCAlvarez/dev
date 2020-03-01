import { createStore, combineReducers } from "redux";

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    default:
      return state;
  }
};

const character = (
  state = {
    name: "Borat",
    class: "Diplomat"
  },
  action
) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: "Kelsey" };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ character: character, counter: counter });

// probably need to combine counter and character (combine reducers?)
const store = createStore(rootReducer);

console.log(store.getState().character);
store.dispatch({ type: "CHANGE_NAME" });
console.log(store.getState().character);
