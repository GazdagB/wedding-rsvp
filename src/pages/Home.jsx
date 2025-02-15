import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'


const Home = () => {
    const [countDown,setCountDown] = useState({
        days: 0, 
        hours: 0, 
        minutes: 0, 
        seconds: 0
    })

    const weddingDate = new Date('September 7, 2025 16:00:00').getTime()

    const padZero = (num) => (num < 10 ? `0${num}` : num)

    const updateCountdown = () => {
        const currentTime = new Date().getTime()
        const timeLeft = weddingDate - currentTime
    
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)
    
        setCountDown({ days, hours, minutes, seconds })
      }

      useEffect(() => {
        const timer = setInterval(updateCountdown, 1000)
    
        // Cleanup the interval on unmount
        return () => clearInterval(timer)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

  return (
    <div>
        <section className="hero flex items-center justify-center flex-col h-[100vh] min-h-[1100px] w-[100vw] ">
            <div className="flex items-center justify-center gap-6 mt-50">
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
            <p className='playfair text-3xl font-bold my-10 text-[#9F7C60]'>ÖSSZEHÁZASODUNK!</p>
            <p className="max-w-[500px] text-centermb-30 mb-20 text-[#7E7E80]">Örömmel meghívunk titeket életünk legszebb napjára! Ünnepeljétek velünk az esküvőnket, és legyetek részesei a boldogságunknak!</p>
            <FontAwesomeIcon className='text-4xl text-[#9F7C60] cursor-pointer' icon={faAngleDown} />
        </section>

        <section className='pt-0 pb-30'>
        <div className="flex gap-5 mt-6 flex-col items-center">
          <p className='text-xl text-[#7E7E80] '>Hamarosan</p>
          <div className='h-0.5 w-200 bg-[#D1C9BE] rounded-full'></div>
          {/* Display Countdown */}
          <div className='flex'>
              <div className="text-center w-30">
                <p className="text-6xl font-bold playfair mb-4 text-[#9F7C60]">{padZero(countDown.days)}</p>
                <p>Nap</p>
              </div>

              <div className="text-center w-20">
                <p className="text-6xl font-bold playfair mb-4 text-[#9F7C60]">{padZero(countDown.hours)}</p>
                <p>Óra</p>
              </div>

              <div className="text-center w-20">
                <p className="text-6xl font-bold playfair mb-4 text-[#9F7C60]">{padZero(countDown.minutes)}</p>
                <p>Perc</p>
              </div>

              <div className="text-center w-20">
                <p className="text-6xl font-bold playfair mb-4 text-[#9F7C60]">{padZero(countDown.seconds)}</p>
                <p>Másodperc</p>
              </div>

          </div>
        </div>
        </section>
    </div>

  )
}

export default Home