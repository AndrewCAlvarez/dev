import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Form from './Form';



function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Counter />
      <Form />
      </header>
    </div>
  );
}

export default App;
