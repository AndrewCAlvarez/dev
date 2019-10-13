import React from "react";
import Todos from "./components/Todos";

import "./App.css";

function App() {
    state = {
        todos: {
            title: "Take out the trash"
        }
    };

    return (
        <div className="App">
            <h1>App!</h1>
            <Todos />
        </div>
    );
}

export default App;
