import Image from 'next/image'
import React from 'react'
import About1 from '../../../public/images/about-01.png'
import About2 from '../../../public/images/about-02.png'
import About3 from '../../../public/images/about-03.png'
import shape2 from '../../../public/images/shape-06.svg'
import shape3 from '../../../public/images/shape-07.svg'
import Playicon from '../../../public/images/icon-play.svg'



const Service = () => {
  return (
    <div className='px-4 md:px-9 w-full pt-0 md:pt-22 pb-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
        {/* Left Content  */}
        <div className='hidden md:flex gap-10'>
            {/* Content 1  */}
            <div className='flex flex-col gap-6'>
                <Image src={About1} className='' alt=''/>
                <Image src={About2} className='' alt=''/>
            </div>


            {/* Content 2 */}
            <div className='flex flex-col gap-6'>
                <Image src={shape2} className='' alt=''/>
                <Image src={About3} className='' alt=''/>
                <Image src={shape3} className='' alt=''/>
            </div>

        </div>

        {/* Right Content  */}
        <div className='flex flex-col ml-5 mr-5 md:mr-0 md:ml-[60px]'>
            <h2 className='text-lg text-blue-600 font-medium mb-4'>Why Choose Us</h2>
            <h1 className=' text-3xl md:text-[38px] leading-12 font-bold mb-5'>We Make Our customers happy by giving Best services.</h1>
            <p className='text-gray-400 text-md mb-8'>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
            </p>
            {/* button  */}
            <div className='flex gap-6 items-center'>
                <button className='animate-pulse-ring'>
                    <Image src={Playicon} className='bg-blue-500 rounded-full p-2 w-10' alt='' />
                </button>
                <h2>SEE HOW WE WORK</h2>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Service
