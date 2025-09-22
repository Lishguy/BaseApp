'use client'

import Image from 'next/image'
import React from 'react'
import smallSpiral from '../../../public/images/shape-03.svg'
import smallcircle from '../../../public/images/shape-06.svg'
import Spiral1 from '../../../public/images/shape-12.svg'
import Spiral2 from '../../../public/images/shape-13.svg'
import { useState } from 'react'

const Price = () => {

  const [isAnnual, setIsAnnual] = useState(false);

  const prices = {
    monthly: [29, 59, 139],
    annual: [149, 608, 1568],
  }

  return (
    <div className='relative w-full pt-0 md:pt-22 pb-10 md:pb-18 mb-20 md:mb-16  bg-gray-100/80'>
           {/* spiral image */}
              {/* bottom spiral  */}
              <Image src={Spiral1} className='absolute hidden md:flex left-0 mt-[-88px] z-0' alt='spiral image' />
              {/* top spiral  */}
              <Image src={Spiral2} className='absolute hidden md:flex mt-[-88px] ml-20 xl:ml-64 z-0' alt='spiral image' />
              <div className='relative z-10'>
                <Image src={smallcircle} alt='smallcircle' className='absolute hidden sm:flex  md:ml-24 mt-14 ml-20 md:mt-[-40px] z-10' />
                <Image src={smallSpiral} alt='small spiral' className='absolute hidden md:flex ml-[800px] xl:ml-[930px] mt-52 z-10'/>
              </div>
        
              {/* Main content */}
              <div className='relative z-20 flex flex-col items-center justify-center mt-10'>
                <div className='w-full max-w-full  text-center'>
                  <h1 className='w-full text-[26px] mt-5 md:mt-0 md:text-[44px] md:mx-auto max-w-full md:max-w-[550px] font-medium md:font-bold'>
                    We Offer Great Affordable Premium Prices.
                  </h1>
                  <p className='w-full mt-6 max-w-full md:max-w-[600px] mx-auto text-gray-500 text-[18px] md:text-[17px]'>
                   It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.
                  </p>

                  {/* Bill toggle  */}
                  <div className='flex items-center justify-center mt-14 gap-5'>
                    {/* Monthly Label */}
                    <span className={`text-[16px] font-medium ${!isAnnual ? "text-black" : "text-gray-400"}`}>
                      Bill Monthly
                    </span>

                    {/* Toggle Button */}
                    <button
                      onClick={() => setIsAnnual(!isAnnual)}
                      className='relative w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 bg-blue-600 cursor-pointer'
                    >
                      <span
                        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                          isAnnual ? "translate-x-6" : "translate-x-0"
                        }`}
                      ></span>
                    </button>

                    {/* Annual Label */}
                    <span className={`text-[16px] font-medium ${isAnnual ? "text-black" : "text-gray-400"}`}>
                      Bill Annually
                    </span>
                  </div>
                </div> 
            </div>

            <div className='relative z-10 max-w-full mx-10 md:mx-20 mt-20'>
            {/* Price List  */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                  {/* card 1  */}
                  <div className='bg-white items-center justify-center text-center py-6  rounded-lg'>
                    <h2 className='text-2xl font-medium mt-2 mb-8 text-black/80'>Starter</h2>
                    <div className='flex items-center justify-center text-center '>
                      <h1 className=' text-[36px] md:text-[44px] font-bold pr-1'>
                        ${isAnnual ? prices.annual[0] : prices.monthly[0]} {/* ✅ price switches here */}
                      </h1>
                      <span className='text-[15px]'>{isAnnual ? "/per year" : "/per month"}</span>
                    </div>
                    <p className='mt-1 text-gray-400 text-lg'>No credit card required</p>
                    <button className='px-12 py-2 text-lg text-white hover:bg-blue-600 bg-[#fd035f94] cursor-pointer mt-7 rounded-full '>
                      Try for free
                    </button>
                    <p className='text-gray-400 mt-5 text-[17px]'>400 GB Storage</p>
                    <p className='text-gray-400 mt-3 text-[17px]'>Unlimited Photos & Videos</p>
                    <p className='text-gray-400 mt-3 text-[17px]'>Exclusive support</p>
                    <p className='text-black mt-9 text-[17px]'>7-day free trial</p>
                  </div>

                {/* card 2  */}
                   <div className='bg-white items-center justify-center text-center py-6  rounded-lg'>
                    <h2 className='text-2xl font-medium mt-2 mb-8 text-black/80'>Starter</h2>
                    <div className='flex items-center justify-center text-center '>
                      <h1 className='text-[36px] md:text-[44px]x] font-bold pr-1'>
                        ${isAnnual ? prices.annual[1] : prices.monthly[1]} {/* ✅ price switches here */}
                      </h1>
                      <span className='text-[15px]'>{isAnnual ? "/per year" : "/per month"}</span>
                    </div>
                    <p className='mt-1 text-gray-400 text-lg'>No credit card required</p>
                    <button className='px-12 py-2 text-lg text-white bg-blue-600 hover:bg-[#fd035f94] cursor-pointer mt-7 rounded-full '>
                      Try for free
                    </button>
                    <p className='text-gray-400 mt-5 text-[17px]'>600 GB Storage</p>
                    <p className='text-gray-400 mt-3 text-[17px]'>Unlimited Photos & Videos</p>
                    <p className='text-gray-400 mt-3 text-[17px]'>Exclusive support</p>
                    <p className='text-black mt-9 text-[17px]'>7-day free trial</p>
                  </div>

                  {/* card 3  */}
                  <div className='bg-white items-center justify-center text-center py-6  rounded-lg'>
                    <h2 className='text-2xl font-medium mt-2 mb-8 text-black/80'>Starter</h2>
                    <div className='flex items-center justify-center text-center '>
                      <h1 className='text-[36px] md:text-[44px] font-bold pr-1'>
                        ${isAnnual ? prices.annual[2] : prices.monthly[2]} {/* ✅ price switches here */}
                      </h1>
                      <span className='text-[15px]'>{isAnnual ? "/per year" : "/per month"}</span>
                    </div>
                    <p className='mt-1 text-gray-400 text-lg'>No credit card required</p>
                    <button className='px-12 py-2 text-lg text-white hover:bg-blue-600 bg-[#fd035f94] cursor-pointer mt-7 rounded-full '>
                      Try for free
                    </button>
                    <p className='text-gray-400 mt-5 text-[17px]'>800 GB Storage</p>
                    <p className='text-gray-400 mt-3 text-[17px]'>Unlimited Photos & Videos</p>
                    <p className='text-gray-400 mt-3 text-[17px]'>Exclusive support</p>
                    <p className='text-black mt-9 text-[17px]'>7-day free trial</p>
                  </div>
                </div>
            </div>
      
    </div>
  )
}

export default Price
