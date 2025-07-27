/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useInView } from "motion/react";
import { useEffect,useRef } from "react";

const Date = ({setActiveLink,}) => {
  const myRef = useRef();
  const inView = useInView(myRef,{amount: 0.9})
  
  useEffect(()=>{
    if(inView){
      setActiveLink("date")
    }
  },[inView])

  
  return (
    <div ref={myRef} id="datum" className='relative py-30  px-5 bg-fixed  bg-center bg-cover flex items-center justify-center  flex-col'
    style={{backgroundImage: "url(https://images.unsplash.com/photo-1655664681880-29aaeb511f60?q=80&w=830&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}
    >

        <div className='bg-black inset-0 absolute opacity-50 backdrop-blur-lg z-0'></div>
        <h2 className='dancing text-5xl text-white z-10 mb-10'>Az időpont</h2>
        <img className='z-10 mb-[68px] ' src="/images/calendar.png" alt="" />
        <h3 className='text-white text-3xl md:text-5xl dancing z-10'>2025 Szeptember 07. Vasárnap </h3>

    </div>
  )
}

export default Date