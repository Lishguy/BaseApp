'use client'

import React from 'react'
import Blog1 from '../../../public/images/blog-01.png'
import Blog2 from '../../../public/images/blog-02.png'
import Blog3 from '../../../public/images/blog-03.png'
import iconMan from '../../../public/images/icon-man.svg'
import iconCal from '../../../public/images/icon-calender.svg'
import Image from 'next/image'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Link from 'next/link'


const bloggrid = () => {
  return (
    <div className='py-28'>
      {/* Blog Content 1 */}
        <div className="w-full gap-10 grid grid-cols-1  md:grid-cols-3 mt-20 px-10 md:px-0" data-aos="fade-down" data-aos-duration="1500">
              {[Blog1, Blog2, Blog3].map((blog, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden"
                >
                  {/* ✅ Image + Hover Overlay */}
                  <div className="relative group overflow-hidden">
                    <Image
                      src={blog}
                      alt={`Blog ${index + 1}`}
                      className="w-full object-cover transition duration-500 group-hover:blur-sm"
                    />
      
                    {/* ✅ Overlay: appears on hover, animates from bottom to top */}
                    <div
                      className="absolute inset-0 bg-white/40 backdrop-blur-md 
                      translate-y-full group-hover:translate-y-0 
                      flex justify-center items-center 
                      opacity-0 group-hover:opacity-100 
                      transition-all duration-500 ease-in-out"
                    >
                      <button className="bg-blue-600 text-white text-lg px-8 py-3 rounded-full shadow-md hover:bg-[#fd035f94] transition">
                       <Link href='/pages/blog-single'>Read More</Link> 
                      </button>
                    </div>
                  </div>
      
                  {/* Blog Content */}
                  <div className="flex gap-6 mx-6 mt-6 items-center">
                    <div className="flex gap-2 items-center">
                      <Image src={iconMan} alt="iconMan" />
                      <p className="text-[18px] text-gray-500">Musharof Chy</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Image src={iconCal} alt="iconCalender" />
                      <p className="text-[18px] text-gray-500">25 Dec, 2025</p>
                    </div>
                  </div>
                  <h1 className="text-[26px] cursor-pointer leading-8 font-medium mx-6 mb-8 mt-6 hover:text-blue-600">
                    {index === 0
                      ? 'Free advertising for your online business'
                      : index === 1
                      ? '9 simple ways to improve your design skills'
                      : 'Tips to quickly improve your coding speed'}
                  </h1>
                </div>
              ))}
        </div>
      {/* Blog content 2  */}
       <div className="w-full gap-10 grid grid-cols-1  md:grid-cols-3 mt-20 px-10 md:px-0" data-aos="fade-down" data-aos-duration="1500">
              {[Blog1, Blog2, Blog3].map((blog, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden"
                >
                  {/* ✅ Image + Hover Overlay */}
                  <div className="relative group overflow-hidden">
                    <Image
                      src={blog}
                      alt={`Blog ${index + 1}`}
                      className="w-full object-cover transition duration-500 group-hover:blur-sm"
                    />
      
                    {/* ✅ Overlay: appears on hover, animates from bottom to top */}
                    <div
                      className="absolute inset-0 bg-white/40 backdrop-blur-md 
                      translate-y-full group-hover:translate-y-0 
                      flex justify-center items-center 
                      opacity-0 group-hover:opacity-100 
                      transition-all duration-500 ease-in-out"
                    >
                      <button className="bg-blue-600 text-white text-lg px-8 py-3 rounded-full shadow-md hover:bg-[#fd035f94] transition">
                        <Link href='/pages/blog-single'>Read More</Link>  
                      </button>
                    </div>
                  </div>
      
                  {/* Blog Content */}
                  <div className="flex gap-6 mx-6 mt-6 items-center">
                    <div className="flex gap-2 items-center">
                      <Image src={iconMan} alt="iconMan" />
                      <p className="text-[18px] text-gray-500">Musharof Chy</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Image src={iconCal} alt="iconCalender" />
                      <p className="text-[18px] text-gray-500">25 Dec, 2025</p>
                    </div>
                  </div>
                  <h1 className="text-[26px] cursor-pointer leading-8 font-medium mx-6 mb-8 mt-6 hover:text-blue-600">
                    {index === 0
                      ? 'Free advertising for your online business'
                      : index === 1
                      ? '9 simple ways to improve your design skills'
                      : 'Tips to quickly improve your coding speed'}
                  </h1>
                </div>
              ))}
        </div>
    
        <div className="flex gap-3 mt-14 justify-center items-center mx-auto" data-aos="fade-down" data-aos-duration="1500">
            <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-2 rounded-full shadow-md text-gray-500 hover:bg-blue-600 hover:text-white transition"
            >
                <FiChevronLeft size={22} />
            </button>

            <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="py-2 px-4 rounded-full shadow-md text-gray-400 hover:bg-blue-600 hover:text-white transition"
            >
                2
            </button>

            <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="py-2 px-4 rounded-full shadow-md text-gray-400 hover:bg-blue-600 hover:text-white transition"
            >
                3
            </button>

            <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="py-2 px-4 rounded-full shadow-md text-gray-400 hover:bg-blue-600 hover:text-white transition"
            >
                4
            </button>

            <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="py-2 px-4 rounded-full shadow-md text-gray-400 hover:bg-blue-600 hover:text-white transition items-center"
            >
                ...
            </button>

            <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="py-2 px-4 rounded-full shadow-md text-gray-400 hover:bg-blue-600 hover:text-white transition"
            >
                12
            </button>

            <button
            className="p-2 rounded-full shadow-md text-gray-500 hover:bg-blue-600 hover:text-white transition"
            >
                <FiChevronRight size={22} />
            </button>
        </div>

         {/* Start Ups  */}
      <div className='bg-blue-600/90 w-full py-20 px-6 mt-28'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
          {/* Left content  */}
          <div className='flex flex-col gap-4' data-aos="fade-left" data-aos-duration="1400">
            <h1 className='text-3xl md:text-[40px] xl:text-[45px] font-bold text-white leading-snug'>
              Join with 5000+ Startups Growing with Base.
            </h1>
            <p className='text-white text-[16px] md:text-[17px] w-full'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur leo. Ut venenatis rhoncus.
            </p>
          </div>

          {/* button  */}
          <div className='flex md:justify-end mt-10 md:mt-0 ' data-aos="fade-right" data-aos-duration="1500">
            <button className='bg-white text-black px-8 py-3 rounded-full text-lg font-medium hover:shadow-md cursor-pointer transition-transform'>
              Get started Now
            </button>
          </div>
        </div>
      </div>
            
    </div>
  )
}

export default bloggrid