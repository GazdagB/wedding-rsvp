import { useEffect, useState } from 'react'
import {motion} from "motion/react"
import { FaHeart } from "react-icons/fa";
import { GiClover } from "react-icons/gi";
import { FaBaby } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { FaHouse } from "react-icons/fa6";
import { AnimatePresence } from "motion/react";
import { BiSolidDownArrow } from "react-icons/bi";
import axios from "axios"
import {toast} from "react-toastify"


const EditWhishModal = ({setEditModalOpen, whishData}) => {

  const [isIconsOpen, setIsIconsOpen] = useState(false);
  const [selectedIcon,setSelectedIcon] = useState("heart"); 
  const [isDeleteOpen, setDeleteOpen] = useState(false); 
  const [whish, setWhish] = useState({
    author: "",
    message: "",
  });

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

    async function handleSubmit(e){
      e.preventDefault(); 

      const dataToSubmit = {...whish, iconType: selectedIcon};
      
      try {
        const result = await axios.put(`${API_URL}/whish/${dataToSubmit._id}`, dataToSubmit)

        if(result.status === 200){
          
          toast.success('Sikeresen kívánság módosítás!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

            setEditModalOpen(false); 
           
        }
      } catch (error) {
        console.error(error); 
        toast.warn(` Valami hiba történt! (${error.message})`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    }

    function closeModal(){
        setEditModalOpen(false)
    }

    async function handleDelete(){
      
    }

    function closeDelete(){
      setDeleteOpen(false);
    }

    function handleDeleteOpen(e){
      e.preventDefault(); 

      setDeleteOpen(prev => !prev);
    }

    useEffect(()=>{
        setWhish(whishData); 
        setSelectedIcon(whishData.iconType)
    }, [whishData])
   

  return (
    <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.3 }}
    
    >
        <div onClick={closeModal} className="absolute inset-0 bg-black/50"></div>

        <div className="bg-white w-[500px] rounded-lg shadow-lg z-50 overflow-auto p-6 scrollbar-hidden">
            <h2 className="font-bold text-2xl">Kívánságok szerketsztése</h2> 
            <form onSubmit={(e)=>{handleSubmit(e)}} action="" >
            <div className="flex flex-col gap-3 items-center justify-center mt-5">
          <div className="bg-gray-200 w-20 h-20 rounded-full flex items-center justify-center text-wedding-brown text-2xl">
            {/* TODO:  */}
            {selectedIcon === "heart" && <FaHeart />}
            {selectedIcon === "luck" && <GiClover />}
            {selectedIcon === "baby" && <FaBaby />}
            {selectedIcon === "money" && <FaMoneyBill />}
            {selectedIcon === "plane" && <IoAirplane />}
            {selectedIcon === "house" && <FaHouse />}
          </div>
          <label
            className="cursor-pointer flex gap-3 items-center justify-center"
            onClick={() => {
              setIsIconsOpen((prev) => !prev);
            }}
            htmlFor=""
          >
            Válassz ikont{" "}
            <motion.div
              initial={{ rotate: 0 }}
              animate={isIconsOpen ? { rotate: 180 } : { rotate: 0 }}
            >
              <BiSolidDownArrow className="text-wedding-brown" />
            </motion.div>
          </label>
          <AnimatePresence>
            {isIconsOpen && (
              <motion.div
                initial={{ y: -20, opacity: 0, height: 0 }}
                animate={{ y: 0, opacity: 1, height: "auto" }}
                exit={{ y: -20, opacity: 0, height: 0 }}
                className="grid grid-cols-3 gap-3 w-45 mt-5"
              >
                <div
                  onClick={() => {
                    setSelectedIcon("heart");
                  }}
                  className={`${
                    selectedIcon === "heart"
                      ? "bg-gray-400 text-white"
                      : "bg-gray-200"
                  } cursor-pointer  w-12 h-12 rounded-full flex items-center justify-center text-wedding-brown text-lg`}
                >
                  {<FaHeart />}
                </div>
                <div
                  onClick={() => {
                    setSelectedIcon("luck");
                  }}
                  className={`${
                    selectedIcon === "luck"
                      ? "bg-gray-400 text-white"
                      : "bg-gray-200"
                  } cursor-pointer  w-12 h-12 rounded-full flex items-center justify-center text-wedding-brown text-lg`}
                >
                  {<GiClover />}
                </div>
                <div
                  onClick={() => {
                    setSelectedIcon("baby");
                  }}
                  className={`${
                    selectedIcon === "baby"
                      ? "bg-gray-400 text-white"
                      : "bg-gray-200"
                  } cursor-pointer  w-12 h-12 rounded-full flex items-center justify-center text-wedding-brown text-lg`}
                >
                  {<FaBaby />}
                </div>
                <div
                  onClick={() => {
                    setSelectedIcon("money");
                  }}
                  className={`${
                    selectedIcon === "money"
                      ? "bg-gray-400 text-white"
                      : "bg-gray-200"
                  } cursor-pointer  w-12 h-12 rounded-full flex items-center justify-center text-wedding-brown text-lg`}
                >
                  {<FaMoneyBill />}
                </div>
                <div
                  onClick={() => {
                    setSelectedIcon("plane");
                  }}
                  className={`${
                    selectedIcon === "plane"
                      ? "bg-gray-400 text-white"
                      : "bg-gray-200"
                  } cursor-pointer  w-12 h-12 rounded-full flex items-center justify-center text-wedding-brown text-lg`}
                >
                  {<IoAirplane />}
                </div>
                <div
                  onClick={() => {
                    setSelectedIcon("house");
                  }}
                  className={`${
                    selectedIcon === "house"
                      ? "bg-gray-400 text-white"
                      : "bg-gray-200"
                  } cursor-pointer  w-12 h-12 rounded-full flex items-center justify-center text-wedding-brown text-lg`}
                >
                  {<FaHouse />}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className='flex flex-col gap-4'>
          <div>
            <label className='font-bold' htmlFor="">Szerző</label>
            <input placeholder="Add meg a neved" className="block mt-3 w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-wedding-brown" type="text"
              value={whish.author}
              onChange={(e) => {
                setWhish((prev) => ({
                  ...prev,
                  author: e.target.value,
                }));
              }}
              />
          </div>
          <div>
            <label className='font-bold' htmlFor="">Kívánság</label>
            <textarea className="block resize-none mt-3 w-full h-30 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-wedding-brown"  type="text" placeholder="Írd le a kívánsáogd..."
              value={whish.message}
              onChange={(e) => {
                setWhish((prev) => ({
                  ...prev,
                  message: e.target.value,
                }));
              }}
              />
          </div>
        </div>
          
          <div className='flex items-center justify-center mt-6'>
            <button type='submit' className="py-2 px-3 cursor-pointer rounded-md bg-wedding-brown text-white font-bold">Beküldés</button>
            <button onClick={(e)=>{handleDeleteOpen(e)}} className='text-gray-500 ml-4 cursor-pointer'>Kivánság törlése</button>
          </div>
            </form>
            
            <AnimatePresence>
            {isDeleteOpen && 
            <motion.div
            initial={{ y: -20, opacity: 0, height: 0 }}
            animate={{ y: 0, opacity: 1, height: "auto" }}
            exit={{ y: -20, opacity: 0, height: 0 }}
              className='mt-5 flex items-center justify-center'
            >
                <div className='gap-4 flex flex-col justify-center items-center'>
                  <p className='text-center text-gray-500'>A törlés gombra kattintva törölni fogod a kiválasztott kivánságot biztos vagy benne?</p>
                  <div className='flex items-center jusitfy-center gap-3'>
                    <button onClick={handleDelete} className="cursor-pointer inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto">Törlés</button>
                    <button onClick={closeDelete} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset cursor-pointer hover:bg-gray-50 sm:mt-0 sm:w-auto">Mégsem</button>
                  </div>
                </div>
            </motion.div>
            }
            </AnimatePresence>
           

        </div>
    </motion.div>
  )
}

export default EditWhishModal