/* eslint-disable react/prop-types */

const Circle = ({circleClass}) => {
  return (
    <div className={`w-[30px] left-[50%] translate-x-[-50%] absolute z-10 aspect-square border-[7px] rounded-full border-wedding-deep-brown bg-wedding-champagne ${circleClass}`}>
            
    </div>
  )
}

export default Circle