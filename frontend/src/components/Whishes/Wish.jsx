import { FaHeart } from "react-icons/fa";
import { PiCloverFill } from "react-icons/pi";





const Wish = ({ text, icon,author="Gazdag Balázs"}) => {
    if (!text) return null; // Prevent rendering empty wishes
    
    let selectedIcon = <FaHeart />; 

    switch (icon) {
        case "heart":
            selectedIcon = <FaHeart/>
            break;
        case "luck": 
            selectedIcon = <PiCloverFill />
            break;
        default:
            break;
    }

    return (
      <div className="bg-white text-black shadow-lg rounded-xl min-h-[150px] px-6 py-4 items-center min-w-[300px] md:min-w-[400px] flex gap-5 relative">
        {/* Icon */}
        <div className="text-wedding-brown text-xl bg-gray-200 h-13 w-13 rounded-full flex-shrink-0 flex items-center justify-center">
            {selectedIcon}
        </div>
                <p className="py-10">&ldquo;{text}&rdquo;</p>
                <p className="absolute bottom-5 right-5 text-gray-400">- {author}</p>
      </div>
    );
  };
  
  export default Wish;
  