import logo from './logo.svg';
import './App.css';
import Background from './Background';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Background>
        <h1 id='text'>WELCOME<br/><span id='starsign'>GEMINI</span></h1>
      </Background>
    </div>
  );
}

export default App;
