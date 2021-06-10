import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import './ComponentCSS/Navbar.css';
import IGetIt from './Components/IGetIt';




function App(props) {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React: The development of large applications that have temporal data changes.</p>
        <IGetIt />
      </header>
    </div>
  );
}

export default App;
