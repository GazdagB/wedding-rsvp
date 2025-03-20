import { FaUser } from "react-icons/fa";
import { FaChild } from "react-icons/fa";
import { LuBaby } from "react-icons/lu";

const ListSection = ({ guestNamesArray, title, iconType }) => {
  return (
    <>
      {guestNamesArray.length > 0 && (
        <div className="mb-5">
          <div className="font-bold flex items-center gap-3">
            {iconType === "adult" ? <FaUser /> : iconType === "child" ? <FaChild /> : iconType === "baby" ? <LuBaby /> : null}
            {title}
          </div>
          <div className="h-[1px] w-full bg-wedding-light-gray mb-3"></div>
          <ul className="list-disc px-5">
            {guestNamesArray.map((name, id) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ListSection;
