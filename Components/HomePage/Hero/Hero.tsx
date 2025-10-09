import Image from 'next/image'
import React from 'react'
import HeroImg from '../../../public/images/hero.png'


const Hero = () => {
  return (
    <div className="relative w-full min-h-[500px] md:min-h-[600px] flex justify-center flex-col overflow-hidden pt-12 md:pt-14">
      {/* Blue Circle Background */}
      <div className="absolute hidden md:block top-5 right-3 w-[40rem] h-[40rem] bg-blue-600/80 rounded-full -translate-y-1/4 translate-x-1/4"></div>
      
      <div className="px-4 md:px-9 mx-auto items-center grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
        {/* Left Content */}
        <div data-aos='fade-left'>
          
          <h1 className="text-[27px] md:text-4xl  font-bold text-gray-900 leading-tight">
            We specialize in UI/UX, Web Development, Digital Marketing.
          </h1>
          <p className="mt-4 text-gray-500 max-w-[600px] md:max-w-[400px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            fringilla magna mauris. Nulla fermentum viverra sem eu rhoncus
            consequat varius nisi quis, posuere magna.
          </p>
          <div className="mt-6 flex flex-col-reverse  md:flex-row items-start md:items-center gap-4">
            <button className="px-6 py-3 rounded-full bg-blue-600/80 text-white font-medium shadow-lg hover:bg-blue-700 transition">
              Get Started now
            </button>
            <div className='text-left'>
              <h2 className="font-semibold text-gray-900">
                Call us (7045) 771-682
              </h2>
              <p className="text-gray-500 text-sm">For any question or concern</p>
            </div>
          </div>
        </div>

        {/* Right Content (Hero Image) */}
        <div className="relative w-full hidden md:flex justify-center md:justify-end mt-10 md:mt-0" data-aos="zoom-in">
          <div className="relative overflow-hidden ">
            <Image
              src={HeroImg}
              alt="hero"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
