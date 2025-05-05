/* eslint-disable react/prop-types */
import Countdown from '../components/Countdown'
import Hero from '../components/Hero'
import Location from '../components/Location'
import Date from '../components/Date'
import Accept from '../components/Accept'
import GYIK from '../components/GYIK'
import Program from '../components/Program/Program'
import Playlist from '../components/Playlist'
import Navbar from '../components/Navbar'
import Gallery from '../components/Gallery/Gallery'
import { useState } from 'react'
import Whishes from '../components/Whishes/Whishes'


const Home = () => {

  const [activeLink, setActiveLink] = useState("home")

  return (
    <div>
        <Navbar activeLink={activeLink}/>
        <Hero setActiveLink={setActiveLink}/>
        <Countdown/>
        <Location setActiveLink={setActiveLink}/>
        <Date setActiveLink={setActiveLink}/>
        <Program setActiveLink={setActiveLink}/>
        <Accept setActiveLink={setActiveLink}/>
        <Whishes></Whishes>
        <Gallery/>
        <GYIK/>
        <Playlist/>
    </div>

  )
}

export default Home