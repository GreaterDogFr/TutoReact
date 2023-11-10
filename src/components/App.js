//*** fichier App.js ***
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Home/Home';
import About from './About/About'
import Layout from './Layout/Layout'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
export default App;