import Circle from './Circle'
import Stage from './Stage'
import { useState } from 'react'
import { FaAngleDown,FaAngleUp  } from "react-icons/fa6";


const Program = () => {

  const [moreInfo, setMoreInfo] = useState(false)

  const handleMoreInfo = () => {
    setMoreInfo((prev) => !prev)
  }

  return (
    <div className='bg-wedding-champagne flex flex-col items-center py-20'>
        <h2 className='text-wedding-deep-brown text-3xl md:text-4xl font-bold dancing mb-15'>A nap programja</h2>

        {/* Mobile Icons */}
        <div className='md:hidden flex flex-col items-center'>
        <Stage time={"16:00"} imageClass={"w-[90px]"} stageTitle={"Érkezés a birtokra"} iconSrc={"/images/Program/arrive.png"}/>
        <div className='w-1 bg-wedding-deep-brown h-25 mt-10 rounded-md'></div>

        <Stage time={"16:30"} stageTitle={"Szertartás"}  imageClass={"w-[90px] mt-[50px]"} iconSrc={"/images/Program/ido.png"}/>
        <div className='w-1 bg-wedding-deep-brown h-25 mt-10 rounded-md'></div>

        <Stage time={"17:00"} stageTitle={"Csoportképek"} iconSrc={"/images/Program/photos.png"} imageClass={"w-[80px] mt-[50px]"}/>
        <div className='w-1 bg-wedding-deep-brown h-25 mt-10 rounded-md'></div>

        <Stage time={"18:00"} stageTitle={"Megnyitó"} imageClass={"w-[80px] mt-[50px]"} iconSrc={"/images/Program/enterance.png"}/>
        <div className='w-1 bg-wedding-deep-brown h-25 mt-10 rounded-md'></div>

        <Stage time={"18:30"} stageTitle={"Csokordobás"} iconSrc={"/images/Program/flowers.png"} imageClass={"w-[80px] mt-[50px]"}/>
        <div className='w-1 bg-wedding-deep-brown h-25 mt-10 rounded-md'></div>

        <Stage time={"19:00"} stageTitle={"Vacsora"} imageClass={"w-[90px] mt-[50px]"} iconSrc={"/images/Program/dinner.png"}/>
        
        
        {
          moreInfo && (
            <>
            <div className='w-1 bg-wedding-deep-brown h-25 mt-10 rounded-md'></div>

            <Stage time={"20:30"} stageTitle={"Nyitótánc"} iconSrc={"/images/Program/dance.png"} imageClass={"w-[80px] mt-[50px]"}/>
            <div className='w-1 bg-wedding-deep-brown h-25 mt-10 rounded-md'></div>
    
            <Stage time={"21:00"} stageTitle={"Sztárvendég"} imageClass={"w-[80px] mt-[50px]"} iconSrc={"/images/Program/guest.png"}/>
            <div className='w-1 bg-wedding-deep-brown h-25 mt-10 rounded-md'></div>
    
            <Stage time={"22:00"} stageTitle={"Tortavágás"} iconSrc={"/images/Program/cake.png"} imageClass={"w-[80px] mt-[50px]"}/>
            <div className='w-1 bg-wedding-deep-brown h-25 mt-10 rounded-md'></div>
    
            <Stage time={"00:00"} stageTitle={"Menyecske tánc"} imageClass={"w-[70px] mt-[50px]"} iconSrc={"/images/Program/midnightdance.png"}/>
            </>
          )
        }

        <p onClick={handleMoreInfo} className='font-sans font-bold flex items-center gap-2 text-wedding-brown-darker mt-10'> {moreInfo ? <FaAngleUp/> : <FaAngleDown />   
 } {moreInfo ? "Mutass kevesebbet": "Mutass többet"}</p>
       

        </div>

        

        <div className='md:flex hidden'>

          {/* Left Side */}
          <div>
          <Stage time={"16:00"} imageClass={"w-[90px]"} stageTitle={"Érkezés a birtokra"} iconSrc={"/images/Program/arrive.png"}/>
          <Stage time={"17:00"} stageTitle={"Csoportképek"} iconSrc={"/images/Program/photos.png"} imageClass={"w-[90px] mt-[135px]"}/>
          <Stage time={"18:30"} stageTitle={"Csokordobás"} iconSrc={"/images/Program/flowers.png"} imageClass={"w-[90px] mt-[100px]"}/>
          <Stage time={"20:30"} stageTitle={"Nyitótánc"} iconSrc={"/images/Program/dance.png"} imageClass={"w-[85px] mt-[100px]"}/>
          <Stage time={"22:00"} stageTitle={"Tortavágás"} iconSrc={"/images/Program/cake.png"} imageClass={"w-[85px] mt-[100px]"}/>
          </div>

          {/* Divider line */}
          <div className='relative h-[1200px] mt-20 mx-30'>
            <div className='w-2 mt bg-wedding-deep-brown h-full rounded-full'>

            </div>
            <Circle circleClass={"top-0"} />
            <div className='h-[5px] w-[80px] bg-wedding-deep-brown absolute top-[10px] right-0 z-0 rounded-full'></div>
            <Circle circleClass={"top-[110px]"} />
            <div className='h-[5px] w-[80px] bg-wedding-deep-brown absolute top-[123px] left-0 z-0 rounded-full'></div>
            <Circle circleClass={"top-[240px]"} />
            <div className='h-[5px] w-[80px] bg-wedding-deep-brown absolute top-[252px] right-0 z-0 rounded-full'></div>
            <Circle circleClass={"top-[360px]"} />
            <div className='h-[5px] w-[80px] bg-wedding-deep-brown absolute top-[372px] left-0 z-0 rounded-full'></div>
            <Circle circleClass={"top-[510px]"} />
            <div className='h-[5px] w-[80px] bg-wedding-deep-brown absolute top-[522px] right-0 z-0 rounded-full'></div>
            <Circle circleClass={"top-[640px]"} />
            <div className='h-[5px] w-[80px] bg-wedding-deep-brown absolute top-[652px] let-0 z-0 rounded-full'></div>
            <Circle circleClass={"top-[760px]"} />
            <div className='h-[5px] w-[80px] bg-wedding-deep-brown absolute top-[772px] right-0 z-0 rounded-full'></div>
            <Circle circleClass={"top-[900px]"} />
            <div className='h-[5px] w-[80px] bg-wedding-deep-brown absolute top-[912px] left-0 z-0 rounded-full'></div>
            <Circle circleClass={"top-[1035px]"} />
            <div className='h-[5px] w-[80px] bg-wedding-deep-brown absolute top-[1047px] right-0 z-0 rounded-full'></div>
            <Circle circleClass={"top-[1180px]"} />
            <div className='h-[5px] w-[80px] bg-wedding-deep-brown absolute top-[1192px] left-0 z-0 rounded-full'></div>

          </div>

          {/* Right Side */}
          <div>
          <Stage time={"16:30"} stageTitle={"Szertartás"}  imageClass={"w-[90px] mt-[105px]"} iconSrc={"/images/Program/ido.png"}/>
          <Stage time={"18:00"} stageTitle={"Megnyitó"} imageClass={"w-[85px] mt-[100px]"} iconSrc={"/images/Program/enterance.png"}/>
          <Stage time={"19:00"} stageTitle={"Vacsora"} imageClass={"w-[90px] mt-[140px]"} iconSrc={"/images/Program/dinner.png"}/>
          <Stage time={"21:00"} stageTitle={"Sztárvendég"} imageClass={"w-[80px] mt-[100px]"} iconSrc={"/images/Program/guest.png"}/>
          <Stage time={"00:00"} stageTitle={"Menyecske tánc"} imageClass={"w-[80px] mt-[100px]"} iconSrc={"/images/Program/midnightdance.png"}/>
          </div>
        </div>
        
    </div>
  )
}

export default Program