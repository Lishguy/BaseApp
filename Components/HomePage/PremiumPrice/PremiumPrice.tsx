'use client'

import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import project1 from '../../../public/images/project-01.png'
import project2 from '../../../public/images/project-02.png'
import project3 from '../../../public/images/project-03.png'
import project4 from '../../../public/images/project-04.png'

/* ------------------------
   ImageCard Component
------------------------- */
type ImageCardProps = {
  src: StaticImageData | string
  title?: string
  subtitle?: string
  heightClass?: string
}

const ImageCard = ({ src, title = '', subtitle = '', heightClass = 'h-48 md:h-60' }: ImageCardProps) => {
  if (!src) return null

  return (
    <div className="group relative overflow-hidden rounded-xl">
      <div className={`relative w-full ${heightClass}`}>
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold text-black">{title}</h3>
          <p className="text-sm mt-1 text-black">{subtitle}</p>
          <button
            aria-label="Open"
            className="mt-4 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

/* ------------------------
   Projects Data
------------------------- */
const projects = [
  {
    id: 1,
    src: project1,
    title: "Photo Retouching",
    subtitle: "Branded Ecommerce",
    categories: ["All", "Branding Strategy"],
  },
  {
    id: 2,
    src: project2,
    title: "Creative Design",
    subtitle: "Digital Experience",
    categories: ["All", "Digital Experiences"],
  },
  {
    id: 3,
    src: project3,
    title: "UI/UX Project",
    subtitle: "Branding Strategy",
    categories: ["All", "Digital Experiences"],
  },
  {
    id: 4,
    src: project4,
    title: "Marketing Ideas",
    subtitle: "Ecommerce",
    categories: ["All", "Branding Strategy", "Ecommerce"],
  },
]

/* ------------------------
   PremiumPrice Section
------------------------- */
const PremiumPrice = () => {
  const [active, setActive] = useState("All")
  const buttons = ["All", "Branding Strategy", "Digital Experiences", "Ecommerce"]

  const filteredProjects = projects.filter((p) => p.categories.includes(active))

  return (
    <div className='relative w-full pt-0 md:pt-10 pb-10 md:pb-18 mb-20 md:mb-16'>
      <div className='relative z-20 flex flex-col items-center justify-center mt-10'>
        <div className='w-full max-w-full text-center'>
          <h1 className='w-full text-[30px] mt-5 md:mt-0 md:text-[44px] md:mx-auto max-w-full md:max-w-[550px] font-medium md:font-bold'>
            We Offer Great Affordable Premium Prices.
          </h1>
          <p className='w-full mt-6 max-w-full md:max-w-[600px] mx-auto text-gray-500 text-[18px] md:text-[17px]'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.
          </p>

          {/* ButtonsList */}
          <div className="bg-white rounded-full shadow-md flex flex-wrap justify-center items-center gap-4 mx-auto mt-10 px-4 py-2 max-w-fit">
            {buttons.map((btn) => (
              <button
                key={btn}
                onClick={() => setActive(btn)}
                className={`px-5 py-1 rounded-full transition-colors duration-300 ${
                  active === btn 
                    ? "bg-blue-600 text-white" 
                    : "text-gray-500/80 hover:text-gray-600 text-lg cursor-pointer"
                }`}
              >
                {btn}
              </button>
            ))}
          </div>

          {/* Image grid */}
          {active === "All" ? (
            // ✅ Keep your special 70/30 layout
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[70%_30%] gap-8 mt-20 mx-4 md:mx-10'>
              {/* Left column */}
              <div className='flex flex-col'>
                <div className='flex flex-col md:flex-row gap-6 mb-6'>
                  <div className='flex-1'>
                    <ImageCard src={project1} title="Photo Retouching" subtitle="Branded Ecommerce" />
                  </div>
                  <div className='flex-1'>
                    <ImageCard src={project2} title="Creative Design" subtitle="Digital Experience" />
                  </div>
                </div>
                <div>
                  <ImageCard src={project3} title="UI/UX Project" subtitle="Branding Strategy" />
                </div>
              </div>

              {/* Right column */}
              <div>
                <ImageCard src={project4} title="Marketing Ideas" subtitle="Ecommerce" heightClass="h-96 md:h-[520px]" />
              </div>
            </div>
          ) : active === "Branding Strategy" || active === "Ecommerce" ? (
            // ✅ Branding Strategy & Ecommerce → 3-col grid with empty space
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 mx-4 md:mx-10'>
              {filteredProjects.map((proj) => (
                <ImageCard
                  key={proj.id}
                  src={proj.src}
                  title={proj.title}
                  subtitle={proj.subtitle}
                  heightClass={proj.id === 4 ? "h-96 md:h-[520px]" : "h-60"}
                />
              ))}
              {/* Empty placeholder cell for balance */}
              <div></div>
            </div>
          ) : active === "Digital Experiences" ? (
            // ✅ Digital Experiences → custom 30/70 split
            <div className='grid md:grid-cols-[30%_70%] gap-6 mt-20 mx-4 md:mx-10'>
              {filteredProjects.map((proj) => (
                <ImageCard
                  key={proj.id}
                  src={proj.src}
                  title={proj.title}
                  subtitle={proj.subtitle}
                  heightClass="h-72 md:h-[400px]"
                />
              ))}
            </div>
          ) : (
            // ✅ Fallback (just in case)
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 mx-4 md:mx-10'>
              {filteredProjects.map((proj) => (
                <ImageCard
                  key={proj.id}
                  src={proj.src}
                  title={proj.title}
                  subtitle={proj.subtitle}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PremiumPrice
