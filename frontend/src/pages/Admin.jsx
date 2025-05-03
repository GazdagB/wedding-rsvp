import Countdown from "../components/Countdown"
import { ImSpoonKnife } from "react-icons/im";
import { FaChild } from "react-icons/fa";
import { LuBaby } from "react-icons/lu";
import { FaMoneyBillWave } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import {AnimatePresence, motion} from "framer-motion"

//Utils
import {calcFoodPrice} from "../utils/stringUtils"

import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useEffect } from "react";
import axios from "axios";
import ClipLoader from 'react-spinners/ClipLoader'



const Admin = () => {

  const [guestNumbers, setGuestNumbers] = useState({})
  const [numbersIsLoading,setNumbersIsLoading] = useState(true); 
  const [foodPrice,setFoodprice] = useState(0); 

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

  useEffect(()=>{
    const  fetchData = async ()=>{
      try {
        const response = await axios.get(`${API_URL}/rsvp/counts`);
        setGuestNumbers(response.data);
        setNumbersIsLoading(false);

    } catch (error) {
      console.error('Error fetching data with axios:', error)
      setNumbersIsLoading(false);
    }
    }

    fetchData()
    
  },[])

  useEffect(() => {
    if (Object.keys(guestNumbers).length > 0) {
      const price = calcFoodPrice(guestNumbers);
      setFoodprice(price);
    }    
  }, [guestNumbers])


  
  function formatPrice(price) {
    return price.toLocaleString("hu-HU") + " Ft";
}

  return (
    <AnimatePresence>

   
    <motion.div
    initial={{x: "-100%"}}
    animate={{x: 0}}
    exit={{y: "100%"}}
    className="">
      <div className="w-full pt-10 md:pt-50 flex flex-col  items-center justify-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-20 text-wedding-brown">Esküvő adatok áttekintés</h1>

          <div className="flex flex-col items-center mb-10">
              <div className="bg-wedding-champagne mb-3 flex items-center justify-center gap-3 text-wedding-brown-darker p-5 w-40 text-xl font-semibold rounded-md text-center" ><FaUsers />

              {numbersIsLoading ? <ClipLoader  color="#52493D" loading={numbersIsLoading}/> :  guestNumbers.totalAttendees || "-"}</div>
              <p className="font-semibold text-xl md:text-2xl">Násznép</p>
            </div>
          
          <div className="flex flex-col md:flex-row gap-10 mb-20">
            <div className="flex flex-col items-center">
              <div className="bg-wedding-champagne mb-3 flex items-center justify-center gap-3 text-wedding-brown-darker p-5 w-40 text-xl font-semibold rounded-md text-center" ><FaUser />
              {numbersIsLoading ? <ClipLoader  color="#52493D" loading={numbersIsLoading}/> :  guestNumbers.totalAdults || "-"}</div>
              <p className="font-semibold text-xl md:text-2xl">Felnőtt</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-wedding-champagne flex items-center justify-center text-wedding-brown-darker mb-3 gap-3 p-5 w-40 text-xl font-semibold rounded-md text-center" ><FaChild />
              {numbersIsLoading ? <ClipLoader  color="#52493D" loading={numbersIsLoading}/> :  guestNumbers.totalChildren5to10 || "-"}</div>
              <p className="font-semibold text-xl md:text-2xl">Gyerek</p>
              <p className="text-wedding-light-gray">5 - 10 év között</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-wedding-champagne mb-3 flex items-center justify-center gap-3 text-wedding-brown-darker p-5 w-40 text-xl font-semibold rounded-md text-center" ><LuBaby />
              {numbersIsLoading ? <ClipLoader  color="#52493D" loading={numbersIsLoading}/> :  guestNumbers.totalChildrenUnder5 || "-"}</div>
              <p className="font-semibold text-xl md:text-2xl">Gyerek</p>
              <p className="text-wedding-light-gray">5 év alatt</p>
            </div>
          </div>


          <div className="flex flex-col items-center mb-10">
            <div className="bg-wedding-champagne p-5 w-40 text-xl font-semibold mb-3 rounded-md text-wedding-brown-darker text-center">69/130</div>
            <p className="text-xl md:text-2xl">Vissza jelzettek száma</p>
          </div>

          <div className="flex flex-col items-center mb-10">
            <div className="bg-wedding-champagne text-wedding-brown-darker mb-3 flex gap-5 items-center p-5 px-10 text-xl font-semibold rounded-md text-center"><ImSpoonKnife />
            {formatPrice(foodPrice)}</div>
            <p className="text-xl md:text-2xl">Becsült étel költség</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-wedding-champagne mb-3 text-wedding-brown-darker flex gap-5 items-center p-5 px-10 text-xl font-semibold rounded-md text-center"><FaMoneyBillWave  />
            5.356.000Ft</div>
            <p className="text-xl md:text-2xl">Becsült össz. költség</p>
          </div>

          <Countdown/>
      </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default Admin