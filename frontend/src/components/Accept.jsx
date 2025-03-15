import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const Accept = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    accept: true,
    email: "",
    adults: 0,
    children5to10: 0,
    childrenUnder5: 0,
    adultsNames: [],
    children5to10Names: [],
    childrenUnder5Names: [],
    message: "",
    password: ""
  });

  const handleCountChange = (e, type) => {
    const count = +e.target.value;
    setFormData({
      ...formData,
      [type]: count,
      [`${type}Names`]: Array(count).fill(""),
    });
  };

  const handleNameChange = (index, type, value) => {
    const updatedNames = [...formData[type]]; // Copy the current array of names
    updatedNames[index] = value; // Update the specific index with the new value
    setFormData({
      ...formData,
      [type]: updatedNames, // Set the updated array back into state
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the form from refreshing the page

    // Concatenate first and last names into fullName

    console.log("Form Data Submitted: ", formData);

    try {
      const response = await axios.post("http://localhost:5000/rsvp", formData);
      console.log("Response from server:", response.data);

      if (response.status === 200) {
        Swal.fire({
          title: "Köszönjük!",
          text: "Köszönjük a visszajelzést! Várunk szeretettel!",
          icon: "success",
          confirmButtonText: "Rendben!",
          confirmButtonColor: "#9f7c60",
        });
      }

      setFormData({
        firstName: "",
        lastName: "",
        accept: true,
        email: "",
        adults: 0,
        children5to10: 0,
        childrenUnder5: 0,
        adultsNames: [],
        children5to10Names: [],
        childrenUnder5Names: [],
        message: "",
        password: ""
      });
    } catch (error) {
      if (error.response && error.response.data.message) {
        // Show whatever error message the backend sends
        Swal.fire({
          title: "Hoppá...",
          icon: "error",
          text: error.response.data.message,
          confirmButtonColor: "#9f7c60",
        });
      } else {
        // Default error for unexpected issues
        Swal.fire({
          title: "Hoppá...",
          icon: "error",
          text: "Ismeretlen hiba történt kérlek próbáld meg később!",
          confirmButtonColor: "#9f7c60",
        });
      }
    }
    // Now you can send `submittedData` to your backend (e.g., via an API request)
    // Example: axios.post('/submit', submittedData);

    // Optionally clear the form or handle the response
    // setFormData({ firstName: "", lastName: "", ...otherFields });
  };

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h2 className="dancing text-6xl text-wedding-brown z-10 mb-4">
        Ott leszel?
      </h2>
      <p className="text-wedding-light-gray mb-10 text-center text-pretty">
        Kérlek tudasd velünk hogy ott tudsz-e lenni velünk a nagy napunkon!
      </p>
      <form className="md:w-[550px]" onSubmit={handleSubmit}>
        {/* First Name and Last Name */}
        <div className="mb-8 w-full flex flex-col md:block items-center">
          <label htmlFor="name" className="font-bold">
            Teljes név
          </label>
          <div className="flex flex-col items-center gap-5 mt-3 w-full">
            {/* First Name */}
            <input
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              className="bg-gray-300 py-2 px-4 rounded-md w-[80%] md:w-full"
              required
              type="text"
              placeholder="Vezetéknév"
              autoComplete="given-name"
            />
            {/* Last Name */}
            <input
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              className="bg-gray-300 py-2 px-4 rounded-md w-[80%] md:w-full"
              required
              type="text"
              placeholder="Keresztnév"
              autoComplete="family-name"
            />
          </div>
        </div>

        {/* Password field */}
        <div>
          <label htmlFor="password" className="font-bold" >Jelszó</label>
          <input className="bg-gray-300 py-2 mb-10 px-4 rounded-md w-[80%] md:w-full" value={formData.password} onChange={(e)=>{setFormData({...formData, password: e.target.value})}} required type="password" name="password" id="pass" placeholder="Jelszó" />
        </div>

        {/* Accept field */}
        <div className="mb-8 flex flex-col md:block items-center">
          <label htmlFor="accept" className="font-bold">
            Ott tudsz lenni?
          </label>
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
            <label className="cursor-pointer" htmlFor={"yes"}>
              Elfogadom a meghívást örömmel!
            </label>
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
            <label className="cursor-pointer" htmlFor={"no"}>
              Sajnos nem tudok ott lenni!
            </label>
          </div>
        </div>

        {/* Other fields */}
        <div className="flex w-full flex-col mb-8 items-center">
          <label htmlFor="" className="mb-3 font-bold">
            E-mail cím
          </label>
          <input
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="bg-gray-300 py-2 px-4 rounded-md w-[80%] md:w-full"
            type="email"
            placeholder="E-mail"
          />
        </div>

        {/* Adults count */}
        <div className="flex flex-col mb-8 w-full items-center">
          <label htmlFor="" className="font-bold mb-3">
            Felnőttek száma
          </label>
          <p className="mb-3 text-wedding-light-gray">Magadat beleértve. (Legalább 1 felnőtt)</p>
          <select
            value={formData.adults}
            onChange={(e) => handleCountChange(e, "adults")}
            className="bg-gray-300 md:w-full w-[80%] py-2 px-3 rounded-md "
            name=""
            required
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

        {formData.adults > 0 && (
          <div>
            <p className="text-center text-wedding-light-gray mb-5">A nevek megadása fontos az ültető kártyák szempontjából.</p>
            {Array.from({ length: formData.adults }).map((_, index) => {
              return (
                <motion.div initial={{y: -100}} animate={{y: 0}}  key={index} className="mb-2">
                  <input
                    className="bg-gray-300 py-2 px-4 rounded-md w-[80%] md:w-full"
                    type="text"
                    placeholder={`Felnőtt ${index + 1} teljes neve`}
                    value={formData.adultsNames[index]}
                    required
                    onChange={(e) =>
                      handleNameChange(index, "adultsNames", e.target.value)
                    }
                  />
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Children count */}
        <div className="flex gap-5 mb-8 w-full flex-col">
          <div className="flex flex-col w-full items-center">
            <label htmlFor="" className="font-bold mb-3">
              Gyerekek száma (5-10év között){" "}
            </label>
            <select
              value={formData.children5to10}
              onChange={(e) => handleCountChange(e, "children5to10")}
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

          {formData.children5to10 > 0 && (
            <div>
              <p className="text-center text-wedding-light-gray mb-5">A nevek megadása FONTOS! az ültető kártyák szempontjából.</p>
              {Array.from({ length: formData.children5to10 }).map(
                (_, index) => (
                  <motion.div initial={{y: -100}} animate={{y: 0}} key={index} className="mb-2">
                    <input
                      className="bg-gray-300 py-2 px-4 rounded-md w-[80%] md:w-full"
                      type="text"
                      placeholder={`Gyerek ${index + 1} neve (5-10 év)`}
                      value={formData.children5to10Names[index]}
                      onChange={(e) =>
                        handleNameChange(
                          index,
                          "children5to10Names",
                          e.target.value
                        )
                      }
                    />
                  </motion.div>
                )
              )}
            </div>
          )}

          <div className="flex flex-col items-center w-full">
            <label htmlFor="" className="font-bold mb-3">
              Gyerekek száma (5év alatt){" "}
            </label>
            <select
              value={formData.childrenUnder5}
              onChange={(e) => handleCountChange(e, "childrenUnder5")}
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

          {formData.childrenUnder5 > 0 && (
            <div>
              <p className="text-center text-wedding-light-gray mb-5">A nevek megadása FONTOS! az ültető kártyák szempontjából.</p>
              {Array.from({ length: formData.childrenUnder5 }).map(
                (_, index) => (
                  <motion.div initial={{y: -100}} animate={{y: 0}} key={index} className="mb-2">
                    <input
                      className="bg-gray-300 py-2 px-4 rounded-md w-[80%] md:w-full"
                      type="text"
                      placeholder={`Gyerek ${index + 1} neve (5 év alatt)`}
                      value={formData.childrenUnder5Names[index]}
                      onChange={(e) =>
                        handleNameChange(
                          index,
                          "childrenUnder5Names",
                          e.target.value
                        )
                      }
                    />
                  </motion.div>
                )
              )}
            </div>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col items-center">
          <div className="mb-8 flex md:block flex-col">
            <label className="font-bold mb-3" htmlFor="">
              Üzenet a menyasszonynak és a vőlegénynek:
            </label>
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
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
