import { faFacebook, faGoogle, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"




FontAwesomeIcon

const Location = () => {
  return (
    <div className="w-full flex h-500 items-center bg-wedding-champagne flex-col">
        <h2 className="dancing text-6xl text-wedding-gray mt-20 mb-[63px]">A helyszín</h2>
        <div className="flex justify-center gap-[100px]">
          <div className="grid grid-cols-2 grid-rows-2">
            <div className="w-[200px] aspect-square" style={{backgroundImage: "url('/images/galfy/galfy-drone.jpg')",backgroundPosition:"center", backgroundSize: "250%"}}></div>
            <div className="w-[200px] aspect-square" style={{backgroundImage: "url('/images/galfy/galfy-sign.jpg')", backgroundPosition: "-180px 0px", backgroundSize: "250%"}}></div>
            <div className="w-[200px] aspect-squar" style={{backgroundImage: "url('/images/galfy/galfy-inside.jpg')", backgroundPosition: "-60px -50px",backgroundSize: '200%'}}></div>
            <div className="w-[200px] aspect-squar" style={{backgroundImage: "url('/images/galfy/galfy-night.jpg')", backgroundPosition: "center",backgroundSize: "300%"}}></div>
          </div>

          <div>
            <h3 className="text-[32px] dancing font-bold mb-[18px]">Gálffy Birtok - Bogád</h3>
            <p className="w-[600px] mb-5">Lorem ipsum dolor sit amet consectetur. Quam est natoque pellentesque elementum purus fringilla ante neque. Sed volutpat ultrices et erat. Pellentesque faucibus elit at nisl consequat congue malesuada nibh tristique. Cursus consectetur condimentum potenti mauris tempus ac nec.
            </p>
            <p className="font-bold mb-[51px]">Bogád, Kápolnás domb, 7742 Magyarország</p>
            <div className="text-3xl flex gap-3">
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