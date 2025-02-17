/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef } from 'react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'motion/react';


const Hero = ({setActiveLink}) => {
    const myRef = useRef();
    const inView = useInView(myRef,{amount: "some",margin: "0px 0px 600px 0px"})

    useEffect(()=>{
        if(inView){
            setActiveLink("home")
          }
    },[inView])
    
  return (
    <section  id='home' className="hero flex items-center justify-center flex-col h-[100vh] min-h-[1100px] ">
            <div className="flex items-center justify-center gap-6 mt-50">
                <img className="absolute opacity-30 w-[600px] z-10 pointer-events-none" src="/images/infinite-symbol.svg" alt="" />
                <div className="overflow-hidden">
                    <img className="hover:scale-110 h-[398px] w-[298px] object-cover grayscale hover:grayscale-0 transition duration-300 cursor-pointer" src="/images/scala.JPG" alt="" />
                </div>
                <div ref={myRef} className="overflow-hidden">
                    <img className=" scale-120 hover:scale-130 h-[550px] grayscale hover:grayscale-0 transition duration-300 cursor-pointer" src="/images/propose.JPG" alt="" />
                </div>
                <div className="overflow-hidden">
                    <img className="object-cover scale-170 hover:scale-180 h-[398px] w-[298px] grayscale hover:grayscale-0 transition duration-300 cursor-pointer" src="/images/back.JPEG" alt="" />
                </div>
            </div>
            <p className='playfair text-5xl font-bold my-10 text-[#9F7C60] dancing'>Összeházasodunk!</p>
            <p className="max-w-[500px] text-centermb-30 mb-20 text-[#7E7E80]">Örömmel meghívunk titeket életünk legszebb napjára! Ünnepeljétek velünk az esküvőnket, és legyetek részesei a boldogságunknak!</p>
            <FontAwesomeIcon className='text-4xl text-[#9F7C60] cursor-pointer' icon={faAngleDown} />
        </section>
  )
}

export default Hero