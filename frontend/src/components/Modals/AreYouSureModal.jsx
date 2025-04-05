import React from "react";
import {capitalizeName} from "../../utils/stringUtils"
import { FaExclamationTriangle } from "react-icons/fa";
import axios from "axios";
import {toast} from 'react-toastify'



const AreYouSureModal = ({guest,setDeleteModalIsOpen}) => {

      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

    function closeModal(){
        setDeleteModalIsOpen(false)
    }

   function calculateGuests(guest){
    let guestNumber = 0; 
    guestNumber += guest.adults;
    guestNumber += guest.childrenUnder5;
    guestNumber += guest.children5to10;

    return guestNumber;
   }
    
   async function handleDeleteGuest(guestId){
    try {
        const response = await axios.delete(`${API_URL }/rsvp/${guestId}`)
        toast.success('Sikeresen törölted a visszajelzést!', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        setDeleteModalIsOpen(false); 
        
    } catch (error) {
        toast.error('Sikertelen törlés!',{
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
        console.error(error.message)
    }
    

   }
    
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div onClick={closeModal} className="absolute inset-0 bg-black/50"></div>

      {/* Modal Content */}
      <div className="bg-white w-[500px] rounded-lg shadow-lg z-50 overflow-auto ">
        <div className="p-6 flex gap-5">
            <div className="text-2xl mt-2 text-red-500">
                <FaExclamationTriangle />
            </div>
            <div>
                <p className="text-xl font-semibold text-gray-900" >Visszajelzés törlése!</p>
                <p className="text-md text-gray-500">Biztos hogy törölni szeretnéd a következő vendége visszajelzését?</p>
                <div className="flex flex-col gap-2 mt-4 ">
                <p className="text-gray-400">ID: {guest?._id}</p>
                <p className="font-semibold text-gray-800">{capitalizeName(guest?.fullName)}</p>
                <p>Család létszáma: {calculateGuests(guest)} fő</p>
                </div>
            
            </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button onClick={()=>{handleDeleteGuest(guest._id)}} className="cursor-pointer inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto">Vendég Törlése</button>
            <button onClick={closeModal} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset cursor-pointer hover:bg-gray-50 sm:mt-0 sm:w-auto">Mégsem</button>
        </div>
      </div>
    </div>
  );
};

export default AreYouSureModal;