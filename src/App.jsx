import Menu from './Components/Menu'
import HomePage from './pages/HomePage'
import DriftPage from './pages/DriftPage'
import ForzaPage from './pages/ForzaPage'
import TimeAttackPage from './pages/TimeAttackPage'
import { Routes, Route } from 'react-router-dom'


export default function App() {
  return (
    
    <div>
      <Menu />
      <div className="page">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/drift" element={<DriftPage/>} />
          <Route path="/timeattack" element={<TimeAttackPage/>} />
          <Route path="/forza" element={<ForzaPage/>} />
        </Routes>
      </div>
    </div>
  );
}