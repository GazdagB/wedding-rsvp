import { motion } from "framer-motion";
import Wish from "./Wish";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios"

const Wishes = () => {

  const [wishesData,setWishesData] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

  const fetchWhises = async ()=>{
    try {
      const response = await axios.get(`${API_URL}/whish/all`)
      setWishesData(response.data.data)
      
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(()=>{
   fetchWhises()
  },[])

  return (
    <div className="realtive flex items-center justify-center py-20 bg-gray-200" >
        <FaAngleLeft className={"text-2xl text-wedding-brown me-4 "}/>
      <div className="relative w-full max-w-[1200px]  z-10 overflow-hidden">
        
        
      
        {/* Gradient Mask */}
        <div className="absolute inset-0 pointer-events-none z-10" />
        {/* Draggable Container */}
        <motion.div
          className="flex space-x-6 cursor-grab"
          drag="x"
          dragConstraints={{ right: 200, left: -(wishesData.length * 200) }}
        >
          {wishesData.map((whish) => (
            <Wish key={whish.id} icon={whish.iconType} text={whish.message} author={whish.author} />
          ))}
        </motion.div>
      </div>
      <FaAngleRight  className={"text-2xl text-wedding-brown ms-4"} />
    </div>
  );
};

export default Wishes;
