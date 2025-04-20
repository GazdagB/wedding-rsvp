/* eslint-disable react/prop-types */

const Stage = ({stageTitle,iconSrc,time,imageClass}) => {
  return (
    <div className="flex flex-col items-center">
        <img className={imageClass} src={iconSrc} alt="" />
        <p className="font-bold text-[18px] md:text-[20px] text-wedding-deep-brown">{stageTitle} </p>
        <p className=" text-[18px] md:text-[20px] text-wedding-deep-brown">{time}</p>
    </div>
  )
}

export default Stage