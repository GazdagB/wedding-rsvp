import React from 'react'
import { useEffect, useState } from 'react';
import { capitalizeName } from '../utils/stringUtils';
import axios from 'axios';

const Message = () => {

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
    <div>
        <h2>Üzenetek</h2>
        <div>
            {guest.filter((g) => g.message).map((g, id) => (
                <div key={id} className="mb-4 p-4 border rounded-md">
                    <h3 className="font-bold">{g.name}</h3>
                    <p>{g.message}</p>
                    <p className="text-sm text-gray-500">Visszajelzés: {g.accept ? "✅ Igen" : "❌ Nem"}</p>
                    <p>{capitalizeName(g.familyName)}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Message