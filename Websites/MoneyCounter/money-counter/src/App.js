import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import Form from './Components/Form';
import LoginControl from './Components/LoginControl';
import TodaysDate from './Components/TodaysDate';
import Clock from './Components/Clock';
import Buzzer from './Components/Buzzer';
import CSSComponent from './Components/CSSComponent';
import './ComponentCSS/CSSComponent.css';
import ModelCount from './Components/ModelCount'




function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React: The development of large applications that have temporal data changes.</p>
        <ModelCount />
      </header>
    </div>
  );
}

export default App;
