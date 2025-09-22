import React from 'react'
import smallSpiral from '../../../public/images/shape-03.svg'
import Spiral1 from '../../../public/images/shape-12.svg'
import Spiral2 from '../../../public/images/shape-13.svg'
import halfCircle from '../../../public/images/shape-06.svg'
import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance } from "react-icons/fa"

const Connected = () => {
  return (
    <div className='w-full mb-20'>
      <div className='relative w-full pt-0 md:pt-22 pb-36 bg-gray-100/80'>
            {/* bottom spiral  */}
            <Image src={Spiral1} className='absolute flex left-0 bottom-0 z-0' alt='spiral image' />
            {/* top spiral */}
            <Image src={Spiral2} className='absolute flex mt-0 md:mt-[-88px] ml-0 md:ml-20 xl:ml-64 z-0' alt='spiral image' />
              <div className='relative z-10'>
                <Image src={halfCircle} alt='circle' className='absolute flex ml-10 md:ml-40 mt-20  md:mt-[-30px] z-10' />
                <Image src={smallSpiral} alt='small spiral' className='absolute hidden md:flex ml-[800px] xl:ml-[930px] mt-52 z-10'/>
              </div>
      
            {/* Main content */}
            <div className='relative z-20 flex flex-col items-center justify-center mt-10'>
              <div className='w-full max-w-full md:max-w-[1000px] text-center'>
                <h1 className='w-full  text-[32px] mt-16 md:mt-0 md:text-[44px] md:mx-auto max-w-full md:max-w-[500px] font-bold'>
                  Let’s Stay Connected
                </h1>
                <p className='w-full mt-6 max-w-full md:max-w-[600px] mx-auto text-gray-500 text-[18px] md:text-[17px]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus.
                </p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-[30%_70%] gap-8 w-full pr-5 md:pr-16 pl-5 md:pl-8 mt-20'>
                {/* Form Left  */}
                <div className=' bg-white rounded-lg px-6 py-6 order-2 md:order-1'>
                  <div className='justify-end flex items-center'>
                    <Image src={smallSpiral} className='w-8 ' alt='Small Spirral' />
                  </div>
                
                <div className='flex flex-col gap-3  w-full px-6'>

                  {/* Email  */}
                  <div className='flex flex-col mb-5'>
                    <h1 className='text-[22px]'>Email Address</h1>
                    <p className='text-gray-500/90 text-[17px] mt-1'>support@startup.com</p>
                  </div>

                  {/* Location  */}
                  <div className='flex flex-col mb-5'>
                    <h1 className='text-[22px]'>Office Location</h1>
                    <p className='text-gray-500/90 text-[17px] mt-1'>76/A, Green valle, Califonia USA.</p>
                  </div> 

                  {/* Phone  */}
                  <div className='flex flex-col mb-6'>
                    <h1 className='text-[21px]'>Phone Number</h1>
                    <p className='text-gray-500/90 text-[17px] mt-1'>+234 7045771682</p>
                  </div> 

                  {/* Skype Email  */}
                  <div className='flex flex-col '>
                    <h1 className='text-[21px]'>Skype Email</h1>
                    <p className='text-gray-500/90 text-[17px] mt-1'>example@yourmail.com</p>
                  </div> 
                  <hr className='text-gray-300 w-full mt-6' />

                  {/* Socials  */}
                  <div className='flex flex-col mt-6'>
                    <h1 className='text-[21px]'>Social Media</h1>
                    <div className='flex gap-6 items-center mt-5'>
                      {[
                        { icon: <FaFacebookF className='  ' size={17} />, color: "hover:bg-blue-600" },
                        { icon: <FaTwitter className=''  size={17} />, color: "hover:bg-sky-600" },
                        { icon: <FaLinkedinIn className='' size={17} />, color: "hover:bg-blue-700" },
                        { icon: <FaBehance className='' size={17} />, color: "hover:bg-indigo-500" },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className={`p-2 rounded-full transition-all duration-300 cursor-pointer text-gray-500 hover:text-white ${item.color}`}
                        >
                          {item.icon}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                  <div className='justify-end flex items-center mt-9'>
                    <Image src={halfCircle} className='w-6 transform scale-x-[-1] ' alt='Small Spirral' />
                  </div>

                  
                </div>

              {/* Form Right  */}
               
              <div className="bg-white rounded-lg px-6 md:px-16 py-10 md:py-16 order-1 md:order-2">
                {/* ✅ FIXED: proper grid classes for small and md screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col">
                    <label className="text-gray-500 mb-4">Full Name</label>
                    <input
                      type="text"
                      // ✅ FIXED: use w-full by default, then w-[90%] only on md+
                      className="border border-gray-300 rounded-lg py-3 px-6 w-full md:w-[90%] focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 placeholder:text-gray-300"
                      placeholder="Michael Ezekiel"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-gray-500 mb-4">Email Address</label>
                    <input
                      type="email"
                      className="border border-gray-300 rounded-lg py-4 px-6 w-full md:w-[90%] focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 placeholder:text-gray-300"
                      placeholder="example@yourmail.com"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-gray-500 mb-4">Phone Number</label>
                    <input
                      type="text"
                      className="border border-gray-300 rounded-lg py-4 px-6 w-full md:w-[90%] focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 placeholder:text-gray-300"
                      placeholder="+234 7045771682"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-gray-500 mb-4">Subject</label>
                    <input
                      type="text"
                      className="border border-gray-300 rounded-lg py-4 px-6 w-full md:w-[90%] focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 placeholder:text-gray-300"
                      placeholder="Type your subject"
                    />
                  </div>

                  {/* ✅ Full-width textarea */}
                  <div className="flex flex-col col-span-1 md:col-span-2">
                    <label className="text-gray-500 mb-4">Message</label>
                    <textarea
                      className="border border-gray-300 rounded-lg py-4 px-6 w-full h-40 resize-none shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 placeholder:text-gray-300"
                      placeholder="Message"
                    />
                  </div>
                </div>

                {/* button */}
                <div className="flex items-center justify-center pt-10">
                  <button className="rounded-full px-8 py-3 text-white bg-blue-600 hover:bg-blue-700 transition">
                    Send Message
                  </button>
                </div>
              </div>



              </div>
            </div>
          
        
      </div>
      
      {/* Start Ups  */}
      <div className='bg-blue-600/90 w-full py-20 px-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
          {/* Left content  */}
          <div className='flex flex-col gap-4'>
            <h1 className='text-3xl md:text-[40px] xl:text-[45px] font-bold text-white leading-snug'>
              Join with 5000+ Startups Growing with Base.
            </h1>
            <p className='text-white text-[16px] md:text-[17px] w-full'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur leo. Ut venenatis rhoncus.
            </p>
          </div>

          {/* button  */}
          <div className='flex md:justify-end mt-10 md:mt-0 '>
            <button className='bg-white text-black px-8 py-3 rounded-full text-lg font-medium hover:shadow-md cursor-pointer transition-transform'>
              Get started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connected
