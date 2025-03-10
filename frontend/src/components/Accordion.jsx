/* eslint-disable react/prop-types */
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

const Accordion = ({question,answer}) => {

    const [accordionOpen, setAccordionOpen] = useState(false)

    const handleToggle = ()=>{
        setAccordionOpen(prev => !prev)
    }
  return (
    <div onClick={handleToggle} className='py-7 z-10 rounded-md bg-white w-[85%] md:w-[650px] px-5 mb-2 cursor-pointer'>
        <div className='flex flex-col justify-between'>
            <div className='flex justify-between w-full'>
                <span className={`font-bold me-5 text-[18px] md:text-[20px] transition-all duration-300 ease-in-out ${accordionOpen ? "mb-2" :""}`}>{question}</span>
                {accordionOpen 
                ? <span><FontAwesomeIcon icon={faMinus} /></span> 
                : <span><FontAwesomeIcon icon={faPlus} /></span> 
                 }
                
                
            </div>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 ${
                    accordionOpen 
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}>
                    <p className='md:w-[550px] overflow-hidden ms-2 md:ms-7'>{answer}</p>
                </div>
        </div>
    </div>
  )
}

export default Accordion