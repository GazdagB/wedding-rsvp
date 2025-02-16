const Date = () => {
  return (
    <div id="datum" className='relative h-[860px] bg-fixed  bg-center bg-cover mb-100 flex items-center justify-center  flex-col'
    style={{backgroundImage: "url('images/date-bg.jpg')"}}
    >

        <div className='bg-black inset-0 absolute opacity-50 backdrop-blur-lg z-0'></div>
        <h2 className='dancing text-6xl text-white z-10 mb-10'>Az időpont</h2>
        <img className='z-10 mb-[68px]' src="/images/calendar.png" alt="" />
        <h3 className='text-white text-[56px] dancing z-10'>2025 Szeptember 07. Vasárnap </h3>

    </div>
  )
}

export default Date