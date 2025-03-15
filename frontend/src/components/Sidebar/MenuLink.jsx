import React from 'react'


const MenuLink = ({name, icon}) => {
  return (
    <div className='cursor-pointer flex text-[18px] items-center justify-center gap-2'>
      {icon}
      <p>{name}</p>
    </div>
  )
}

export default MenuLink