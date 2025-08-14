import { useAuth } from '../../auth/AuthContext'; 
import { CgLogOut, CgHome } from "react-icons/cg";
import { Link, NavLink } from 'react-router-dom';
import { FaUser,FaStar,FaGlobeAfrica } from "react-icons/fa";
import {motion} from "motion/react"; 
import { BiSolidMessageSquareDetail } from "react-icons/bi";





const Sidebar = ({isOpen}) => {
  const {logout} = useAuth(); 

  

  return (
    <motion.div className={`fixed top-0 left-0 bg-wedding-champagne h-screen ${isOpen ? "w-[280px]" : ""} py-30 flex flex-col items-center justify-between left-0 bottom-0`}
    initial={{width: 100}}
    animate={isOpen ? {width: 280}: {width: 70}}
    >
      <ul className='flex flex-col w-full mt-8'>
        <NavLink 
          to="/admin" 
          end
          className={({ isActive }) => 
            isActive 
              ? `bg-wedding-green text-white bg-wedding-brown-darker rounded-md p-4 flex items-center gap-3 transition-colors  ${isOpen ? "" : "justify-center"}`
              : `p-4 flex items-center gap-3 hover:bg-wedding-green/20 transition-colors  ${isOpen ? "" : "justify-center"}`
          }
          
        >
          <CgHome size={20} />
          <span className={`${isOpen ? "" : "hidden"}`}>Áttekintés</span>
        </NavLink>
        
        <NavLink 
          to="/admin/guests" 
          className={({ isActive }) => 
            isActive 
              ? `bg-wedding-green text-white bg-wedding-brown-darker rounded-md p-4 flex items-center gap-3 transition-colors  ${isOpen ? "" : "justify-center"}` 
              : `p-4 flex items-center gap-3 hover:bg-wedding-green/20 transition-colors  ${isOpen ? "" : "justify-center"}`
          }
        >
          <CgLogOut size={20} />
          <motion.span 
          initial={{opacity: 0, width: 0}}
          animate={{opacity: 1, width: "auto"}}
          className={`${isOpen ? "" : "hidden"}`}
          >Vendégek</motion.span>
        </NavLink>

        <NavLink  className={({ isActive }) => 
            isActive 
              ? `bg-wedding-green text-white bg-wedding-brown-darker rounded-md p-4 flex items-center gap-3 transition-colors  ${isOpen ? "" : "justify-center"}` 
              : `p-4 flex items-center gap-3 hover:bg-wedding-green/20 transition-colors  ${isOpen ? "" : "justify-center"}`
          } to="/admin/names">
        <FaUser />
        <motion.span
        initial={{opacity: 0, width: 0}}
        animate={{opacity: 1, width: "auto"}}
        className={`${isOpen ? "" : "hidden"}`}
        >Nevek</motion.span>
        </NavLink>

        <NavLink  className={({ isActive }) => 
            isActive 
              ? `bg-wedding-green text-white bg-wedding-brown-darker rounded-md p-4 flex items-center gap-3 transition-colors ${isOpen ? "" : "justify-center"}`
              : `p-4 flex items-center gap-3 hover:bg-wedding-green/20 transition-colors  ${isOpen ? "" : "justify-center"}`
          } to="/admin/whishes">
        <FaStar />
        <motion.span
        initial={{opacity: 0, width: 0}}
        animate={{opacity: 1, width: "auto"}}
        className={`${isOpen ? "" : "hidden"}`}
        >Kívánságok</motion.span>
        </NavLink>

        <NavLink  className={({ isActive }) => 
            isActive 
              ? `bg-wedding-green text-white bg-wedding-brown-darker rounded-md p-4 flex items-center gap-3 transition-colors ${isOpen ? "" : "justify-center"}`
              : `p-4 flex items-center gap-3 hover:bg-wedding-green/20 transition-colors  ${isOpen ? "" : "justify-center"}`
          } to="/admin/messages">
        <BiSolidMessageSquareDetail />
        <motion.span
        initial={{opacity: 0, width: 0}}
        animate={{opacity: 1, width: "auto"}}
        className={`${isOpen ? "" : "hidden"}`}
        >Messages</motion.span>
        </NavLink>
      </ul>

      <div>
        <div
          onClick={logout}
          className='cursor-pointer mb-8 bg-wedding-brown-darker text-white p-3 rounded-md hover:bg-wedding-gray transition-colors flex gap-2'
        >
          <CgLogOut size={20} />
          <motion.span
          initial={{opacity: 0, width: 0}}
          animate={{opacity: 1, width: "auto"}}
          className={`${isOpen ? "": "hidden"}`}
          >Kijelentkezés</motion.span>
        </div>

        <Link to={'/'}>
        <div className={`flex gap-2 items-center text-wedding-brown-darker cursor-pointer ${isOpen ? "":"justify-center"}`}>
        <FaGlobeAfrica />
          <motion.p
          initial={{opacity: 0, width: 0}}
          animate={{opacity: 1, width: "auto"}}
          className={`${isOpen ? "": "hidden"}`}
          >Vissza az oldalra</motion.p>
        </div>
        </Link>
        

      </div>
    </motion.div>
  )
}

export default Sidebar