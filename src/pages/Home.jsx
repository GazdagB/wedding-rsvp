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

        <section className='py-30'>
        <div className="flex gap-4 justify-center mt-6">
          {/* Display Countdown */}
          <div className="text-center">
            <p className="text-4xl font-bold">{padZero(countDown.days)}</p>
            <p>Days</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">{padZero(countDown.hours)}</p>
            <p>Hours</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">{padZero(countDown.minutes)}</p>
            <p>Minutes</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">{padZero(countDown.seconds)}</p>
            <p>Seconds</p>
          </div>
        </div>
        </section>
    </div>

  )
}

export default Home