import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Form from './Form';
import LoginControl from './LoginControl';
import TodaysDate from './TodaysDate';




function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Counter />
      <Form />
      <LoginControl />
      <TodaysDate />
      </header>
    </div>
  );
}

export default App;
