import React from 'react'
import Image from 'next/image'
import brand1 from '../../../public/images/brand-light-01.svg'
import brand2 from '../../../public/images/brand-light-02.svg'
import brand3 from '../../../public/images/brand-light-03.svg'
import brand4 from '../../../public/images/brand-light-04.svg'
import brand5 from '../../../public/images/brand-light-05.svg'
import brand6 from '../../../public/images/brand-light-06.svg'

const GlobalBrand = () => {
  return (
    <div className="relative w-full pt-0 md:pt-3 pb-10 md:pb-18 mb-20 md:mb-18">
      <div className="relative z-20 flex flex-col items-center justify-center mt-10">
        <div className="w-full max-w-full text-center" data-aos="fade-down" data-aos-duration="1200">
          <h1 className="w-full text-[30px] mt-5 md:mt-0 md:text-[44px] md:mx-auto max-w-full md:max-w-[550px] font-medium md:font-bold">
            Trusted by Global Brands
          </h1>
          <p className="w-full mt-5 max-w-full md:max-w-[600px] mx-auto text-gray-500 text-[18px] md:text-[18px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using.
          </p>
        </div>

        {/* Image content  */}
        <div className='grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-6 w-full mt-8 items-center ml-20 mr-0 md:mr-10 xl:mr-0 text-gray-300 hover:text-gray-400' data-aos="fade-down" data-aos-duration="1500">
          <Image src={brand1}  alt='brand1' />
          <Image src={brand2}  alt='brand2' />
          <Image src={brand3}  alt='brand3' />
          <Image src={brand4}  alt='brand4' />
          <Image src={brand5}  alt='brand5' />
          <Image src={brand6}  alt='brand6' />
        </div>

      </div>

      <hr className='w-full text-gray-200 mt-26' />
    </div> 
   
  )
}

export default GlobalBrand
