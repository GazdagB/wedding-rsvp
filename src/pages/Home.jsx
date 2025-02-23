/* eslint-disable react/prop-types */
import Countdown from '../components/Countdown'
import Hero from '../components/Hero'
import Location from '../components/Location'
import Date from '../components/Date'
import Accept from '../components/Accept'
import GYIK from '../components/GYIK'
import Program from '../components/Program/Program'


const Home = ({setActiveLink}) => {


  
  return (
    <div>
        <Hero setActiveLink={setActiveLink}/>
        <Countdown/>
        <Location setActiveLink={setActiveLink}/>
        <Date setActiveLink={setActiveLink}/>
        <Program/>
        <Accept/>
        <GYIK/>
    </div>

  )
}

export default Home