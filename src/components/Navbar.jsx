/* eslint-disable react/prop-types */
import { Link } from "react-scroll";

const Navbar = ({activeLink}) => {
  return (
    <nav className="fixed items-center flex justify-between top-0 left-1/2 transform -translate-x-1/2 mt-4 bg-white/60 backdrop-blur-md px-20 py-10 pb-15 w-[1350px] z-20 rounded-lg">
        {/* Menu */}
        <div className="gap-3 flex max text-wedding-brown">
            <div>
                <Link to="home"
                smooth={true}
                className="cursor-pointer">Home</Link>
                { activeLink === "home" && <div className="h-[2px] bg-amber-400 w-full"></div>}
            </div>

            <div>
                <Link to="helyszin"
                smooth={true}
                offset={-200}
                className="cursor-pointer"
                >Helyszín</Link>
                { activeLink === "helyszin" && <div className="h-[2px] bg-amber-400 w-full"></div>}
            </div>

            <div>
                <Link to="datum"
                smooth={true}
                offset={-100}
                className="cursor-pointer"
                >Dátum</Link>
                { activeLink === "date" && <div className="h-[2px] bg-amber-400 w-full"></div>}
            </div>

            <Link 
            to="program"
            className="cursor-pointer"
            >Program</Link>

            <Link 
            to="foto"
            className="cursor-pointer"
            >Fotó album</Link>

        </div>

        <div className="logo text-5xl mr-30 bg-clip-text text-transparent bg-linear-to-r from-[#BF953F] via-[#dddab2]  to-[#AA771C]">
            Aletta & Balázs
        </div>
        <p className="logo absolute bottom-5 text-wedding-light-gray left-[50%] transform -translate-x-[30%] text-[20px]">
            Szeptember 7. 2025
        </p>

        <div className="flex gap-5 items-center">
            <Link>GYIK</Link>
            <Link className="border border-wedding-light-gray text-wedding-gray p-2 font-semibold rounded-md hover:bg-wedding-brown hover:border-transparent hover:text-white transition duration-300" to="/rsvp">Ott leszek!</Link>
        </div>
    </nav>
  )
}

export default Navbar