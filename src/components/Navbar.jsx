import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="fixed items-center flex justify-between top-0 left-1/2 transform -translate-x-1/2 bg-white py-10 pb-15 w-[1200px] z-20">
        {/* Menu */}
        <div className="gap-3 flex max">
            <Link to="/"  className={({isActive})=> `text-blue-500 hover:underline ${isActive ? "font-bold text-blue-700" : ""}`}>Rólunk</Link>
            <Link to="/#helyszin" className={({isActive})=> `text-blue-500 hover:underline ${isActive ? "font-bold text-blue-700" : ""}`}>Helyszín</Link>
            <Link to="/#datum" className={({isActive})=> `text-blue-500 hover:underline ${isActive ? "font-bold text-blue-700" : ""}`}>Dátum</Link>
            <Link to="/#program" className={({isActive})=> `text-blue-500 hover:underline ${isActive ? "font-bold text-blue-700" : ""}`}>Program</Link>
            <Link to="/#foto" className={({isActive})=> `text-blue-500 hover:underline ${isActive ? "font-bold text-blue-700" : ""}`}>Fotó album</Link>

        </div>

        <div className="logo text-5xl mr-30 bg-clip-text text-transparent bg-linear-to-r from-[#BF953F] via-[#dddab2]  to-[#AA771C]">
            Aletta & Balázs
        </div>
        <p className="logo absolute bottom-5 left-[50%] transform -translate-x-[30%] text-[20px]">
            Szeptember 7. 2025
        </p>

        <div className="flex gap-5 items-center">
            <Link>GYIK</Link>
            <Link className="border border-gray-500 p-2 font-semibold rounded-md hover:bg-[#bea794] hover:border-transparent hover:text-white transition duration-300" to="/rsvp">Ott leszek!</Link>
        </div>
    </nav>
  )
}

export default Navbar