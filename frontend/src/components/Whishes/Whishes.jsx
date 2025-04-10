import { AnimatePresence, motion } from "framer-motion";
import Wish from "./Wish";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import WhishForm from "./WhishForm";

const Wishes = () => {
  const [wishesData, setWishesData] = useState([]);
  const [dragConstraint, setDragConstraint] = useState(0);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [isModalOpen,setIsModalOpen] = useState(false);
  
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const openModal = ()=>{
    setIsModalOpen(true)
  }

  const fetchWishes = async () => {
    try {
      const response = await axios.get(`${API_URL}/whish/all`);
      setWishesData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWishes();
  }, []);


  // Calculate and update drag constraints
  useEffect(() => {
    const updateConstraints = () => {
      if (containerRef.current && contentRef.current && wishesData.length > 0) {
        const containerWidth = containerRef.current.clientWidth;
        const contentWidth = contentRef.current.scrollWidth;
        const maxDrag = contentWidth - containerWidth;
        
        setDragConstraint(maxDrag > 0 ? -maxDrag : 0);
      }
    };

    // Update initially
    updateConstraints();
    
    // Update on window resize
    window.addEventListener('resize', updateConstraints);
    
    // Cleanup
    return () => window.removeEventListener('resize', updateConstraints);
  }, [wishesData]);

  return (
    <div className="bg-gray-200 py-10 flex flex-col items-center w-full justify-center">
      <div className="flex w-full items-center justify-center py-20 ">
        <button
          className="text-2xl text-wedding-brown me-4 cursor-pointer hover:opacity-80"
          aria-label="Scroll left"
        >
          <FaAngleLeft />
        </button>
      
        <div
          ref={containerRef}
          className="relative w-full max-w-[1200px] z-10 overflow-hidden"
        >
          {wishesData <= 0 && <p className="text-center text-wedding-light-gray">Még nincsenek kívánságok legyél az első aki ír eggyet!</p>}
          {wishesData.length > 0 &&  <motion.div
            ref={contentRef}
            className={`flex space-x-6 cursor-grab ${wishesData.length <= 2 ? "justify-center" : ""}`}
            drag="x"
            dragConstraints={{ right: 0, left: dragConstraint }}
            dragElastic={0.1}
            whileTap={{ cursor: "grabbing" }}
            key={dragConstraint} // Force re-render when constraints change
          >
            {wishesData.map((wish) => (
              <Wish
                key={wish.id}
                icon={wish.iconType}
                text={wish.message}
                author={wish.author}
              />
            ))}
          </motion.div>}
      
        </div>
      
        <button
          className="text-2xl text-wedding-brown ms-4 cursor-pointer hover:opacity-80"
          aria-label="Scroll right"
        >
          <FaAngleRight />
        </button>
      
      </div>
      <button onClick={openModal} className="py-2 px-3 cursor-pointer rounded-md bg-wedding-brown text-white font-bold">Kívánság küldése</button>

      <AnimatePresence>
      {isModalOpen && 
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      className="fixed inset-0 z-50 flex items-center justify-center">
        <div onClick={()=>{setIsModalOpen(false)}} className="absolute h-full w-full bg-black/70"></div>
        <motion.div
        initial={{y: -100, opacity: 0}}
        animate={{opacity: 1, y: 0}}
        exit={{y: -100, opacity: 0}}
        className="z-10 bg-white max-w-[500px] w-[80%] md:w-full h-[500px] rounded-md shadow-2xl">
          <WhishForm/>
        </motion.div>
      </motion.div>}
      </AnimatePresence>
    </div>
  );
};

export default Wishes;