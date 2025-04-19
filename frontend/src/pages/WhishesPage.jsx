import axios from 'axios'
import { useEffect, useState } from 'react'
import WhishAdmin from '../components/Whishes/WhishAdmin';


const Whishes = () => {

    const [whishes, setWhishes] = useState([]); 

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

    useEffect(()=>{
        const fetchData = async ()=>{
        try {
          
                const response = await axios.get(`${API_URL}/whish/all`); 
                console.log(response.data.data);
                setWhishes(response.data.data); 
            
        } catch (error) {
            console.log(error);
            
        }}

        fetchData(); 
    },[])

  return (
    <div className=' pt-20 ps-15  w-full h-full flex items-start justify-center'>
        <div className='grid xl:grid-cols-3 grid-cols-1 lg:grid-cols-2 gap-3 max-w-[1200px]'>
            {whishes.map((whish,index)=>{
                return <WhishAdmin author={whish.author} icon={whish.iconType} key={index} text={whish.message} ></WhishAdmin>
            })}
        </div>
    </div>
  )
}

export default Whishes