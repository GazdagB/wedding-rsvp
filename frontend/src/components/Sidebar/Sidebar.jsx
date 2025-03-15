import React from 'react'
import { useAuth } from '../../auth/AuthContext'; 
import { CgLogOut, CgHome } from "react-icons/cg";
import { NavLink } from 'react-router-dom';

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
      </ul>

      <div 
        onClick={logout} 
        className='cursor-pointer mb-8 bg-wedding-brown-darker text-white p-3 rounded-md hover:bg-wedding-gray transition-colors flex gap-2'
      >
        <CgLogOut size={20} />
        <span>Kijelentkezés</span>
      </div>
    </div>
  )
}

export default Sidebar