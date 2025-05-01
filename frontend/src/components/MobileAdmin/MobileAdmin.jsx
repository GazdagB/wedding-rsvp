import { Link, NavLink } from 'react-router-dom';
import { FaUser,FaStar,FaGlobeAfrica } from "react-icons/fa";
import { CgLogOut, CgHome } from "react-icons/cg";
import { HiMenuAlt3 } from "react-icons/hi";


const MobileAdmin = () => {
  return (
    <div className="fixed flex left-0 bottom-0 w-[100svw] bg-wedding-champagne h-20 z-50">
        <NavLink
         to="/admin" 
         end
         className={({ isActive }) => 
             isActive 
             ? `bg-wedding-green text-white bg-wedding-brown-darker rounded-md p-4 flex items-center w-full gap-3 transition-colors  justify-center`
             : `p-4 flex items-center gap-3 hover:bg-wedding-green/20 transition-colors  justify-center w-full`}
        >
           <CgHome></CgHome>
        </NavLink>

        <NavLink
         to="/admin/guests" 
         className={({ isActive }) => 
             isActive 
             ? `bg-wedding-green text-white bg-wedding-brown-darker rounded-md p-4 flex items-center w-full gap-3 transition-colors  justify-center`
             : `p-4 flex items-center gap-3 hover:bg-wedding-green/20 transition-colors  justify-center w-full`}
        >
           <CgLogOut></CgLogOut>
        </NavLink>

        <NavLink
         to="/admin/names" 
         className={({ isActive }) => 
             isActive 
             ? `bg-wedding-green text-white bg-wedding-brown-darker rounded-md p-4 flex items-center gap-3 w-full transition-colors  justify-center`
             : `p-4 flex items-center gap-3 hover:bg-wedding-green/20 transition-colors  justify-center w-full`}
        >
           <FaUser></FaUser>
        </NavLink>

        <NavLink
         to="/admin/whishes" 
         className={({ isActive }) => 
             isActive 
             ? `bg-wedding-green text-white bg-wedding-brown-darker rounded-md p-4 flex items-center w-full gap-3 transition-colors  justify-center`
             : `p-4 flex items-center gap-3 hover:bg-wedding-green/20 transition-colors  justify-center w-full`}
        >
           <FaStar></FaStar>
        </NavLink>

        <div className='flex items-center justify-center w-full'>
            <HiMenuAlt3 className="text-3xl text-wedding-brown-darker" />
        </div>
    </div>
  )
}

export default MobileAdmin