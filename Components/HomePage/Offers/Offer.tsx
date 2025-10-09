import React from 'react'
import { OfferList } from '@/constant/constant'
import Image from 'next/image'

const Offer = () => {
  return (
    <div className='px-4 md:px-9 w-full pt-10 md:pt-22 pb-20'>

      <div className='flex flex-col items-center justify-center mt-10' >
        <div className='w-full max-w-full md:max-w-[1000px] text-center' data-aos="fade-down">
          <h1 className='w-full text-[28px] md:text-[31px] mt-5 md:mt-0 md:mx-auto max-w-full md:max-w-[500px] font-bold'>
            We Offer The Best Quality Service for You
          </h1>
          <p className='w-full mt-6 max-w-full md:max-w-[550px] mx-auto text-gray-500 text-[18px] md:text-[17px]'>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
          </p>
        </div>

        {/* Cards  */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10  w-full mt-16 px-0 sm:px-8 md:px-0 ' data-aos="fade-down" data-aos-duration="1400">
          {OfferList.map((offer)=>(
            <div key={offer.id} 
              className='flex flex-col p-10  mx-0 md:mx-5 rounded-xl bg-white  hover:shadow-xl transition-shadow duration-300 ease-out cursor-pointer'>
              <Image src={offer.img} alt='icons'/>
              <h2 className='text-[22px] md:text-[26px] font-medium mt-7 mb-5'>{offer.title}</h2>
              <p className='text-gray-500 text-[17px]'>{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
   
    </div>
  )
}

export default Offer
