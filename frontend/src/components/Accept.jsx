import { useState } from "react";
import axios from "axios"; 

const Accept = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    accept: true,
    email: "",
    adults: 0,
    children5to10: 0,
    childrenUnder5: 0,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the form from refreshing the page

    // Concatenate first and last names into fullName
  

    console.log("Form Data Submitted: ", formData);

      try{
        const response = await axios.post("http://localhost:5000/rsvp", formData);
        console.log("Response from server:", response.data);
        alert("RSVP submitted successfully!")

        setFormData({
          firstName: "",
          lastName: "",
          accept: true,
          email: "",
          adults: 0,
          children5to10: 0,
          childrenUnder5: 0,
          message: "",
        });
        
      } catch(error){
        console.error("Error submitting RSVP:", error); 
        alert("There was an error submitting your RSVP. Please try again.")
      }
    // Now you can send `submittedData` to your backend (e.g., via an API request)
    // Example: axios.post('/submit', submittedData);

    // Optionally clear the form or handle the response
    // setFormData({ firstName: "", lastName: "", ...otherFields });
  };

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h2 className="dancing text-6xl text-wedding-brown z-10 mb-4">Ott leszel?</h2>
      <p className="text-wedding-light-gray mb-10 text-center text-pretty">
        Kérlek tudasd velünk hogy ott tudsz-e lenni velünk a nagy napunkon!
      </p>
      <form className="md:w-[550px]" onSubmit={handleSubmit}>
        {/* First Name and Last Name */}
        <div className="mb-8 w-full flex flex-col md:block items-center">
          <label htmlFor="name" className="font-bold">Teljes név</label>
          <div className="flex flex-col items-center gap-5 mt-3 w-full">
            {/* First Name */}
            <input
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="bg-gray-300 py-2 px-4 rounded-md w-[80%] md:w-full"
              required
              type="text"
              placeholder="Vezetéknév"
            />
            {/* Last Name */}
            <input
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="bg-gray-300 py-2 px-4 rounded-md w-[80%] md:w-full"
              required
              type="text"
              placeholder="Keresztnév"
            />
          </div>
        </div>

        {/* Accept field */}
        <div className="mb-8 flex flex-col md:block items-center">
          <label htmlFor="accept" className="font-bold">Ott tudsz lenni?</label>
          <div className="flex gap-3 mt-3">
            <input
              required
              className="cursor-pointer"
              type="radio"
              name="accept"
              id="yes"
              checked={formData.accept === true}
              onChange={() => setFormData({ ...formData, accept: true })}
            />
            <label className="cursor-pointer" htmlFor={"yes"}>Elfogadom a meghívást örömmel!</label>
          </div>
          <div className="flex gap-3">
            <input
              required
              className="cursor-pointer"
              type="radio"
              name="accept"
              id="no"
              checked={formData.accept === false}
              onChange={() => setFormData({ ...formData, accept: false })}
            />
            <label className="cursor-pointer" htmlFor={"no"}>Sajnos nem tudok ott lenni!</label>
          </div>
        </div>

        {/* Other fields */}
        <div className="flex w-full flex-col mb-8 items-center">
          <label htmlFor="" className="mb-3 font-bold">E-mail cím</label>
          <input
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-gray-300 py-2 px-4 rounded-md w-[80%] md:w-full"
            type="email"
            placeholder="E-mail"
          />
        </div>

        {/* Adults count */}
        <div className="flex flex-col mb-8 w-full items-center">
          <label htmlFor="" className="font-bold mb-3">Felnőttek száma</label>
          <select
            value={formData.adults}
            onChange={(e) => setFormData({ ...formData, adults: +e.target.value })}
            className="bg-gray-300 md:w-full w-[80%] py-2 px-3 rounded-md "
            name=""
            id=""
          >
            <option value="">Válasz...</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>

        {/* Children count */}
        <div className="flex gap-5 mb-8 w-full flex-col md:flex-row">
          <div className="flex flex-col w-full items-center">
            <label htmlFor="" className="font-bold mb-3">Gyerekek száma (5-10év között) </label>
            <select
              value={formData.children5to10}
              onChange={(e) => setFormData({ ...formData, children5to10: +e.target.value })}
              className="bg-gray-300 py-2 px-3 rounded-md w-[80%] md:w-full"
              name=""
              id=""
            >
              <option value="">Válasz...</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>

          <div className="flex flex-col items-center w-full">
            <label htmlFor="" className="font-bold mb-3">Gyerekek száma (5év alatt) </label>
            <select
              value={formData.childrenUnder5}
              onChange={(e) => setFormData({ ...formData, childrenUnder5: +e.target.value })}
              className="bg-gray-300 py-2 px-3 rounded-md md:w-full w-[80%]"
              name=""
              id=""
            >
              <option value="">Válasz...</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col items-center">
          <div className="mb-8 flex md:block flex-col">
            <label className="font-bold mb-3" htmlFor="">Üzenet a menyasszonynak és a vőlegénynek:</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-gray-300 h-32 p-3 mt-3 w-[80%] md:w-[550px] resize-none rounded-md"
              name="message"
              id=""
            />
          </div>
          <button
            type="submit"
            className="bg-wedding-brown font-bold py-2 px-3 text-white rounded-md cursor-pointer"
          >
            Beküldés
          </button>
        </div>
      </form>
    </div>
  );
};

export default Accept;
