import React from 'react'
import Hero from '@/Components/HomePage/Hero/Hero'
import Active from './Active/Active'
import Service from './Services/Service'
import Team from './Team/Team'
import Offer from './Offers/Offer'
import Price from './Prices/Price'
import PremiumPrice from './PremiumPrice/PremiumPrice'
import Testimonial from './Testimonials/Testimonial'
import GlobalBrand from './GlobalBrand/GlobalBrand'
import Stat from './Stats/Stat'
import Blog from './Blogs/Blog'
import Connected from './Connected/Connected'

const Homepage = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Active />
      <Service />
      <Team />
      <Offer />
      <Price />
      <PremiumPrice />
      <Testimonial />
      <Stat />
      <GlobalBrand />
      <Blog />
      <Connected />
      
    </div>
  )
}

export default Homepage
