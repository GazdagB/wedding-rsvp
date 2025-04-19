import React from 'react'
import { FaHeart } from "react-icons/fa";
import { GiClover } from "react-icons/gi";
import { FaBaby } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { FaHouse } from "react-icons/fa6";

const WhishAdmin = ({ text, icon,author="Gazdag Balázs",}) => {
    if (!text) return null;

     let selectedIcon = <FaHeart />; 
    
        switch (icon) {
            case "heart":
                selectedIcon = <FaHeart/>
                break;
            case "luck": 
                selectedIcon = <GiClover />
                break;
            case "baby": 
                selectedIcon = <FaBaby />
                break; 
            case "money": 
                selectedIcon = <FaMoneyBill />
                break;
            case "plane": 
                selectedIcon = <IoAirplane />
                break;
            case "house": 
                selectedIcon = <FaHouse />
                break; 
            default:
                break;
        }
  return (
    <div  className={`bg-white text-black shadow-lg rounded-xl min-h-[150px] px-6 py-4 items-center min-w-[200px] md:min-w-[300px] flex gap-5 relative`}>
    {/* Icon */}
    <div className="text-wedding-brown text-xl bg-gray-200 h-13 w-13 rounded-full flex-shrink-0 flex items-center justify-center">
        {selectedIcon}
    </div>
        <p className="py-10">&ldquo;{text}&rdquo;</p>
         <p className="absolute bottom-5 right-5 text-gray-400">- {author}</p>
  </div>
  )
}

export default WhishAdmin