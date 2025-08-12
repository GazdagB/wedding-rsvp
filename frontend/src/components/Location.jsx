/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { faFacebook, faGoogle, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { useEffect,useRef } from "react"
import { useInView } from "motion/react"




FontAwesomeIcon

const Location = ({setActiveLink}) => {
    const myRef = useRef();
    const inView = useInView(myRef,{amount: 0.9})
    
    useEffect(()=>{
      if(inView){
        setActiveLink("helyszin")
      }
    },
  [inView])

   
  return (
    <div ref={myRef} id="helyszin" className="w-full flex py-12 items-center bg-wedding-champagne flex-col">
        <h2 className="dancing text-4xl md:text-5xl text-wedding-gray mb-[63px]">A helyszín</h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-[50px] lg:gap-[100px]">
          <div className="grid grid-cols-2 w-[300px] md:w-[400px] grid-rows-2">
            <div className="w-[150px] md:w-[200px] aspect-square" style={{backgroundImage: "url('/images/galfy/galfy-drone.webp')",backgroundPosition:"center", backgroundSize: "250%"}}></div>
            <div className="w-[150px] md:w-[200px] aspect-square" style={{backgroundImage: "url('/images/galfy/galfy-sign.webp')", backgroundPosition: "-180px 0px", backgroundSize: "250%"}}></div>
            <div className="w-[150px] md:w-[200px] aspect-squar" style={{backgroundImage: "url('/images/galfy/galfy-inside.webp')", backgroundPosition: "-60px -50px",backgroundSize: '200%'}}></div>
            <div className="w-[150px] md:w-[200px] aspect-squar" style={{backgroundImage: "url('/images/galfy/galfy-night.webp')", backgroundPosition: "center",backgroundSize: "300%"}}></div>
          </div>

          <div className="text-center flex md:block flex-col items-center lg:text-start text-pretty">
            <h3 className="text-4xl lg:text-[32px] dancing font-bold mb-[18px] ">Gálffy Birtok - Bogád</h3>
            <p className="w-[80%] md:w-[450px] xl:w-[600px] mb-5">Azért választottuk a Bogádon található Gálfi Birtokot, mert már az első pillanatban beleszerettünk a hely nyugalmába és varázsába. A gondozott kert, a tágas terasz és a természet közelsége mind azt sugallták, hogy ez a tökéletes helyszín arra a napra, amikor kimondjuk az igent. Szerettük volna, ha a családunk és a barátaink nemcsak egy gyönyörű környezetben ünnepelhetnek velünk, hanem igazán jól is érezhetik magukat. A birtok hangulata, a barátságos fogadtatás és az elegáns, mégis meghitt terek mind hozzájárultak ahhoz, hogy biztosak legyünk: itt szeretnénk megélni életünk egyik legszebb napját.
            </p>
            <p className="font-bold mb-[51px]">Bogád, Kápolnás domb, 7742 Magyarország</p>
            <div className="text-3xl justify-center lg:justify-start flex gap-3 text-[#342d24]">
            <Link to={"https://galffybirtok.hu/"} target="_blank">
              <FontAwesomeIcon icon={faGlobe} />
            </Link>
            <Link to={"https://www.facebook.com/profile.php?id=100076068657327"} target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link to={'https://www.instagram.com/explore/locations/106352835146773/galffy-birtok?igsh=eTVpdTJ1ZGw0Znh4'} target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link to={"https://maps.app.goo.gl/bjBu9W8Gq8VcyTea6"} target="_blank">
              <FontAwesomeIcon icon={faGoogle} />
            </Link>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Location