import logo from './logo.svg';
import './App.css';
import Counter from './Counter';



function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Counter state={props.state}/>
      </header>
    </div>
  );
}

export default App;
