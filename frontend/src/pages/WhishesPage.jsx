import axios from 'axios'
import { useEffect, useState } from 'react'
import WhishAdmin from '../components/Whishes/WhishAdmin';
import EditWhishModal from '../components/Modals/EditWhishModal';


const Whishes = () => {

    const [isEditModalOpen, setEditModalOpen] = useState(false); 
    const [whishes, setWhishes] = useState([]); 
    const [selectedWhish,setSelectedWhish] = useState(0); 

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_URL}/whish/all`);
                setWhishes(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };

        if (!isEditModalOpen) {
            fetchData();
        }
    }, [isEditModalOpen, API_URL]);
  return (
    <div className='pt-10 md:ps-15 w-full  flex items-start justify-center'>
        <div className='grid pb-20 xl:grid-cols-3 grid-cols-1 lg:grid-cols-2 gap-3 max-w-[1200px]'>

            {isEditModalOpen && <EditWhishModal whishData={whishes[selectedWhish]} setEditModalOpen={setEditModalOpen}></EditWhishModal>}

            {whishes.map((whish,index)=>{
                return (
                    <div onClick={()=>{setSelectedWhish(index)}} key={index}>
                        <WhishAdmin setEditModalOpen={setEditModalOpen} author={whish.author} icon={whish.iconType} key={index} text={whish.message} ></WhishAdmin>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Whishes