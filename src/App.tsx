import './App.css';
import { Routes, Route } from 'react-router-dom';
import Favorite from './components/Favorite';
import Home from './Home';
import Navbar from './components/Navbar';
import Recent from './components/Recent';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/faves' element={<Favorite />} />
        <Route path='/recent' element={<Recent />} />
      </Routes>
    </div>
  );
}

export default App;
