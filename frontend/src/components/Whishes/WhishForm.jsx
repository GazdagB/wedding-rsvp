import { FaHeart } from "react-icons/fa";
import { GiClover } from "react-icons/gi";
import { FaBaby } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { FaHouse } from "react-icons/fa6";
import { AnimatePresence, motion } from "motion/react";
import { BiSolidDownArrow } from "react-icons/bi";
import Swal from 'sweetalert2'

import { useState } from "react";

const WhishForm = ({setIsModalOpen}) => {
  const [selectedIcon, setSelectedIcon] = useState("heart");
  const [isIconsOpen, setIsIconsOpen] = useState(false);

  function handleSubmit(e){
    e.preventDefault(); 

    setIsModalOpen(false);

    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
    });
  }

  return (
    <div className="py-10">
      <form className="flex flex-col items-center" onSubmit={(e)=>{handleSubmit(e)}} action="">
        <div>
          <label htmlFor="">Családnév</label>
          <input className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-wedding-brown" type="text" autoComplete="family-name" />
        </div>

        <div>
          <label htmlFor="">Jelszó</label>
          <input className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-wedding-brown" type="password" />
        </div>

        <div className="flex flex-col gap-3 items-center justify-center mt-5">
          <div className="bg-gray-200 w-20 h-20 rounded-full flex items-center justify-center text-wedding-brown text-2xl">
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

        <textarea className="block resize-none my-5 w-[80%] h-30 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-wedding-brown"  type="text" placeholder="Írd le a kívánsáogd..." />

        <input   className="py-2 px-3 cursor-pointer rounded-md bg-wedding-brown text-white font-bold" type="submit" value="Beküldés" />
      </form>
    </div>
  );
};

export default WhishForm;
