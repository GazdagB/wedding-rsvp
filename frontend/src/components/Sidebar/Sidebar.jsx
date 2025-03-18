import React from 'react'
import { useAuth } from '../../auth/AuthContext'; 
import { CgLogOut, CgHome } from "react-icons/cg";
import { Link, NavLink } from 'react-router-dom';
import { FaGlobeAfrica } from "react-icons/fa";
import { FaUser } from "react-icons/fa";


const Sidebar = () => {
  const {logout} = useAuth(); 

  return (
    <div className='fixed bg-wedding-champagne h-[100svh] w-[280px] py-30 flex flex-col items-center justify-between'>
      <ul className='flex flex-col w-full mt-8'>
        <NavLink 
          to="/admin" 
          className={({ isActive }) => 
            isActive 
              ? "bg-wedding-green text-white bg-wedding-brown-darker rounded-md p-4 flex items-center gap-3 transition-colors" 
              : "p-4 flex items-center gap-3 hover:bg-wedding-green/20 transition-colors"
          }
          end
        >
          <CgHome size={20} />
          <span>Áttekintés</span>
        </NavLink>
        
        <NavLink 
          to="/admin/guests" 
          className={({ isActive }) => 
            isActive 
              ? "bg-wedding-green text-white bg-wedding-brown-darker rounded-md p-4 flex items-center gap-3 transition-colors" 
              : "p-4 flex items-center gap-3 hover:bg-wedding-green/20 transition-colors"
          }
        >
          <CgLogOut size={20} />
          <span>Vendégek</span>
        </NavLink>

        <NavLink  className={({ isActive }) => 
            isActive 
              ? "bg-wedding-green text-white bg-wedding-brown-darker rounded-md p-4 flex items-center gap-3 transition-colors" 
              : "p-4 flex items-center gap-3 hover:bg-wedding-green/20 transition-colors"
          } to="/admin/names">
        <FaUser />
        Nevek
        </NavLink>
      </ul>

      <div>
        <div
          onClick={logout}
          className='cursor-pointer mb-8 bg-wedding-brown-darker text-white p-3 rounded-md hover:bg-wedding-gray transition-colors flex gap-2'
        >
          <CgLogOut size={20} />
          <span>Kijelentkezés</span>
        </div>

        <Link to={'/'}>
        <div className='flex gap-2 items-center text-wedding-brown-darker cursor-pointer'>
        <FaGlobeAfrica />
          <p>Vissza az oldalra</p>
        </div>
        </Link>
        

      </div>
    </div>
  )
}

export default Sidebar