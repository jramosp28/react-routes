import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<div className="page-content"><Home /></div>} />
        <Route path="/about" element={<div className="page-content"><About /></div>} />
        <Route path="/contact" element={<div className="page-content"><Contact /></div>} />
      </Routes>
    </Router>
  );
}

export default App;
