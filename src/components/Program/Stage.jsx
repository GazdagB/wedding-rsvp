/* eslint-disable react/prop-types */

const Stage = ({stageTitle,iconSrc,time,imageClass}) => {
  return (
    <div className="flex flex-col items-center">
        <img className={imageClass} src={iconSrc} alt="" />
        <p className="font-bold text-[20px] md:text-[25px] text-wedding-deep-brown">{stageTitle} </p>
        <p className=" text-[20px] md:text-[25px] text-wedding-deep-brown">{time}</p>
    </div>
  )
}

export default Stage