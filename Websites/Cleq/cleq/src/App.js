import logo from './logo.svg';
import './App.css';
import './App.scss';
import Anime from 'react-anime';
import { Nav } from './Components/Nav';
import {BodyContent} from './Components/BodyContent';
import {Footer} from './Components/Footer';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      React Bootstrap
    </Navbar.Brand>
  </Navbar>

      <Nav />
        <BodyContent/>
      <Footer />

    </div>
  );
}

export default App;
