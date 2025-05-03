import { Link, NavLink } from 'react-router-dom';
import { FaUser,FaStar,FaGlobeAfrica } from "react-icons/fa";
import { CgLogOut, CgHome } from "react-icons/cg";
import { HiMenuAlt3 } from "react-icons/hi";
import {motion, AnimatePresence} from "motion/react";
import { useState } from "react";


const MobileAdmin = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const handleNavigate = (path) => {
        setMenuIsOpen(false); // Close the menu when navigating
    }

  return (
    <>
    
    <AnimatePresence>
    {
        menuIsOpen && 
            <motion.div className='bg-wedding-champagne h-screen w-screen z-50 fixed top-0 left-0'
            initial={{y: "100%"}}
            animate={{y: 0}}
            exit={{y: "100%"}}
            transition={{duration: 0.3}}
            >

            </motion.div>
        
    }
   </AnimatePresence>

    <div className="fixed flex left-0 bottom-0 w-[100svw] bg-wedding-champagne h-20 z-50">
        <NavLink
         to="/admin" 
         onClick={() => handleNavigate("/admin")}
         end
         className={({ isActive }) => 
             isActive 
             ? `bg-wedding-green text-white bg-wedding-brown-darker rounded-md p-4 flex items-center w-full gap-3 transition-colors  justify-center`
             : `p-4 flex items-center gap-3 hover:bg-wedding-green/20 transition-colors  justify-center w-full`}
        >
           <CgHome></CgHome>
        </NavLink>

        <NavLink
        onClick={() => handleNavigate("/admin/guests")}
         to="/admin/guests" 
         className={({ isActive }) => 
             isActive 
             ? `bg-wedding-green text-white bg-wedding-brown-darker rounded-md p-4 flex items-center w-full gap-3 transition-colors  justify-center`
             : `p-4 flex items-center gap-3 hover:bg-wedding-green/20 transition-colors  justify-center w-full`}
        >
           <CgLogOut></CgLogOut>
        </NavLink>

        <NavLink
        onClick={() => handleNavigate("/admin/names")}
         to="/admin/names" 
         className={({ isActive }) => 
             isActive 
             ? `bg-wedding-green text-white bg-wedding-brown-darker rounded-md p-4 flex items-center gap-3 w-full transition-colors  justify-center`
             : `p-4 flex items-center gap-3 hover:bg-wedding-green/20 transition-colors  justify-center w-full`}
        >
           <FaUser></FaUser>
        </NavLink>

        <NavLink
        onClick={() => handleNavigate("/admin/whishes")}
         to="/admin/whishes" 
         className={({ isActive }) => 
             isActive 
             ? `bg-wedding-green text-white bg-wedding-brown-darker rounded-md p-4 flex items-center w-full gap-3 transition-colors  justify-center`
             : `p-4 flex items-center gap-3 hover:bg-wedding-green/20 transition-colors  justify-center w-full`}
        >
           <FaStar></FaStar>
        </NavLink>

        <div onClick={()=>{setMenuIsOpen(prev => !prev)}} className='flex items-center justify-center w-full'>
            <HiMenuAlt3 className="text-3xl text-wedding-brown-darker" />
        </div>
    </div>
    </>
  )
}

export default MobileAdmin