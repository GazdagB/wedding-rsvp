import { FaHeart } from "react-icons/fa";
import { GiClover } from "react-icons/gi";
import { FaBaby } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { FaHouse } from "react-icons/fa6";
import {AnimatePresence, motion} from "motion/react";
import { BiSolidDownArrow } from "react-icons/bi";



import { useState } from "react";

const WhishForm = () => {

  const [selectedIcon,setSelectedIcon] = useState("heart")
  const [isIconsOpen,setIsIconsOpen] = useState(false); 
    
  return (
    <div>
        <form action="">
          <div>
            <label htmlFor="">Családnév</label>
            <input type="text" />
          </div>

          <div>
            <label htmlFor="">Jelszó</label>
            <input type="password" />
          </div>

         

          

          <div className="flex flex-col gap-3 items-center justify-center">
          <div className="bg-gray-200 w-20 h-20 rounded-full flex items-center justify-center text-wedding-brown text-2xl">
            {selectedIcon === "heart" && <FaHeart/>}
            {selectedIcon === "luck" && <GiClover/>}
            {selectedIcon === "baby" && <FaBaby/>}
            {selectedIcon === "money" && <FaMoneyBill/>}
            {selectedIcon === "plane" && <IoAirplane/>}
            {selectedIcon === "house" && <FaHouse/>}
          </div>
          <label className="cursor-pointer flex gap-3 items-center justify-center" onClick={()=>{setIsIconsOpen(prev => !prev)}} htmlFor="">Válassz ikont <motion.div
              initial={{rotate: 0}}
              animate={isIconsOpen ? {rotate: 180}: {rotate: 0}}
          >
            <BiSolidDownArrow className="text-wedding-brown" />
          </motion.div>
          </label>
            <AnimatePresence>
              {isIconsOpen && (<motion.div
              initial={{y: -20, opacity: 0, height: 0}}
              animate={{y: 0, opacity: 1, height: "auto"}}
              className="grid grid-cols-3 gap-3  w-45 mt-5">
              <div onClick={()=>{setSelectedIcon("heart")}} className={`${selectedIcon === "heart" ? "bg-gray-400 text-white" : "bg-gray-200"} cursor-pointer  w-12 h-12 rounded-full flex items-center justify-center text-wedding-brown text-lg`}>
                {<FaHeart/>}
              </div>
              <div
              onClick={()=>{setSelectedIcon("luck")}}
              className={`${selectedIcon === "luck" ? "bg-gray-400 text-white" : "bg-gray-200"} cursor-pointer  w-12 h-12 rounded-full flex items-center justify-center text-wedding-brown text-lg`}>
                {<GiClover />
                }
              </div>
              <div
              onClick={()=>{setSelectedIcon("baby")}}
              className={`${selectedIcon === "baby" ? "bg-gray-400 text-white" : "bg-gray-200"} cursor-pointer  w-12 h-12 rounded-full flex items-center justify-center text-wedding-brown text-lg`}>
                {<FaBaby />
                }
              </div>
              <div
              onClick={()=>{setSelectedIcon("money")}}
              className={`${selectedIcon === "money" ? "bg-gray-400 text-white" : "bg-gray-200"} cursor-pointer  w-12 h-12 rounded-full flex items-center justify-center text-wedding-brown text-lg`}>
                {<FaMoneyBill />
                }
              </div>
              <div
              onClick={()=>{setSelectedIcon("plane")}}
              className={`${selectedIcon === "plane" ? "bg-gray-400 text-white" : "bg-gray-200"} cursor-pointer  w-12 h-12 rounded-full flex items-center justify-center text-wedding-brown text-lg`}>
                {<IoAirplane /> }
              </div>
              <div
              onClick={()=>{setSelectedIcon("house")}}
              className={`${selectedIcon === "house" ? "bg-gray-400 text-white" : "bg-gray-200"} cursor-pointer  w-12 h-12 rounded-full flex items-center justify-center text-wedding-brown text-lg`}>
                {<FaHouse /> }
              </div>
              </motion.div>)}
            </AnimatePresence>
          </div>

          <input type="text" placeholder="kakiii" />
        </form>
    </div>
  )
}

export default WhishForm