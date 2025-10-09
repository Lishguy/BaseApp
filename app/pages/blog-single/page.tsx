import Image from 'next/image'
import React from 'react'
import blogbig from '../../../public/images/blog-big.png'
import blog1 from '../../../public/images/blog-04.png'
import blog2 from '../../../public/images/blog-05.png'
import smallblog1 from '../../../public/images/blog-small-01.png'
import smallblog2 from '../../../public/images/blog-small-02.png'
import smallblog3 from '../../../public/images/blog-small-03.png'
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn, FaSearch } from "react-icons/fa";


const blogsingle = () => {
  return (
    <div className='pt-48 pb-28 w-full'>
      <div className="grid grid-cols-1 md:grid-cols-[70%_30%] px-9 gap-10">
        {/* Content left  */}
        <div className='flex flex-col mr-0 md:mr-7' data-aos="fade-down" data-aos-duration="1300">
          {/* Left Image  */}
          <div className='w-full'>
            <Image src={blogbig} alt='blog big' />
          </div>

          <div className=''>
            <h1 className='text-3xl font-medium mt-10'>Kobe Steel plant that supplied</h1>
            <div className='flex items-center gap-6 mt-6'>
              <div className='flex flex-col'>
                <h1 className='text-[17px]'>Author:</h1>
                <p className='text-gray-500/90 text-[17px]'>David Cleriya</p>
              </div>

              <div className='flex flex-col'>
                <h1 className='text-[17px]'>Published On:</h1>
                <p className='text-gray-500/90 text-[17px]'>April 16, 2025</p>
              </div>

              <div className='flex flex-col'>
                <h1 className='text-[17px]'>Category:</h1>
                <p className='text-gray-500/90 text-[17px]'>Events</p>
              </div>
            </div>

            <div className='text-gray-500/90 text-[16.5px] mt-10'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur leo. Ut venenatis rhoncus quam sed condimentum. Curabitur vel turpis in dolor volutpat imperdiet in ut mi. Integer non volutpat nulla. Nunc elementum elit viverra, tempus quam non, interdum ipsum.</p>
              <p className='my-5'>Aenean augue ex, condimentum vel metus vitae, aliquam porta elit. Quisque non metus ac orci mollis posuere. Mauris vel ipsum a diam interdum ultricies sed vitae neque. Nulla porttitor quam vitae pulvinar placerat. Nulla fringilla elit sit amet justo feugiat sodales. Morbi eleifend, enim non eleifend laoreet, odio libero lobortis lectus, non porttitor sem urna sit amet metus. In sollicitudin quam est, pellentesque consectetur felis fermentum vitae.</p>
            </div>
          
            {/* Single Blog Image */}
            <div className='flex items-center gap-11 pt-7'>
              <Image src={blog1} alt='blog 1' />
              <Image src={blog2} alt='blog 1' />
            </div>

            {/* powerful force  */}
            <div className=' mt-10'>
              <h1 className='pb-8 text-3xl font-medium'>The powerful force of humanity</h1>
              <p className='text-gray-500/90 text-[16.5px] pb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur leo. Ut venenatis rhoncus quam sed condimentum. Curabitur vel turpis in dolor volutpat imperdiet in ut mi. Integer non volutpat nulla. Nunc elementum elit viverra, tempus quam non, interdum ipsum.</p>
              <div className='flex items-center gap-5'>
                <h1>Share On:</h1>
                {/* socials  */}
                <div className='flex items-center gap-4'>
                  <div className='text-white bg-blue-900 hover:bg-blue-950/60 p-2 rounded-full cursor-pointer'>
                    <FaFacebookF />
                  </div>
                  <div className='text-white bg-blue-500 hover:bg-blue-600/90 p-2 rounded-full cursor-pointer'>
                    <FaTwitter />
                  </div>
                  <div className='text-white bg-red-700 hover:bg-red-800/90 p-2 rounded-full cursor-pointer'>
                    <FaPinterestP />
                  </div>
                  <div className='text-white bg-blue-800/80 hover:bg-blue-900/80 p-2 rounded-full cursor-pointer'>
                    <FaLinkedinIn />
                  </div>   
                </div>

              </div>
            </div>

          </div>
        </div>


        {/* Content right  */}
        <div className='flex flex-col' data-aos="fade-down" data-aos-duration="1700">
          {/* search  */}
          <div className='flex justify-between items-center shadow-md py-5 px-8 rounded-full'>
            <input type="text" className='outline-none  ' placeholder='Search Here...' />
            <FaSearch className='text-gray-500' />
          </div>
          

          {/* Categories  */}
          <div className='flex flex-col list-none'>
            <h1 className='text-2xl my-7 font-medium'>Categories</h1>
            <div className=''>
              <li className='text-gray-500 hover:text-blue-500 cursor-pointer mb-4 text-[17px]'>Blog</li>
              <li className='text-gray-500 hover:text-blue-500 cursor-pointer mb-4 text-[17px]'>Events</li>
              <li className='text-gray-500 hover:text-blue-500 cursor-pointer mb-4 text-[17px]'>Grids</li>
              <li className='text-gray-500 hover:text-blue-500 cursor-pointer mb-4 text-[17px]'>News</li>
              <li className='text-gray-500 hover:text-blue-500 cursor-pointer mb-4 text-[17px]'>Rounded</li> 
            </div>
          </div>

          {/* Related Posts  */}
          <div className='flex flex-col mt-6'>
            <h1 className='text-2xl font-medium pb-8'>Related Posts</h1>
            <div className='flex items-center gap-4 mb-6 '>
              <Image src={smallblog1} alt='smallblog 1' className='w-24 h-20'  />
              <h1 className='hover:text-blue-600/80 cursor-pointer text-[21px] font-medium '>Free advertising for your online business</h1>
            </div>

             <div className='flex items-center gap-6 mb-6'>
              <Image src={smallblog2} alt='smallblog 1' className='w-24 h-20'  />
              <h1 className='hover:text-blue-600/80 cursor-pointer text-[21px] font-medium'>9 simple ways to improve your design skills</h1>
            </div>

             <div className='flex items-center gap-6 mb-6'>
              <Image src={smallblog3} alt='smallblog 1' className='w-24 h-20'  />
              <h1 className='hover:text-blue-600/80 cursor-pointer text-[21px] font-medium'>Tips to quickly improve your coding speed.</h1>
            </div>
          </div>

        </div>
      </div>  

        {/* Start Ups  */}
      <div className='bg-blue-600/90 w-full py-20 px-6 mt-28'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
          {/* Left content  */}
          <div className='flex flex-col gap-4' data-aos="fade-right" data-aos-duration="1400">
            <h1 className='text-3xl md:text-[40px] xl:text-[45px] font-bold text-white leading-snug'>
              Join with 5000+ Startups Growing with Base.
            </h1>
            <p className='text-white text-[16px] md:text-[17px] w-full'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur leo. Ut venenatis rhoncus.
            </p>
          </div>

          {/* button  */}
          <div className='flex md:justify-end mt-10 md:mt-0 ' data-aos="fade-left" data-aos-duration="1500">
            <button className='bg-white text-black px-8 py-3 rounded-full text-lg font-medium hover:shadow-md cursor-pointer transition-transform'>
              Get started Now
            </button>
          </div>
        </div>
      </div>
         
    </div>
  )
}

export default blogsingle
