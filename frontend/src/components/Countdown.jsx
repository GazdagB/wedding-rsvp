import { useEffect, useState } from 'react'

const Countdown = () => {
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
    <section className='pt-0 pb-30'>
        <div className="flex gap-5 mt-6 flex-col items-center">
          <p className='text-xl text-[#7E7E80] '>Hamarosan</p>
          <div className='h-0.5 w-[350px] md:w-[600px] lg:w-200 bg-[#D1C9BE] rounded-full'></div>
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
  )
}

export default Countdown