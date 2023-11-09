import './App.css';
import Home from './Home/Home'

function App() {
  return (
    <div className="App">
      <Home />
        <header className="App-header">
          <img src={"../images/dwwm_1.png"} className="App-logo" alt="logo" />
          <p>
            TP React Développeur Web et Web Mobile
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rechercher des films
          </a>
        </header>
    </div>
  );
}

export default App;
