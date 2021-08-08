import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { devToolsEnhancer } from "redux-devtools-extension"; //redux chrome dev tools
import { counterReducer, characterReducer } from "./reducers/reducers";

const rootReducer = combineReducers({ character: characterReducer, counter: counterReducer });

const store = createStore(rootReducer, devToolsEnhancer());

console.log(store.getState());
store.dispatch({ type: "CHANGE_NAME" });
console.log(store.getState().character);

/*********************************************************** */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
