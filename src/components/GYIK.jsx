import Accordion from './Accordion'
import gyik from "../assets/gyik.json"
 

const GYIK = () => {

    
    
  return (
    <div className='relative bg-fixed flex flex-col items-center justify-center bg-center bg-cover py-10'
    style={{backgroundImage: "url('/images/gyik-bg.jpg')"}}
    >
        <div className='bg-black inset-0 absolute opacity-50 backdrop-blur-lg z-0'></div>
        <h2 className='text-6xl dancing text-white z-10 my-10'>Gyakran Ismételt Kérdések</h2>
        {gyik.map((question,id)=>{
            return (<Accordion key={id} answer={question.answer} question={question.question}/>)
        })}
    </div>
  )
}

export default GYIK