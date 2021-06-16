import './Styles/App.css';
import './Styles/App.scss';
import {BodyContent} from './Components/BodyContent';
import {Footer} from './Components/Footer';
import { Navigation } from './Components/Navigation';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Navigation/>
      <BodyContent/>
      <Footer/>
    </div>
  );
}

export default App;
