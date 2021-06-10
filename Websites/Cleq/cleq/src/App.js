import logo from './logo.svg';
import './App.css';
import './App.scss';
import Anime from 'react-anime';
import { Nav } from './Components/Nav';
import {BodyContent} from './Components/BodyContent';
import {Footer} from './Components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <Nav />
        <Anime opacity={[0,1]} easing={'easeInCirc'}>
          <BodyContent/>
        </Anime>
        <Footer />
    </div>
  );
}

export default App;
