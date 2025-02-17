//Dependencie imports 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

// Page imports 
import Home from './pages/Home'
import RSVP from './pages/RSVP'
import Admin from './pages/Admin'

//Components 
import Navbar from './components/Navbar'

//Styling import
import './App.css'

function App() {

  const [activeLink, setActiveLink] = useState('home')

  return (
    <Router>
      <Navbar activeLink={activeLink}/>
      <Routes>
        <Route path="/" element={<Home setActiveLink={setActiveLink} />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  )
}

export default App
