import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/"  className={({isActive})=> `text-blue-500 hover:underline ${isActive ? "font-bold text-blue-700" : ""}`}>Home</NavLink>
        <NavLink to="/rsvp" className={({isActive})=> `text-blue-500 hover:underline ${isActive ? "font-bold text-blue-700" : ""}`}>RSVP</NavLink>
        <NavLink to="/admin" className={({isActive})=> `text-blue-500 hover:underline ${isActive ? "font-bold text-blue-700" : ""}`}>Admin</NavLink>

        <div className="logo text-2xl">
            Aletta & Balázs
        </div>
    </nav>
  )
}

export default Navbar