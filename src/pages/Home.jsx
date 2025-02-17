import Countdown from '../components/Countdown'
import Hero from '../components/Hero'
import Location from '../components/Location'
import Date from '../components/Date'

import { useRef } from 'react'

const Home = ({setActiveLink}) => {


  
  return (
    <div>
        <Hero setActiveLink={setActiveLink}/>
        <Countdown/>
        <Location setActiveLink={setActiveLink}/>
        <Date setActiveLink={setActiveLink}/>
    </div>

  )
}

export default Home