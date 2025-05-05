import React from 'react'

const Gallery = () => {
  return (
    <div className=''>
      <h2>I Spy Galéria</h2>
      <p>Ez a galéria az I Spy játékhoz készült képeket tartalmazza.</p>

      <div className='grid grid-cols-5 gap-2 w-max'>
        <div>
            <div className='h-[200px] w-[300px] rounded-md bg-amber-300'></div>
            <div className='h-[200px] rounded-md w-[300px] bg-teal-300'></div>
            <div className='h-[200px] rounded-md w-[300px] bg-blue-300'></div>
            <div className='h-[200px] rounded-md w-[300px] bg-purple-300'></div>
            <div className='h-[300px] rounded-md w-[300px] bg-rose-300'></div>
        </div>

        <div>
            <div className='h-[200px] w-[300px] rounded-md bg-amber-300'></div>
            <div className='h-[200px] rounded-md w-[300px] bg-teal-300'></div>
            <div className='h-[200px] rounded-md w-[300px] bg-blue-300'></div>
            <div className='h-[200px] rounded-md w-[300px] bg-purple-300'></div>
            <div className='h-[300px] rounded-md w-[300px] bg-rose-300'></div>
        </div>

        <div>
            <div className='h-[200px] w-[300px] rounded-md bg-amber-300'></div>
            <div className='h-[200px] rounded-md w-[300px] bg-teal-300'></div>
            <div className='h-[200px] rounded-md w-[300px] bg-blue-300'></div>
            <div className='h-[200px] rounded-md w-[300px] bg-purple-300'></div>
            <div className='h-[300px] rounded-md w-[300px] bg-rose-300'></div>
        </div>

        <div>
            <div className='h-[200px] w-[300px] rounded-md bg-amber-300'></div>
            <div className='h-[200px] rounded-md w-[300px] bg-teal-300'></div>
            <div className='h-[200px] rounded-md w-[300px] bg-blue-300'></div>
            <div className='h-[200px] rounded-md w-[300px] bg-purple-300'></div>
            <div className='h-[300px] rounded-md w-[300px] bg-rose-300'></div>
        </div>

        <div>
            <div className='h-[200px] w-[300px] rounded-md bg-amber-300'></div>
            <div className='h-[200px] rounded-md w-[300px] bg-teal-300'></div>
            <div className='h-[200px] rounded-md w-[300px] bg-blue-300'></div>
            <div className='h-[200px] rounded-md w-[300px] bg-purple-300'></div>
            <div className='h-[300px] rounded-md w-[300px] bg-rose-300'></div>
        </div>

      </div>
    </div>
  )
}

export default Gallery