import Image from 'next/image'
import React from 'react'
import spiral from '../../../public/images/shape-08.svg'
import circle from '../../../public/images/shape-10.svg'
import triangleIcon from '../../../public/images/shape-11.svg'
import team1 from '../../../public/images/team-01.png'
import team2 from '../../../public/images/team-02.png'
import team3 from '../../../public/images/team-03.png'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link'


const Team = () => {
  return (
    <div className='relative w-full pt-0 md:pt-22 mb-[1000px] md:mb-70 bg-gray-100/80 h-[600px]'>
      {/* spiral image */}
      <Image src={spiral} className='absolute hidden md:flex left-0 mt-[-88px] z-0' alt='spiral image' />
      <div className='relative z-10'>
        <Image src={circle} alt='circle' className='absolute hidden sm:flex md:ml-64 mt-14 ml-20 md:mt-[-40px] z-10' />
        <Image src={triangleIcon} alt='triangle' className='absolute hidden md:flex ml-[800px] xl:ml-[1000px] mt-10 z-10 animate-rotate-bounce'/>
      </div>

      {/* Main content */}
      <div className='relative z-20 flex flex-col items-center justify-center mt-10'>
        <div className='w-full max-w-full md:max-w-[1000px] text-center' data-aos="fade-down">
          <h1 className='w-full  text-[28px] mt-5 md:mt-0 md:text-[44px] md:mx-auto max-w-full md:max-w-[500px] font-bold'>
            Meet With Our Creative Dedicated Team
          </h1>
          <p className='w-full mt-6 max-w-full md:max-w-[600px] mx-auto text-gray-500 text-[18px] md:text-[17px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus.
          </p>
        </div>

        {/* ✅ Changed cards to a .map() loop for cleaner code */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-20' data-aos="fade-down">
          {[{ img: team1, name: "Olivia Andrium", role: "Product Manager" },
            { img: team2, name: "Jemse Kemorun", role: "Product Designer" },
            { img: team3, name: "Avi Pestarica", role: "Web Designer" }
          ].map((member, i) => (
            
            <div key={i} className='w-[300px] mx-auto'>
              {/* ✅ Added group wrapper for hover effect */}
              <div className='relative group overflow-hidden rounded-lg'>
                {/* Team Image with hover scale */}
                <Image 
                  src={member.img} 
                  className='rounded-lg w-full  group-hover:scale-105 transition-transform duration-500 ease-in-out' // ✅ Added smooth zoom effect
                  alt={member.name} 
                />
                
                {/* ✅ Changed overlay: added diagonal clip, rounded bottom, smoother slide */}
                <div className='absolute bottom-0 left-0 w-full h-20 bg-[#4B6BFB] 
                                clip-path-diagonal 
                                rounded-b-lg 
                                translate-y-full group-hover:translate-y-0 
                                transition-transform duration-500 ease-out delay-100'>
                  
                  {/* ✅ Added red bar with rounded edge */}
                  <span className='absolute top-0 right-0 w-8 h-2 bg-[#ff6980e8] rounded-bl-lg'></span>

                  {/* Social icons */}
                  <div className='flex justify-center items-center pt-10 gap-6 py-4 text-white'>
                    <Link href={'/'}><FaFacebookF className='cursor-pointer hover:text-[#ff7287e8]' size={17} /></Link>
                    <Link href={'/'}><FaTwitter className='cursor-pointer hover:text-[#ff7287e8]' size={17} /></Link>
                    <Link href={'/'}><FaLinkedinIn className='cursor-pointer hover:text-[#ff7287e8]' size={17}/></Link>
                  </div>
                </div>
              </div>

              {/* Name & Role */}
              <h1 className='text-center text-2xl font-medium mt-5'>{member.name}</h1>
              <p className='text-center text-gray-500/80 mt-[2px] text-[17px]'>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team
