import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { useForm, useFieldArray } from "react-hook-form";

const Accept = () => {
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  // Setup react-hook-form
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors }
  } = useForm({
    defaultValues: {
      familyName: "",
      accept: true,
      email: "",
      adults: "",
      children5to10: "",
      childrenUnder5: "",
      adultsNames: [],
      children5to10Names: [],
      childrenUnder5Names: [],
      message: "",
      password: ""
    }
  });

  // Create field arrays for dynamic form fields
  const {
    fields: adultsFields,
    append: appendAdult,
    remove: removeAdult,
    replace: replaceAdults
  } = useFieldArray({
    control,
    name: "adultsNames"
  });

  const {
    fields: children5to10Fields,
    append: appendChild5to10,
    remove: removeChild5to10,
    replace: replaceChildren5to10
  } = useFieldArray({
    control,
    name: "children5to10Names"
  });

  const {
    fields: childrenUnder5Fields,
    append: appendChildUnder5,
    remove: removeChildUnder5,
    replace: replaceChildrenUnder5
  } = useFieldArray({
    control,
    name: "childrenUnder5Names"
  });

  // Watch for changes in count fields to update arrays
  const adultsCount = watch("adults");
  const children5to10Count = watch("children5to10");
  const childrenUnder5Count = watch("childrenUnder5");

  // Handle changes in adults count
  useEffect(() => {
    // If value is empty string (Válasz...), clear all fields
    if (!adultsCount) {
      replaceAdults([]);
      return;
    }
    
    const count = Number(adultsCount);
    const currentLength = adultsFields.length;
    
    if (count > currentLength) {
      // Add new empty fields
      for (let i = currentLength; i < count; i++) {
        appendAdult({ name: "" });
      }
    } else if (count < currentLength) {
      // Remove extra fields
      for (let i = currentLength - 1; i >= count; i--) {
        removeAdult(i);
      }
    }
  }, [adultsCount, adultsFields.length, appendAdult, removeAdult, replaceAdults]);

  // Handle changes in children 5-10 count
  useEffect(() => {
    // If value is empty string (Válasz...), clear all fields
    if (!children5to10Count) {
      replaceChildren5to10([]);
      return;
    }
    
    const count = Number(children5to10Count);
    const currentLength = children5to10Fields.length;
    
    if (count > currentLength) {
      for (let i = currentLength; i < count; i++) {
        appendChild5to10({ name: "" });
      }
    } else if (count < currentLength) {
      for (let i = currentLength - 1; i >= count; i--) {
        removeChild5to10(i);
      }
    }
  }, [children5to10Count, children5to10Fields.length, appendChild5to10, removeChild5to10, replaceChildren5to10]);

  // Handle changes in children under 5 count
  useEffect(() => {
    // If value is empty string (Válasz...), clear all fields
    if (!childrenUnder5Count) {
      replaceChildrenUnder5([]);
      return;
    }
    
    const count = Number(childrenUnder5Count);
    const currentLength = childrenUnder5Fields.length;
    
    if (count > currentLength) {
      for (let i = currentLength; i < count; i++) {
        appendChildUnder5({ name: "" });
      }
    } else if (count < currentLength) {
      for (let i = currentLength - 1; i >= count; i--) {
        removeChildUnder5(i);
      }
    }
  }, [childrenUnder5Count, childrenUnder5Fields.length, appendChildUnder5, removeChildUnder5, replaceChildrenUnder5]);

  const onSubmit = async (data) => {
    try {
      // Transform data for API submission if needed
      const formattedData = {
        ...data,
        adults: Number(data.adults),
        children5to10: Number(data.children5to10 || 0),
        childrenUnder5: Number(data.childrenUnder5 || 0),
        // Extract just the name values from the field array objects
        adultsNames: data.adultsNames.map(item => item.name),
        children5to10Names: data.children5to10Names.map(item => item.name),
        childrenUnder5Names: data.childrenUnder5Names.map(item => item.name),
      };

      const response = await axios.post(`${API_URL}/rsvp`, formattedData);

      if (response.status === 200) {
        Swal.fire({
          title: "Köszönjük!",
          text: "Köszönjük a visszajelzést! Várunk szeretettel!",
          icon: "success",
          confirmButtonText: "Rendben!",
          confirmButtonColor: "#9f7c60",
        });

        // Reset form after successful submission
        setValue("familyName", "");
        setValue("accept", true);
        setValue("email", "");
        setValue("adults", "");
        setValue("children5to10", "");
        setValue("childrenUnder5", "");
        setValue("adultsNames", []);
        setValue("children5to10Names", []);
        setValue("childrenUnder5Names", []);
        setValue("message", "");
        setValue("password", "");
      }
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
        Swal.fire({
          title: "Hoppá...",
          icon: "error",
          text: "Ismeretlen hiba történt kérlek próbáld meg később!",
          confirmButtonColor: "#9f7c60",
        });
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h2 className="dancing text-6xl text-wedding-brown z-10 mb-4">
        Ott leszel?
      </h2>
      <p className="text-wedding-light-gray mb-10 text-center text-pretty">
        Kérlek tudasd velünk hogy ott tudsz-e lenni velünk a nagy napunkon!
      </p>
      <form className="md:w-[550px] w-full flex flex-col items-center justify-center" onSubmit={handleSubmit(onSubmit)}>
        {/* family Name */}
        <div className="mb-8 w-full flex flex-col md:block items-center">
          <label htmlFor="familyName" className="font-bold">
            Család név <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-col items-center md:items-start mt-3 w-full">
            <input
              id="familyName"
              className="bg-gray-300 py-2 px-4 rounded-md w-4/5 md:w-full"
              type="text"
              placeholder="Családnév..."
              autoComplete="given-name"
              {...register("familyName", { required: true })}
            />
            {errors.familyName && (
              <span className="text-red-500">Családnév megadása kötelező!</span>
            )}
          </div>
        </div>

        {/* Password field */}
        <div className="mb-10 flex w-full flex-col items-center md:items-start">
          <label htmlFor="password" className="font-bold">Jelszó <span className="text-red-500">*</span></label>
          <input 
            id="password"
            className="bg-gray-300 py-2 px-4 rounded-md w-4/5 md:w-full" 
            type="password"
            placeholder="Jelszó"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-red-500">A jelszó megadása kötelező!</span>
          )}
        </div>

        {/* Accept field */}
        <div className="mb-8 flex flex-col md:block items-center gap-4 md:gap-0 w-4/5 md:w-full">
          <label htmlFor="accept" className="font-bold">
            Ott tudsz lenni? <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-3 mt-3">
            <input
              id="yes"
              className="cursor-pointer"
              type="radio"
              value={true}
              defaultChecked
              {...register("accept", { required: true })}
            />
            <label className="cursor-pointer" htmlFor="yes">
              ✅ Elfogadom a meghívást örömmel!
            </label>
          </div>
          <div className="flex gap-3">
            <input
              id="no"
              className="cursor-pointer"
              type="radio"
              value={false}
              {...register("accept", { required: true })}
            />
            <label className="cursor-pointer" htmlFor="no">
              ❌ Sajnos nem tudok ott lenni!
            </label>
          </div>
          {errors.accept && (
            <span className="text-red-500">Válassz egy opciót</span>
          )}
        </div>

        {/* Email field */}
        <div className="flex w-full flex-col mb-8 items-center md:items-start">
          <label htmlFor="email" className="mb-3 font-bold">
            E-mail cím <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            className="bg-gray-300 py-2 px-4 rounded-md w-4/5 md:w-full"
            type="text"
            placeholder="E-mail"
            {...register("email", { 
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Érvénytelen email cím"
              }
            })}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>

        {/* Adults count */}
        <div className="flex flex-col mb-8 w-full items-center">
          <label htmlFor="adults" className="font-bold mb-3">
            Felnőttek száma <span className="text-red-500">*</span>
          </label>
          <p className="mb-3 text-wedding-light-gray">Magadat beleértve. (Legalább 1 felnőtt)</p>
          <select
            id="adults"
            className="bg-gray-300 w-4/5 md:w-full py-2 px-3 rounded-md"
            {...register("adults", { required: true })}
          >
            <option value="">Válasz...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          {errors.adults && (
            <span className="text-red-500">Ez a mező kötelező</span>
          )}
        </div>

        {adultsFields.length > 0 && (
          <div className="w-4/5 md:w-full">
            <p className="text-center text-wedding-light-gray mb-5">A nevek megadása fontos az ültető kártyák szempontjából.</p>
            {adultsFields.map((field, index) => (
              <motion.div 
                initial={{y: -100}} 
                animate={{y: 0}} 
                key={field.id} 
                className="mb-2"
              >
                <input
                  className="bg-gray-300 py-2 px-4 rounded-md w-full"
                  type="text"
                  placeholder={`Felnőtt ${index + 1} teljes neve`}
                  {...register(`adultsNames.${index}.name`, { required: true })}
                /> 
                {errors.adultsNames?.[index]?.name && (
                  <span className="text-red-500">Ez a mező kötelező!</span>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* Children count */}
        <div className="flex gap-5 mb-8 items-center w-full flex-col">
          <div className="flex flex-col w-full items-center">
            <label htmlFor="children5to10" className="font-bold mb-3">
              Gyerekek száma (5-10év között){" "}
            </label>
            <select
              id="children5to10"
              className="bg-gray-300 py-2 px-3 rounded-md w-4/5 md:w-full"
              {...register("children5to10")}
            >
              <option value="">Válasz...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          {children5to10Fields.length > 0 && (
            <div className="w-4/5 md:w-full">
              <p className="text-center text-wedding-light-gray mb-5">A nevek megadása FONTOS! az ültető kártyák szempontjából.</p>
              {children5to10Fields.map((field, index) => (
                <motion.div 
                  initial={{y: -100}} 
                  animate={{y: 0}} 
                  key={field.id} 
                  className="mb-2"
                >
                  <input
                    className="bg-gray-300 py-2 px-4 rounded-md w-full"
                    type="text"
                    placeholder={`Gyerek ${index + 1} neve (5-10 év)`}
                    {...register(`children5to10Names.${index}.name`)}
                  />
                </motion.div>
              ))}
            </div>
          )}

          <div className="flex flex-col items-center w-full">
            <label htmlFor="childrenUnder5" className="font-bold mb-3">
              Gyerekek száma (5év alatt){" "}
            </label>
            <select
              id="childrenUnder5"
              className="bg-gray-300 py-2 px-3 rounded-md w-4/5 md:w-full"
              {...register("childrenUnder5")}
            >
              <option value="">Válasz...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          {childrenUnder5Fields.length > 0 && (
            <div className="w-4/5 md:w-full">
              <p className="text-center text-wedding-light-gray mb-5">A nevek megadása FONTOS! az ültető kártyák szempontjából.</p>
              {childrenUnder5Fields.map((field, index) => (
                <motion.div 
                  initial={{y: -100}} 
                  animate={{y: 0}} 
                  key={field.id} 
                  className="mb-2"
                >
                  <input
                    className="bg-gray-300 py-2 px-4 rounded-md w-full"
                    type="text"
                    placeholder={`Gyerek ${index + 1} neve (5 év alatt)`}
                    {...register(`childrenUnder5Names.${index}.name`)}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col items-center w-full">
          <div className="mb-8 flex md:block flex-col w-full items-center">
            <label className="font-bold mb-3" htmlFor="message">
              Üzenet a menyasszonynak és a vőlegénynek:
            </label>
            <textarea
              id="message"
              className="bg-gray-300 h-32 p-3 mt-3 w-4/5 md:w-full resize-none rounded-md"
              {...register("message")}
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