import Image from 'next/image'
import React from 'react'
import Active1 from '../../../public/images/Active1.png'
import Active2 from '../../../public/images/Active2.png'
import Active3 from '../../../public/images/Active3.png'

const Active = () => {
  return (
    <div className='px-4 md:px-9 w-full pt-0 md:pt-22 pb-20'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14'>
            {/* Active 1  */}
                <div className='flex flex-row justify-normal md:justify-between items-center gap-4 md:gap-6'>
                    <Image className='bg-[#fd035fb8] rounded-full p-5 w-18 md:w-22' src={Active1} alt='' />
                    <div className='flex flex-col'>
                        <h1 className='font-medium text-lg md:text-2xl'>24/7 Support</h1>
                        <p className='text-gray-500 text-sm md:text-md pt-2'>Lorem ipsum dolor sit amet conse adipiscing elit.</p>
                    </div>
                </div>

            {/* Active 2  */}
            <div className='flex flex-row justify-normal md:justify-between items-center gap-4 md:gap-6'>
                <Image className='bg-[#00ce56] rounded-full p-5  w-18 md:w-22' src={Active2} alt='' />
                <div className='flex flex-col'>
                    <h1 className='font-medium text-lg md:text-2xl'>Take Ownership</h1>
                    <p className='text-gray-500 text-sm md:text-md pt-2'>Lorem ipsum dolor sit amet conse adipiscing elit.</p>
                </div>
             </div>

            {/* Active 3  */}
            <div className='flex flex-row justify-normal md:justify-between items-center gap-4 md:gap-6'>
                <Image className='bg-[#fe8c58] rounded-full p-5  w-18 md:w-22' src={Active3} alt='' />
                <div className='flex flex-col'>
                    <h1 className='font-medium text-lg md:text-2xl'>Team Work</h1>
                    <p className='text-gray-500 text-sm md:text-md pt-2'>Lorem ipsum dolor sit amet conse adipiscing elit.</p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Active
