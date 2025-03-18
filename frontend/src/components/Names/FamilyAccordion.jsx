import { IoIosArrowDropdown } from "react-icons/io";
import { useState } from "react";

const FamilyAccordion = ({ guest }) => {
  function getFamilyName(fullName) {
    const nameArray = fullName.split(" ");
    return `${nameArray[0]} Család`;
  }

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-[500px]">
      {/* Header */}
      <div
        className="bg-wedding-champagne w-full flex items-center justify-between font-bold py-2 px-5 rounded-md cursor-pointer gap-5"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {getFamilyName(guest.fullName)}
        <IoIosArrowDropdown
          className={`text-xl transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {/* Content - Always in DOM, Just Animates */}
      <div
        className={`grid transition-[max-height,opacity] duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="p-5">
          {/* Adults */}
          <div>
            <div className="font-bold">Felnőttek:</div>
            <div className="h-[1px] w-full bg-wedding-light-gray"></div>
            {guest.adultsNames.map((name, id) => (
              <p key={id}>{name}</p>
            ))}
          </div>

          {/* Children (5-10) */}
          <div>
            <div className="font-bold">Gyerek (5-10):</div>
            <div className="h-[1px] w-full bg-wedding-light-gray"></div>
            {guest.children5to10Names.map((name, id) => (
              <p key={id}>{name}</p>
            ))}
          </div>

          {/* Children (Under 5) */}
          <div>
            <div>Gyerek (5 alatt):</div>
            <div className="h-[1px] w-full bg-wedding-light-gray mb-3"></div>
            {guest.childrenUnder5Names.map((name, id) => (
              <p key={id}>{name}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyAccordion;
