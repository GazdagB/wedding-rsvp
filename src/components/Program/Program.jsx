import Circle from './Circle'
import Stage from './Stage'

const Program = () => {
  return (
    <div className='bg-wedding-champagne flex flex-col items-center h-[1850px] py-20'>
        <h2 className='text-wedding-deep-brown text-6xl font-bold dancing mb-20'>A nap programja</h2>

        <div className='flex'>

          {/* Left Side */}
          <div>
          <Stage time={"16:00"} imageClass={"w-[144px]"} stageTitle={"Érkezés a birtokra"} iconSrc={"/images/Program/arrive.png"}/>
          <Stage time={"17:00"} stageTitle={"Csoportképek"} iconSrc={"/images/Program/photos.png"} imageClass={"w-[121px] mt-[100px]"}/>
          <Stage time={"18:30"} stageTitle={"Csokordobás"} iconSrc={"/images/Program/flowers.png"} imageClass={"w-[121px] mt-[100px]"}/>
          <Stage time={"20:30"} stageTitle={"Nyitótánc"} iconSrc={"/images/Program/dance.png"} imageClass={"w-[121px] mt-[100px]"}/>
          <Stage time={"22:00"} stageTitle={"Tortavágás"} iconSrc={"/images/Program/cake.png"} imageClass={"w-[110px] mt-[100px]"}/>
          </div>

          {/* Divider line */}
          <div className='relative h-[1370px] mt-20 mx-30'>
            <div className='w-2 mt bg-wedding-deep-brown h-full rounded-full'>

            </div>
            <Circle circleClass={"top-0"} />
            <div className='h-[5px] w-[80px] bg-wedding-deep-brown absolute top-[10px] right-0 z-0 rounded-full'></div>
            <Circle circleClass={"top-[140px]"} />
            <div className='h-[5px] w-[80px] bg-wedding-deep-brown absolute top-[151px] left-0 z-0 rounded-full'></div>
            <Circle circleClass={"top-[290px]"} />
            <div className='h-[5px] w-[80px] bg-wedding-deep-brown absolute top-[302px] right-0 z-0 rounded-full'></div>
            <Circle circleClass={"top-[440px]"} />
            <div className='h-[5px] w-[80px] bg-wedding-deep-brown absolute top-[452px] left-0 z-0 rounded-full'></div>
            <Circle circleClass={"top-[610px]"} />
            <div className='h-[5px] w-[80px] bg-wedding-deep-brown absolute top-[622px] right-0 z-0 rounded-full'></div>
            <Circle circleClass={"top-[730px]"} />
            <div className='h-[5px] w-[80px] bg-wedding-deep-brown absolute top-[742px] let-0 z-0 rounded-full'></div>
            <Circle circleClass={"top-[910px]"} />
            <div className='h-[5px] w-[80px] bg-wedding-deep-brown absolute top-[922px] right-0 z-0 rounded-full'></div>
            <Circle circleClass={"top-[1040px]"} />
            <div className='h-[5px] w-[80px] bg-wedding-deep-brown absolute top-[1052px] left-0 z-0 rounded-full'></div>
            <Circle circleClass={"top-[1230px]"} />
            <div className='h-[5px] w-[80px] bg-wedding-deep-brown absolute top-[1242px] right-0 z-0 rounded-full'></div>
            <Circle circleClass={"top-[1365px]"} />
            <div className='h-[5px] w-[80px] bg-wedding-deep-brown absolute top-[1377px] left-0 z-0 rounded-full'></div>

          </div>

          {/* Right Side */}
          <div>
          <Stage time={"16:30"} stageTitle={"Szertartás"}  imageClass={"w-[126px] mt-[100px]"} iconSrc={"/images/Program/ido.png"}/>
          <Stage time={"18:00"} stageTitle={"Megnyitó"} imageClass={"w-[120px] mt-[100px]"} iconSrc={"/images/Program/enterance.png"}/>
          <Stage time={"19:00"} stageTitle={"Vacsora"} imageClass={"w-[120px] mt-[100px]"} iconSrc={"/images/Program/dinner.png"}/>
          <Stage time={"21:00"} stageTitle={"Sztárvendég"} imageClass={"w-[110px] mt-[100px]"} iconSrc={"/images/Program/guest.png"}/>
          <Stage time={"00:00"} stageTitle={"Menyecske tánc"} imageClass={"w-[100px] mt-[100px]"} iconSrc={"/images/Program/midnightdance.png"}/>
          </div>
        </div>
        
    </div>
  )
}

export default Program