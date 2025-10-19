'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import LogoLight from '/public/images/logo-light.svg'
import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import { BsSun, BsMoon } from 'react-icons/bs'
import { MdClose, MdMenu } from 'react-icons/md'
import { useTheme } from '@/context/ThemeContext'
import { usePathname } from 'next/navigation'
import { FaArrowUp } from 'react-icons/fa'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { darkMode, setDarkMode } = useTheme()
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleTheme = () => setDarkMode(!darkMode)

  // ✅ Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ✅ Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const isHome = pathname === "/"
  const isAuthPage = pathname === "/pages/sign-in" || pathname === "/pages/sign-up"

  // ✅ Navbar background logic
  let navbarClasses = ""
  if (isAuthPage) {
    navbarClasses = scrolled
      ? "bg-white shadow-md"
      : "bg-gray-100" // stays gray until scrolled
  } else {
    navbarClasses = scrolled
      ? darkMode
        ? "shadow-md bg-black/80 backdrop-blur-sm"
        : "shadow-md bg-white/80 backdrop-blur-sm"
      : "bg-transparent"
  }

  // ✅ Icon + button colors
  const iconColor = isHome
    ? scrolled
      ? "text-gray-500"
      : "text-white"
    : "text-gray-500"

  const signInColor = isHome
    ? scrolled
      ? "text-gray-500"
      : "text-white"
    : "text-gray-500"

  const signUpClasses = isHome
    ? scrolled
      ? "bg-blue-600 text-white"
      : "bg-white/20 text-white hover:bg-white/30"
    : "bg-blue-600 text-white"

  return (
    <>
      <div
        className={`fixed w-full px-4 md:px-9 py-4 top-0 z-50 transition-all duration-300 ${navbarClasses}`}
      >
        <div className="flex items-center justify-between h-full">
          {/* LOGO */}
          <div>
            <Image src={LogoLight} alt="BaseApp Logo" className="w-26 md:w-30" />
          </div>

          {/* NAV LINKS */}
          <div className="hidden md:flex">
            <ul className="flex gap-10 list-none">
              {NavLinks.map((link) =>
                link.label === 'Pages' ? (
                  <li key={link.id} className="relative group list-none">
                    <button className="hover:text-blue-500 text-gray-500/90 text-md flex items-center justify-center pl-3">
                      {link.label}
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className="
                        absolute left-0 top-full pt-2
                        opacity-0 invisible translate-y-1
                        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                        transition ease-out duration-150 z-50
                        before:content-[''] before:absolute before:-top-2 before:left-0 before:w-full before:h-2
                      "
                    >
                      <ul className="w-48 bg-white shadow-lg rounded-lg p-2 list-none">
                        <li className='mt-1'>
                          <Link
                            href="/pages/blog-grid"
                            className="block px-4 py-1 text-gray-500/90 hover:text-blue-500"
                          >
                            Blog Grid
                          </Link>
                        </li>
                        <li className='mt-1'>
                          <Link
                            href="/pages/blog-single"
                            className="block px-4 py-1 text-gray-500/90 hover:text-blue-500"
                          >
                            Blog Single
                          </Link>
                        </li>
                        <li className='mt-1'>
                          <Link
                            href="/pages/sign-in"
                            className="block px-4 py-1 text-gray-500/90 hover:text-blue-500"
                          >
                            Sign In
                          </Link>
                        </li>
                        <li className='mt-1'>
                          <Link
                            href="/pages/sign-up"
                            className="block px-4 py-1 text-gray-500/90 hover:text-blue-500"
                          >
                            Sign Up
                          </Link>
                        </li>
                        <li className='mt-1'>
                          <Link
                            href="/404"
                            className="block px-4 py-1 text-gray-500/90 hover:text-blue-500"
                          >
                            404
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={link.id} className="list-none">
                    <Link href={link.url}>
                      <span
                        className={`hover:text-blue-500 text-md ${
                          pathname === link.url
                            ? 'text-blue-500 font-semibold'
                            : 'text-gray-500/90'
                        }`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* THEME TOGGLER + BUTTONS */}
          <div className="flex justify-between items-center gap-6">
            <button onClick={toggleTheme} className="text-xl">
              {darkMode ? (
                <BsMoon className={iconColor} />
              ) : (
                <BsSun className={iconColor} />
              )}
            </button>

            <button
              className={`hidden md:flex text-md transition-colors duration-300 ${signInColor}`}
            >
              <Link href="/pages/sign-in">
                Sign In
              </Link>
            </button>

            <button
              className={`hidden md:flex text-md py-2 px-7 rounded-3xl transition-all duration-300 ${signUpClasses}`}
            >
              <Link href="/pages/sign-up">
                Sign Up
              </Link>
            </button>

            <button
              onClick={toggleMenu}
              className="md:hidden"
              style={{ fontSize: '24px', background: 'none', border: 'none' }}
            >
              {isOpen ? <MdClose /> : <MdMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE NAV */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white shadow-lg p-4">
          <ul className="flex flex-col gap-4 mt-12">
            {NavLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.url}
                  className="block text-gray-700 text-lg hover:text-blue-500"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <div className="grid grid-cols-2 gap-5">
              <li>
                <button className="w-full text-md bg-blue-100 py-2 px-4 rounded-3xl text-center hover:bg-blue-200">
                  Sign in
                </button>
              </li>
              <li>
                <button className="w-full text-md bg-blue-100 py-2 px-4 rounded-3xl text-center hover:bg-blue-200">
                  Sign Up
                </button>
              </li>
            </div>
          </ul>
        </div>
      )}

      {/* Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 z-[9999]"
        >
          <FaArrowUp size={18} />
        </button>
      )}
    </>
  )
}

export default Nav
