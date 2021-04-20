import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import Form from './Components/Form';
import LoginControl from './Components/LoginControl';
import TodaysDate from './Components/TodaysDate';
import Clock from './Components/Clock';
import Buzzer from './Components/Buzzer';




function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Buzzer />
      <Counter />
      <Form />
      <LoginControl />
      <TodaysDate />
      <Clock />
      </header>
    </div>
  );
}

export default App;
