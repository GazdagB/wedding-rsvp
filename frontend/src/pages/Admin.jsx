import Countdown from "../components/Countdown"
import Sidebar from "../components/Sidebar/Sidebar"
import { ImSpoonKnife } from "react-icons/im";
import { FaChild } from "react-icons/fa";
import { LuBaby } from "react-icons/lu";
import { FaMoneyBillWave } from "react-icons/fa6";


import { FaUser } from "react-icons/fa";



const Admin = () => {
  return (
    <div className="">
      <div className="w-full pt-50 flex flex-col  items-center justify-center">
          <h1 className="text-3xl font-bold mb-20 text-wedding-brown">Esküvő adatok áttekintés</h1>
          <div className="flex gap-10 mb-20">
            <div className="flex flex-col items-center">
              <div className="bg-wedding-champagne mb-3 flex items-center justify-center gap-3 text-wedding-brown-darker p-5 w-40 text-3xl font-semibold rounded-md text-center" ><FaUser />
              40</div>
              <p className="font-semibold text-2xl">Felnőtt</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-wedding-champagne flex items-center justify-center text-wedding-brown-darker mb-3 gap-3 p-5 w-40 text-3xl font-semibold rounded-md text-center" ><FaChild />
              40</div>
              <p className="font-semibold text-2xl">Gyerek</p>
              <p>5 - 10 év között</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-wedding-champagne mb-3 flex items-center justify-center gap-3 text-wedding-brown-darker p-5 w-40 text-3xl font-semibold rounded-md text-center" ><LuBaby />
              11</div>
              <p className="font-semibold text-2xl">Gyerek</p>
              <p>5 év alatt</p>
            </div>
          </div>


          <div className="flex flex-col items-center mb-10">
            <div className="bg-wedding-champagne p-5 w-40 text-3xl font-semibold mb-3 rounded-md text-wedding-brown-darker text-center">69/130</div>
            <p className="text-2xl">Vissza jelzettek száma</p>
          </div>

          <div className="flex flex-col items-center mb-10">
            <div className="bg-wedding-champagne text-wedding-brown-darker mb-3 flex gap-5 items-center p-5 px-10 text-3xl font-semibold rounded-md text-center"><ImSpoonKnife />
            2.356.000Ft</div>
            <p className="text-2xl">Becsült étel költség</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-wedding-champagne mb-3 text-wedding-brown-darker flex gap-5 items-center p-5 px-10 text-3xl font-semibold rounded-md text-center"><FaMoneyBillWave  />
            5.356.000Ft</div>
            <p className="text-2xl">Becsült össz. költség</p>
          </div>

          <Countdown/>
      </div>
    </div>
  )
}

export default Admin