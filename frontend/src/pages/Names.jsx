import axios from "axios"
import { useEffect,useState } from "react"
import FamilyAccordion from "../components/Names/FamilyAccordion";



const Names = () => {

    const [guest, setGuest] = useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response = await axios.get("http://localhost:5000/rsvp/all");
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
            <h2 className="font-bold">Vendég nevek</h2>
            {guest.map((guest,id )=>{
                return <FamilyAccordion key={id} guest={guest}/>
            })}
            
        </div>
    </div>
  )
}

export default Names