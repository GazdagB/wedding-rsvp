import React from 'react'

const Gallery = () => {

    //TODO: implement image upload and gallery display
    //TODO: Implement how many images to show on different screen sizes
  return (
    <div className='flex flex-col items-center justify-center w-full h-full py-10'>
      <h2 className="dancing text-6xl text-wedding-brown z-10 mb-4">I Spy Galéria</h2>
      <p className="text-wedding-light-gray mb-10 text-center text-pretty">Ez a galéria az I Spy játékhoz készült képeket tartalmazza.</p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 w-max '>
        <div className='flex flex-col gap-2'>   
            <div className='h-[200px] w-[300px] rounded-md bg-amber-300'></div>
            <div className='h-[250px] rounded-md w-[300px] bg-teal-300'></div>
            <div className='h-[200px] rounded-md w-[300px] bg-blue-300'></div>
            <div className='h-[200px] rounded-md w-[300px] bg-purple-300'></div>
            <div className='h-[300px] rounded-md w-[300px] bg-rose-300'></div>
        </div>

        <div className='flex flex-col gap-2' >
            <div className='h-[200px] w-[300px] rounded-md bg-amber-300'></div>
            <div className='h-[200px] rounded-md w-[300px] bg-teal-300'></div>
            <div className='h-[200px] rounded-md w-[300px] bg-blue-300'></div>
            <div className='h-[200px] rounded-md w-[300px] bg-purple-300'></div>
            <div className='h-[300px] rounded-md w-[300px] bg-rose-300'></div>
        </div>

        <div className='flex flex-col gap-2'>
            <div className='h-[200px] w-[300px] rounded-md bg-amber-300'></div>
            <div className='h-[200px] rounded-md w-[300px] bg-teal-300'></div>
            <div className='h-[200px] rounded-md w-[300px] bg-blue-300'></div>
            <div className='h-[200px] rounded-md w-[300px] bg-purple-300'></div>
            <div className='h-[300px] rounded-md w-[300px] bg-rose-300'></div>
        </div>

        <div className='flex flex-col gap-2'>
            <div className='h-[200px] w-[300px] rounded-md bg-amber-300'></div>
            <div className='h-[200px] rounded-md w-[300px] bg-teal-300'></div>
            <div className='h-[200px] rounded-md w-[300px] bg-blue-300'></div>
            <div className='h-[200px] rounded-md w-[300px] bg-purple-300'></div>
            <div className='h-[300px] rounded-md w-[300px] bg-rose-300'></div>
        </div>

        <div className='flex flex-col gap-2'>
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