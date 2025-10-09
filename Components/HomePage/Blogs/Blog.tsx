import React from 'react'
import Blog1 from '../../../public/images/blog-01.png'
import Blog2 from '../../../public/images/blog-02.png'
import Blog3 from '../../../public/images/blog-03.png'
import iconMan from '../../../public/images/icon-man.svg'
import iconCal from '../../../public/images/icon-calender.svg'
import Image from 'next/image'
import Link from 'next/link'

const Blog = () => {
  return (
    <div className="relative w-full pt-0 md:pt-3 pb-10 md:pb-18 mb-20 md:mb-18">
      <div className="relative z-20 flex flex-col items-center justify-center mt-10">
        <div className="w-full max-w-full text-center" data-aos="fade-down" data-aos-duration="1300">
          <h1 className="w-full text-[30px] mt-5 md:mt-0 md:text-[44px] md:mx-auto max-w-full md:max-w-[550px] font-medium md:font-bold">
            Latest Blogs & News
          </h1>
          <p className="w-full mt-5 max-w-full md:max-w-[600px] mx-auto text-gray-500 text-[18px] md:text-[18px] px-5 md:px-0">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using.
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="w-full gap-10 grid grid-cols-1 md:grid-cols-3 mt-20 px-10 md:px-0" data-aos="fade-down" data-aos-duration="1500">
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
    </div>
  )
}

export default Blog
