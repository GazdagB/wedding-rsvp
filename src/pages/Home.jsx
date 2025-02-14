import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


const Home = () => {
  return (
    <section className="hero flex items-center justify-center flex-col h-[100vh] w-[100vw] ">
        <div className="flex items-center justify-center gap-6 mt-20">
            <img className="absolute opacity-30 w-[600px] z-10 pointer-events-none" src="/images/infinite-symbol.svg" alt="" />
            <div className="overflow-hidden">
                <img className="hover:scale-110 h-[398px] w-[298px] object-cover grayscale hover:grayscale-0 transition duration-300 cursor-pointer" src="/images/scala.JPG" alt="" />
            </div>
            <div className="overflow-hidden">
                <img className=" scale-120 hover:scale-130 h-[550px] grayscale hover:grayscale-0 transition duration-300 cursor-pointer" src="/images/propose.JPG" alt="" />
            </div>
            <div className="overflow-hidden">
                <img className="object-cover scale-170 hover:scale-180 h-[398px] w-[298px] grayscale hover:grayscale-0 transition duration-300 cursor-pointer" src="/images/back.JPEG" alt="" />
            </div>
        </div>

        <p className="max-w-[500px] text-center mt-20 mb-30">Örömmel meghívunk titeket életünk legszebb napjára! Ünnepeljétek velünk az esküvőnket, és legyetek részesei a boldogságunknak!</p>

        <FontAwesomeIcon className='text-4xl text-[#EDCDA9] cursor-pointer' icon={faAngleDown} />
    </section>
  )
}

export default Home