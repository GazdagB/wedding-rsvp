//Dependencie imports 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Page imports 
import Home from './pages/Home'
import RSVP from './pages/RSVP'
import Admin from './pages/Admin'

//Components 
import Navbar from './components/Navbar'

//Styling import
import './App.css'

function App() {


  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  )
}

export default App
