import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-7 px-10">
        {/* Menu */}
        <div className="gap-3 flex max">
            <Link to="/"  className={({isActive})=> `text-blue-500 hover:underline ${isActive ? "font-bold text-blue-700" : ""}`}>Rólunk</Link>
            <Link to="/#helyszin" className={({isActive})=> `text-blue-500 hover:underline ${isActive ? "font-bold text-blue-700" : ""}`}>Helyszín</Link>
            <Link to="/#datum" className={({isActive})=> `text-blue-500 hover:underline ${isActive ? "font-bold text-blue-700" : ""}`}>Dátum</Link>
            <Link to="/#program" className={({isActive})=> `text-blue-500 hover:underline ${isActive ? "font-bold text-blue-700" : ""}`}>Program</Link>
            <Link to="/#foto" className={({isActive})=> `text-blue-500 hover:underline ${isActive ? "font-bold text-blue-700" : ""}`}>Fotó album</Link>

        </div>

        <div className="logo text-5xl mr-30">
            Aletta & Balázs
        </div>

        <div className="flex gap-5 items-center">
            <Link>GYIK</Link>
            <Link className="border border-gray-500 p-2 rounded-md" to="/rsvp">Ott leszek!</Link>
        </div>
    </nav>
  )
}

export default Navbar