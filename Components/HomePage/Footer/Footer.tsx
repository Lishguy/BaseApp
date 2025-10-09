import React from 'react'
import LogoLight from '/public/images/logo-light.svg'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance, FaPaperPlane } from "react-icons/fa"
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='px-10 mt-10'>
    <div className='grid grid-cols-1 md:grid-cols-[25%_15%_15%_15%_25%] gap-6 mb-28'>
      <div className='flex flex-col max-w-[300px]' data-aos="fade-down" >
        <Image src={LogoLight} alt='Logo Light' />
        <p className='mt-5 text-gray-500/90 mb-10 text-[17px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        {/* Social  */}
        <div className='flex items-center gap-6  text-gray-300 '>
          <FaFacebookF className='hover:text-blue-600/80' size={20} />
          <FaTwitter className='hover:text-blue-600/80' size={20} />
          <FaLinkedinIn className='hover:text-blue-600/80' size={20} />
          <FaBehance className='hover:text-blue-600/80' size={22} />
        </div>
      </div>

      {/* Quick Link  */}
      <div className='flex flex-col' data-aos="fade-down" data-aos-duration="1100">
        <h1 className='text-[22px] font-medium'>
          Quick Links
        </h1>
        {/* Links  */}
        <div className='mt-7 text-gray-500/80 text-[17px]'>
          <div className='hover:text-blue-600/80 pb-2'>
            <Link href='/'><p>Home</p></Link>
          </div>
          
          <div className='hover:text-blue-600/80 pb-2'>
            <Link href='/'><p>Product</p></Link>
          </div>
          
          <div className='flex items-center  pb-2'>
            <div className='hover:text-blue-600/80'>
              <Link href='/'><p>Careers</p></Link>
            </div>
            <div className='ml-4'>
              <Link href='/'><button className='bg-green-500 hover:shadow-sm px-3 py-0 rounded-full text-white text-[14px]'>Hiring</button></Link>
            </div>
          </div>
          <div className=' pb-2 hover:text-blue-600/80'>
            <Link href='/'><p>Pricing</p></Link>
          </div>      
        </div>
        
      </div>

        {/* Services  */}
      <div className='flex flex-col' data-aos="fade-down" data-aos-duration="1200">
        <h1 className='text-[22px] font-medium'>
          Services
        </h1>
         {/* Links  */}
        <div className='mt-7 text-gray-500/80 text-[17px]'>
          <div className='hover:text-blue-600/80 pb-2'>
            <Link href='/'><p>Web Development</p></Link>
          </div>
          
          <div className='hover:text-blue-600/80 pb-2'>
            <Link href='/'><p>Graphics Design</p></Link>
          </div>
          
          <div className='flex items-center hover:text-blue-600/80 pb-2'>
              <Link href='/'><p>Digital Marketing</p></Link>
          </div>

          <div className=' pb-2 hover:text-blue-600/80'>
            <Link href='/'><p>Ui/Ux Design</p></Link>
          </div>      
        </div>
        
      </div>


        {/* Support  */}
      <div className='flex flex-col' data-aos="fade-down" data-aos-duration="1300">
        <h1 className='text-[22px] font-medium'>
          Support
        </h1>
         {/* Links  */}
        <div className='mt-7 text-gray-500/80 text-[17px]'>
          <div className='hover:text-blue-600/80 pb-2'>
            <Link href='/'><p>Company</p></Link>
          </div>
          
          <div className='hover:text-blue-600/80 pb-2'>
            <Link href='/'><p>Press Media</p></Link>
          </div>
          
          <div className='flex items-center hover:text-blue-600/80 pb-2'>
              <Link href='/'><p>Our Blog</p></Link>
          </div>

          <div className=' pb-2 hover:text-blue-600/80'>
            <Link href='/'><p>Contact Us</p></Link>
          </div>      
        </div>
        
      </div>

        {/* NewsLetter  */}
      <div className='flex flex-col' data-aos="fade-down" data-aos-duration="1400">
        <h1 className='text-[22px] font-medium'>
          Newsletter
        </h1>
        <p className='mt-7 text-gray-500/80 text-[17px] max-w-full md:max-w-[250px] hover:text-blue-600/80 cursor-pointer'>
          Subscribe to receive future updates
        </p>
        <div className='flex items-center justify-between mt-7 border px-6 py-3 rounded-full border-gray-300 text-gray-500/80 
        max-w-full md:max-w-[270px] focus-within:border-blue-500  transition-all duration-300  '>
          <input type="text" className='border-none outline-none' placeholder='Email Address' />
          <FaPaperPlane />  
        </div>
        
      </div>    
    </div>
  
    {/* hr  */}
    <div className='px-5'>
      <hr className='text-gray-300'/>
    </div>

    {/* copy right  */}
    <div className='
      flex flex-col md:flex-row      
      justify-center md:justify-between  
      items-center text-center md:text-left 
      mx-auto md:mx-0 mt-6 mb-6 px-4 text-gray-500/80
    '>
      {/* left content  */}
      <div className='flex items-center gap-6'>
        <p>English</p>
        <p>Privacy Policy</p>
        <p>Support</p>
      </div>

      {/* right content  */}
      <div className='text-[16px] mt-5 md:mt-0'  >
        © 2025 Base. All rights reserved
      </div>

    </div>
    </div>
  )
}

export default Footer
