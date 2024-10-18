import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div id='about-me' className=' flex flex-col h-full w-full'>
      <video
      autoPlay
      muted
      loop
      className='rotate-180 absolute top-[-400px]  sm:top-[-555px]  left-0 z-[1] w-full h-full object-cover'>
          <source src='/blackhole.webm' type='video/webm' />
      </video>
      <HeroContent/>
    </div>
  )
}

export default Hero