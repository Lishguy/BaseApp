import React from 'react'
import triangle from '../../../public/images/shape-11.svg'
import circle from '../../../public/images/shape-14.svg'
import halfCircle from '../../../public/images/shape-06.svg'
import spiral from '../../../public/images/shape-15.svg'
import Image from 'next/image'

const Stat = () => {
  return (
    <div className='relative bg-gray-200/90 w-full mb-20'>
      {/* Images  */} 
      <Image src={circle} alt='circle' className='absolute flex ml-[200px] md:ml-[400px] xl:ml-[500px] w-14 md:w-16 mt-1 z-10' />
      <Image src={triangle} alt='circle' className='absolute flex z-10 animate-rotate-bounce bottom-0 w-16 ml-4 md:ml-14 mb-3' />
      <Image src={halfCircle} alt='circle' className='absolute flex ml-[500px] md:ml-[950px] xl:ml-[1200px] w-10 md:w-12  z-10' />
       <Image src={spiral} alt='circle' className='absolute flex md:w-16 z-10' />

      {/* main content  */}
      <div className='relative grid grid-cols-2 md:grid-cols-4 mx-auto w-full max-w-full md:max-w-[1200px] gap-6 md:gap-8 items-center pt-26 pb-26'>
        {/* card 1  */}
        <div className='flex flex-col text-center'>
          <h1 className=' text-4xl md:text-[44px] xl:text-6xl font-bold'>785</h1>
          <p className='text-gray-500 font-medium text-[19px] md:text-[22px] mt-3'>Global Brands</p>
        </div>

        {/* card 2  */}
        <div className='flex flex-col text-center'>
           <h1 className='text-4xl md:text-[44px] xl:text-6xl font-bold'>533</h1>
          <p className='text-gray-500 font-medium text-[19px] md:text-[22px] mt-3'>Happy Clients</p>
        </div>

        {/* card 3  */}
        <div className='flex flex-col text-center'>
           <h1 className='text-4xl md:text-[44px] xl:text-6xl font-bold'>865</h1>
          <p className='text-gray-500 font-medium text-[19px] md:text-[22px] mt-3'>Winning Award</p>
        </div>

        {/* card 4  */}
        <div className='flex flex-col text-center'>
           <h1 className='text-4xl md:text-[44px] xl:text-6xl font-bold'>346</h1>
          <p className='text-gray-500 font-medium text-[19px] md:text-[22px] mt-3'>Happy Clients</p>
        </div>

      </div>
      
    </div>
  )
}

export default Stat
