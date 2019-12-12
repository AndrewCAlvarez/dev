import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// //  REDUX STORE -> globalized state

// //  REDUX ACTION -> increment
// const increment = () => {
//   return {
//     type: "INCREMENT"
//   };
// };

// const decrement = () => {
//   return {
//     type: "DECREMENT"
//   };
// };

// //  REDUX REDUCER
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;

//     case "DECREMENT":
//       return state - 1;
//   }
// };

// let store = createStore(counter);

// //  DISPLAY IN CONSOLE
// store.subscribe(() => console.log(store.getState()));

// //  DISPATCH
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
