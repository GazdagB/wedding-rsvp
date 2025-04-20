import { Link } from "react-scroll";
import Hamburger from 'hamburger-react'
import { useState, useEffect } from "react";
import { motion } from "framer-motion"; 
import { RiKey2Line } from "react-icons/ri";
import {NavLink} from "react-router-dom"


const Navbar = ({ activeLink }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock/unlock body scroll based on menu state
  useEffect(() => {
    if (isOpen) {
      // Disable scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      // Enable scroll when menu is closed
      document.body.style.overflow = "auto";
    }
    // Cleanup when component is unmounted or isOpen changes
    return () => {
      document.body.style.overflow = "auto"; // Always reset on cleanup
    };
  }, [isOpen]);

  return (
    <nav className="fixed items-center flex justify-between lg:justify-between top-0 left-1/2 transform -translate-x-1/2 mt-4 bg-white/70 lg:bg-white/60 backdrop-blur-3xl lg:backdrop-blur-md px-4 py-5 md:pb-10 lg:pb-15 lg:max-w-[1020px] xl:max-w-[1150px] 2xl:max-w-[1350px] w-[90%] lg:px-10 xl:px-10 z-20 rounded-lg">
      
      {/* Animated Mobile Menu */}
      <motion.div
        className="h-[90svh] w-[90svw] flex items-center justify-center absolute bg-white rounded-md shadow-2xl top-0 right-0"
        initial={{ y: "-120%" }}
        animate={{ y: isOpen ? "0%" : "-120%" }}
        transition={{ type: "spring", stiffness: 50 , }}
      >
        <motion.ul 
          className="text-center flex flex-col gap-5 text-[20px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
        >
          <Link className="text-wedding-deep-brown" onClick={() => { setIsOpen(false); }} to="home" smooth={true}>Home</Link>
          <Link className="text-wedding-deep-brown" onClick={() => { setIsOpen(false); }} to="helyszin" smooth={true}>Helyszín</Link>
          <Link className="text-wedding-deep-brown" onClick={() => { setIsOpen(false); }} to="datum" smooth={true}>Dátum</Link>
          <Link className="text-wedding-deep-brown" onClick={() => { setIsOpen(false); }} to="program" smooth={true}>Program</Link>
          <Link className="text-wedding-deep-brown" onClick={() => { setIsOpen(false); }} to="foto" smooth={true}>Zene</Link>
        </motion.ul>
      </motion.div>

      {/* Menu Links */}
      <div className="gap-3 text-wedding-brown hidden lg:flex">
        <div>
          <Link to="home" smooth={true} className="cursor-pointer">Home</Link>
          {activeLink === "home" && <div className="h-[2px] bg-amber-400 w-full"></div>}
        </div>
        <div>
          <Link to="helyszin" smooth={true} offset={-200} className="cursor-pointer">Helyszín</Link>
          {activeLink === "helyszin" && <div className="h-[2px] bg-amber-400 w-full"></div>}
        </div>
        <div>
          <Link to="datum" smooth={true} offset={-100} className="cursor-pointer">Dátum</Link>
          {activeLink === "date" && <div className="h-[2px] bg-amber-400 w-full"></div>}
        </div>
        <Link to="program" className="cursor-pointer">Program</Link>
        <Link to="foto" className="cursor-pointer">Fotó album</Link>
      </div>

      {/* Hamburger Button */}
      <div onClick={() => setIsOpen(!isOpen)} className="lg:hidden order-3">
        <Hamburger color="#2A292C" size={25} toggled={isOpen} toggle={setIsOpen} />
      </div>

      {/* Logo */}
      <div className="logo flex flex-col md:order-2 lg:order-none text-3xl md:text-4xl lg:text-3xl xl:text-5xl text-center lg:mr-30 bg-clip-text text-transparent z-10 bg-linear-to-r from-[#BF953F] via-[#dddab2] to-[#AA771C]">
        Aletta & Balázs
        <span className="text-[18px] text-wedding-light-gray">Szeptember 7. 2025</span>
      </div>

      {/* Extra Links */}
      <div className="gap-5 items-center hidden lg:flex">
        <NavLink to={"/admin"}>
          <RiKey2Line className={"cursor-pointer text-2xl"} />
        </NavLink>
        <Link>GYIK</Link>
        <Link className="border border-wedding-light-gray text-wedding-gray p-2 font-semibold rounded-md hover:bg-wedding-brown hover:border-transparent hover:text-white transition duration-300" to="/rsvp">
          Ott leszek!
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
