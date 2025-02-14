//Dependencie imports 
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'

// Page imports 
import Home from './pages/Home'
import RSVP from './pages/RSVP'
import Admin from './pages/Admin'

//Styling import
import './App.css'

function App() {


  return (
    <Router>
      <nav>
        <NavLink to="/"  className={({isActive})=> `text-blue-500 hover:underline ${isActive ? "font-bold text-blue-700" : ""}`}>Home</NavLink>
        <NavLink to="/rsvp" className={({isActive})=> `text-blue-500 hover:underline ${isActive ? "font-bold text-blue-700" : ""}`}>RSVP</NavLink>
        <NavLink to="/admin" className={({isActive})=> `text-blue-500 hover:underline ${isActive ? "font-bold text-blue-700" : ""}`}>Admin</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  )
}

export default App
