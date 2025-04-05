import axios from "axios"
import { useEffect,useState } from "react"
import FamilyAccordion from "../components/Names/FamilyAccordion";



const Names = () => {

    const [guest, setGuest] = useState([]);

      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response = await axios.get(`${API_URL}/rsvp/all`);
                setGuest(response.data)
            } catch (error) {
                console.log(error);
            }
            
        }

        fetchData();
    }, [])

  return (
    <div className="w-full h-full ml-[80px]">
        <div className="flex flex-col items-center justify-center">
            <h2 className="font-bold text-2xl mb-5 mt-20">Vendég nevek</h2>
            {guest.length === 0 ? "Még nincsenek visszaigazolt vendégek... ☹️" : ""}
            {guest.map((guest,id )=>{
                return <FamilyAccordion key={id} guest={guest}/>
            })}
            
        </div>
    </div>
  )
}

export default Names