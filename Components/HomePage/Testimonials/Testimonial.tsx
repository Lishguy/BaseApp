'use client'

import React, { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi' // ✅ Added React Icons
import testimonialImg from '../../../public/images/testimonial.png'
import Image from 'next/image'
import brand1 from '../../../public/images/brand-light-01.svg'
import brand2 from '../../../public/images/brand-light-02.svg'
import brand3 from '../../../public/images/brand-light-03.svg'
import { BiSolidQuoteAltLeft } from "react-icons/bi"

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Devid Smith",
      role: "Founder @democompany",
      image: testimonialImg,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dolor diam, feugiat quis enim sed, ullamcorper semper ligula. Mauris consequat justo volutpat.",
      logo: brand1,
    },
    {
      id: 2,
      name: "Sarah Lee",
      role: "CEO @techworld",
      image: testimonialImg,
      text: "Great experience! This service transformed how we work and communicate with our clients. Highly recommended to any business looking to grow.",
      logo: brand2,
    },
    {
      id: 3,
      name: "James Brown",
      role: "Manager @startup",
      image: testimonialImg,
      text: "Excellent support and user experience. Our team productivity increased significantly after switching to this solution.",
      logo: brand3,
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  const current = testimonials[currentIndex]

  return (
    <div className="relative w-full pt-0 md:pt-3 pb-10 md:pb-18 mb-20 md:mb-18">
      <div className="relative z-20 flex flex-col items-center justify-center mt-10">
        <div className="w-full max-w-full text-center">
          <h1 className="w-full text-[30px] mt-5 md:mt-0 md:text-[44px] md:mx-auto max-w-full md:max-w-[550px] font-medium md:font-bold">
            Client’s Testimonials.
          </h1>
          <p className="w-full mt-5 max-w-full md:max-w-[600px] mx-auto text-gray-500 text-[18px] md:text-[18px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using.
          </p>
        </div>

        {/* ✅ Testimonial Card with right color split */}
        <div className="relative max-w-[1000px] mt-10">
          <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-6 bg-white shadow-md rounded-xl p-8 relative overflow-hidden">
            {/* ✅ Right border with blue top and red bottom */}
            <div className="absolute top-0 right-0 w-[8px] h-full flex flex-col">
              <div className="flex-1 bg-blue-500 rounded-tr-lg"></div>
              <div className="flex-1 bg-red-500 rounded-br-lg"></div>
            </div>

            {/* ✅ Client Image */}
            <div className="flex items-center justify-center">
              <Image
                src={current.image}
                alt={current.name}
                className="rounded-lg object-cover mb-10 md:mb-0"
              />
            </div>

            {/* ✅ Client Testimonial */}
            <div className="flex flex-col justify-between px-5">
              <BiSolidQuoteAltLeft className='text-gray-300' size={60} />
              <p className="text-gray-400 italic font-medium text-xl md:text-[26px] text-left mb-3 mt-3">
                {current.text}
              </p>

              <div className='flex mt-6  itmes-center justify-between px-2'>
                <div className="text-left">
                <h3 className="font-semibold text-xl">{current.name}</h3>
                <p className="text-gray-400 text-lg mt-1">{current.role}</p>
              </div>
              <div className="mt-4">
                <Image src={current.logo} alt="company logo" className="w-28"  />
              </div>
              </div>
             
            </div>
          </div>
        </div>

        {/* ✅ Navigation Buttons with React Icons + hover effect */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full border border-gray-300 text-gray-400 hover:bg-blue-600 hover:text-white transition"
          >
            <FiChevronLeft size={22} />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full border border-gray-300 text-gray-400 hover:bg-blue-600 hover:text-white transition"
          >
            <FiChevronRight size={22} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
