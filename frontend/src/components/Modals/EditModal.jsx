import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import isEqual from "lodash/isEqual";
import { motion } from "framer-motion";
import { capitalizeName } from "../../utils/stringUtils";

const EditModal = ({ guest, setEditModalIsOpen }) => {
  const [editedGuest, setEditedGuest] = useState(guest);
  const [familyName,setFamilyName] = useState(capitalizeName(guest.familyName))
  const [adultsNames, setAdultsNames] = useState(guest.adultsNames || []);
  const [children5to10Names, setChildren5to10Names] = useState(
    guest.children5to10Names || []
  );
  const [childrenUnder5Names, setChildrenUnder5Names] = useState(
    guest.childrenUnder5Names || []
  );
  const [guestChanged, setGuestChanged] = useState(false);

  function closeModal() {
    setEditModalIsOpen(false);
  }

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

  useEffect(() => {
    const fullEditedGuest = {
      ...editedGuest,
      adultsNames,
      children5to10Names,
      childrenUnder5Names,
    };

    setGuestChanged(!isEqual(guest, fullEditedGuest));
  }, [editedGuest, adultsNames, children5to10Names, childrenUnder5Names]);

  function handleSelectChange(e, type) {
    const newCount = Number(e.target.value);
    setEditedGuest({ ...editedGuest, [type]: newCount });

    const updateNamesArray = (currentArray, count) => {
      return count > currentArray.length
        ? [...currentArray, ...new Array(count - currentArray.length).fill(null)]
        : currentArray.slice(0, count);
    };

    if (type === "adults")
      setAdultsNames(updateNamesArray(adultsNames, newCount));
    if (type === "children5to10")
      setChildren5to10Names(updateNamesArray(children5to10Names, newCount));
    if (type === "childrenUnder5")
      setChildrenUnder5Names(updateNamesArray(childrenUnder5Names, newCount));
  }

  function handleNameChange(index, value, type) {
    const updateArray = (arr) => {
      const updated = [...arr];
      updated[index] = value;
      return updated;
    };

    if (type === "adults") setAdultsNames(updateArray(adultsNames));
    if (type === "children5to10")
      setChildren5to10Names(updateArray(children5to10Names));
    if (type === "childrenUnder5")
      setChildrenUnder5Names(updateArray(childrenUnder5Names));
  }

  async function handleEditGuest() {
    try {
      const updatedGuest = {
        ...editedGuest,
        adultsNames,
        children5to10Names,
        childrenUnder5Names,
      };
      await axios.put(`${API_URL}/rsvp/${guest._id}`, updatedGuest);
      toast.success("Sikeresen módosítottad a visszajelzést!");
      setEditModalIsOpen(false);
    } catch (error) {
      toast.error("Sikertelen módosítás!");
      console.error(error);
    }
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3 }}
    >
      <div onClick={closeModal} className="absolute inset-0 bg-black/50"></div>
      <div className="bg-white w-[500px] rounded-lg shadow-lg z-50 overflow-auto p-6">
        <h2 className="font-bold text-2xl">Visszajelzés szerkesztése</h2>
        <form >
            <div className="flex flex-col mb-2">
                <label className="block text-md/6 font-semibold text-gray-900" htmlFor="">Családnév</label>
                <input className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-wedding-brown" value={familyName} onChange={(e)=>{setFamilyName(e.target.value)}} type="text" />
            </div>

            <div className="mb-5">
                <label className="block text-md/6 font-semibold text-gray-900" htmlFor="">Statusz</label>
                <select className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-wedding-brown" defaultValue={editedGuest.accept} value={editedGuest.accept} onChange={(e)=>{
                    setEditedGuest({...editedGuest, accept: e.target.value})
                }} name="" id="">
                    <option value={true}>✅ Elfogadta</option>
                    <option value={false}>❌ Vissza utasította</option>
                </select>
            </div>

            <div className="mb-5">
                <label className="block text-md/6 font-semibold text-gray-900" htmlFor="">E-mail</label>
                <input value={editedGuest.email} onChange={(e)=>{setEditedGuest({...editedGuest, email: e.target.value})}} className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-wedding-brown" type="email" name="" id="" />
            </div>


          <div className="mb-5">
              <label className="block text-md/6 font-semibold text-gray-900">Felnőttek száma</label>
              <select
              className="mb-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-wedding-brown"
                value={editedGuest.adults}
                onChange={(e) => handleSelectChange(e, "adults")}
              >
                {" "}
                {[...Array(6).keys()].map((i) => (
                  <option
                   key={i} value={i}>
                    {i}
                  </option>
                ))}{" "}
              </select>
              {adultsNames.map((name, i) => (
              
                <motion.input
                className="mb-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-wedding-brown"
                  initial={{y: -20}}
                  animate={{y: 0}}
                  required={true}
                  exit={{y: -20}}
                  transition={{duration: 0.3}}
                  key={i}
                  type="text"
                  value={name}
                  onChange={(e) => handleNameChange(i, e.target.value, "adults")}
                  placeholder={`Felnőtt ${i + 1} neve`}
                />
              ))}
          </div>
          
          <div className="mb-5">
              <label className="block text-md/6 font-semibold text-gray-900">5-10 éves gyerekek</label>
              <select
              className="mb-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-wedding-brown"
                value={editedGuest.children5to10}
                onChange={(e) => handleSelectChange(e, "children5to10")}
              >
                {" "}
                {[...Array(6).keys()].map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}{" "}
              </select>
              {children5to10Names.map((name, i) => (
                <input
                className="mb-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-wedding-brown"
                  key={i}
                  type="text"
                  value={name}
                  onChange={(e) =>
                    handleNameChange(i, e.target.value, "children5to10")
                  }
                  placeholder={`Gyerek (5-10 év) ${i + 1} neve`}
                />
              ))}
          </div>

          <label className="block text-md/6 font-semibold text-gray-900" >5 év alatti gyerekek</label>
          <select
          className="mb-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-wedding-brown"
            value={editedGuest.childrenUnder5}
            onChange={(e) => handleSelectChange(e, "childrenUnder5")}
          >
            {" "}
            {[...Array(6).keys()].map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}{" "}
          </select>
          {childrenUnder5Names.map((name, i) => (
            <input
            className="mb-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-wedding-brown"
              key={i}
              type="text"
              value={name}
              onChange={(e) =>
                handleNameChange(i, e.target.value, "childrenUnder5")
              }
              placeholder={`Gyerek (<5 év) ${i + 1} neve`}
            />
          ))}
        </form>
        <div className="bg-gray-50 px-4 py-3 flex justify-end space-x-2">
          <motion.button
            disabled={!guestChanged}
            onClick={handleEditGuest}
            className="px-4 py-2 rounded"
            initial={{ scale: 0.9, opacity: 0.5 }}
            animate={{
              scale: guestChanged ? 1 : 0.9,
              opacity: guestChanged ? 1 : 0.5,
              cursor: "pointer",
              backgroundColor: guestChanged ? "oklch(0.707 0.165 254.624)" : "oklch(0.707 0.022 261.325)"
            }}
            transition={{ duration: 0.3 }}
          >
            Mentés
          </motion.button>
          <button
            onClick={closeModal}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Mégsem
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default EditModal;
