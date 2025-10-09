"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import googleicon from '../../../public/images/google.png'
import { FaTwitter, FaFacebookF, FaGithub } from "react-icons/fa";
import Link from 'next/link';
import halfcircle from '../../../public/images/shape-03.svg'
import spiral from '../../../public/images/shape-06.svg'
import invertedcircle from '../../../public/images/shape-17.svg'
import bgimg from '../../../public/images/shape-18.svg'

const Signin = () => {
  // manage form inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // handle sign in click
  const handleSignIn = () => {
    // Here you can also handle your auth logic
    console.log("Signing in with:", { username, password });

    // Clear inputs
    setUsername("");
    setPassword("");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-28 mb-20 relative overflow-hidden">
      {/* Background Shapes */}
       <Image 
        src={bgimg} 
        alt="bgimg" 
        className="absolute bottom-0 right-32 z-0 w-20 h-20"
      />
      <Image 
        src={spiral} 
        alt="half circle" 
        className="absolute top-1/3 left-0 -translate-y-1/2 z-0 w-24 h-24"
      />
      <Image 
        src={halfcircle} 
        alt="spiral" 
        className="absolute bottom-[460px] right-60 z-0 w-20 h-20"
      />
      <Image 
        src={invertedcircle} 
        alt="inverted circle" 
        className="absolute bottom-5 right-5 z-0 w-24 h-24"
      />

      {/* Signin Form */}
      <div className="relative flex flex-col max-w-full md:max-w-lg mx-auto py-20 bg-white rounded-lg items-center justify-center mt-16 z-10 shadow-md">
        <div className="absolute top-0 left-0 w-full h-[6px] flex z-40 rounded-lg">
          <div className="w-1/2 h-full bg-blue-600 rounded-tl-lg" />
          <div className="w-1/2 h-full bg-[#fd035fb8] rounded-tr-lg" />
        </div>

        <div className="relative z-10 w-full px-2 flex flex-col mx-auto justify-center items-center">
          <h1 className="text-[30px] font-medium text-center mb-1">Sign in to your Account</h1>
          <p className='text-gray-500 text-[17.5px] '>Lorem ipsum dolor sit amet, consectetur</p>
          <p className='mt-5 text-[18px]'>Sign in with Social Media</p>

          {/* socials */}
          <div className="flex gap-6 mt-5">
            {/* Google */}
            <button className="p-3 border border-gray-300 hover:border-blue-200/80 shadow-blue-50 rounded-lg hover:shadow-md transition cursor-pointer">
              <Image src={googleicon} alt='googleicon' className='w-5' />
            </button>

            {/* Twitter */}
            <button className="p-3 border border-gray-300 hover:border-blue-200/80 shadow-blue-50 rounded-lg hover:shadow-md transition cursor-pointer">
              <FaTwitter className="text-[#1DA1F2] text-xl" />
            </button>

            {/* Facebook */}
            <button className="p-3 border border-gray-300 hover:border-blue-200/80 shadow-blue-50 rounded-lg hover:shadow-md transition cursor-pointer">
              <FaFacebookF className="text-[#1877F2] text-xl" />
            </button>

            {/* Github */}
            <button className="p-3 border border-gray-300 hover:border-blue-200/80 shadow-blue-50 rounded-lg hover:shadow-md transition cursor-pointer">
              <FaGithub className="text-gray-500 text-xl" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-3 w-[75%] mt-8">
            <hr className="flex-grow border-gray-300" />
            <p className="text-gray-500/90 text-[17px] whitespace-nowrap">
              Or, sign in with your email
            </p>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* input field */}
          <div className='w-[75%] mt-10'>
            <div className='flex flex-col mb-6 gap-3'>
              <label className='text-[17px]'>Email</label>
              <input
                type="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='py-3 px-6 border border-gray-300/80 rounded-full placeholder:text-gray-400/80 outline-none'
                placeholder='example@gmail.com'
              />
            </div>


            <div className='flex flex-col mb-6 gap-3'>
              <label className='text-[17px]'>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='py-3 px-6 border border-gray-300/80 rounded-full placeholder:text-gray-400/80 outline-none'
                placeholder='***********'
              />
            </div>

            <button
              onClick={handleSignIn}
              className='bg-blue-600/80 cursor-pointer hover:shadow-md py-3 px-6 rounded-full w-full text-white text-[17px]'
            >
              Sign In
            </button>
            <p className='items-center text-center mt-6 text-[18px] text-gray-500/80'>
              Don't have an account? <Link href='/pages/sign-up' className='text-blue-600 text-[18px]'>Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
