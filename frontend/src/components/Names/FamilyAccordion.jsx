import { IoIosArrowDropdown } from "react-icons/io";
import { useState } from "react";
import ListSection from "./ListSection";
import PropTypes from "prop-types"

const FamilyAccordion = ({ guest }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-[500px] w-full">
      {/* Header */}
      <div
        className="mb-4 text-wedding-brown-darker bg-wedding-champagne w-full flex items-center justify-between font-bold py-4 px-5 rounded-md cursor-pointer gap-5"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {guest.familyName}
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
        <div className="p-6 bg-gray-200 my-4 rounded-md text-gray-800">
          {/* Adults */}
          <ListSection iconType={"adult"} title={"Felnőttek"} guestNamesArray={guest.adultsNames} ></ListSection>

          {/* Children (5-10) */}
          <ListSection iconType={"child"} title={"Gyerekek 5-10év "} guestNamesArray={guest.children5to10Names}></ListSection>

          {/* Children (Under 5) */}
          <ListSection iconType={"baby"} title={"Gyerekek 5 év alatt"} guestNamesArray={guest.childrenUnder5Names}></ListSection>
        </div>
      </div>
    </div>
  );
};

FamilyAccordion.propTypes = {
  guest: PropTypes.shape({
    familyName: PropTypes.string.isRequired,
    adultsNames: PropTypes.arrayOf(PropTypes.string).isRequired,
    children5to10Names: PropTypes.arrayOf(PropTypes.string).isRequired,
    childrenUnder5Names: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}

export default FamilyAccordion;
