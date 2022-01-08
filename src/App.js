import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomePage from './components/Homepage';
import RQSuperHeroesPage from './components/RQSuperHeroespage';
import SuperHeroes from './components/SuperHeroespage';
import './App.css'
function App() {
  return (

    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/SuperHeroespage">Super Heroes </Link></li>
          <li><Link to="/RQSuperHeroespage" >RQ Super Heroes</Link></li>
        </ul>
        
        
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SuperHeroespage" element={<SuperHeroes />} />
        <Route path="/RQSuperHeroespage" element={<RQSuperHeroesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
