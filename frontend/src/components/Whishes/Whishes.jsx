import { motion } from "framer-motion";
import Wish from "./Wish";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const wishesData = [
  "Wishing you a lifetime of love and happiness!",
  "May your journey together be filled with endless joy!",
  "Congratulations! Wishing you both a beautiful future.",
  "May your love grow stronger each day!",
  "Best wishes for a lifetime of love and laughter.",
];

const Wishes = () => {
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
          {wishesData.map((wish, index) => (
            <Wish key={index} icon={"love"} text={wish} />
          ))}
        </motion.div>
      </div>
      <FaAngleRight  className={"text-2xl text-wedding-brown ms-4"} />
    </div>
  );
};

export default Wishes;
