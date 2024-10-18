import { Frontend_skill, Backend_skill, Full_stack, Other_skill } from '@/constants/index'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'

const Skills = () => {
  return (
    <section id='skills'
    className='flex flex-col items-center justify-center relative  gap-12 h-full overflow:hidden pb-16'
    style={{transform:"scale(0.9)"}}
    >
      <SkillText/>
        <div className='flex flex-row justify-around flex-wrap mt-6 sm:mt-10 gap-1 sm:gap-8 items-center'>
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
          key={index}
          src={image.Image}
          width={image.width}
          height={image.height}
          index={index}/>
        ))}
        </div>

        <div className='flex flex-row justify-around flex-wrap mt-0 sm:mt-8 gap-1 sm:gap-8 items-center'>
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
          key={index}
          src={image.Image}
          width={image.width}
          height={image.height}
          index={index}/>
        ))}
        </div>

        <div className='flex flex-row justify-around flex-wrap mt-0 sm:mt-8 gap-1 sm:gap-8 items-center'>
        {Full_stack.map((image, index) => (
          <SkillDataProvider
          key={index}
          src={image.Image}
          width={image.width}
          height={image.height}
          index={index}/>
        ))}
        </div>

        <div className='flex flex-row justify-around flex-wrap mt-0 sm:mt-8 gap-8 items-center'>
        {Other_skill.map((image, index) => (
          <SkillDataProvider
          key={index}
          src={image.Image}
          width={image.width}
          height={image.height}
          index={index}/>
        ))}
        </div>

        <div className='w-full h-full absolute'>
            <div className='w-full h-full z-[10] opacity-30 absolute fixed items-center justify-center bg-cover'>
              <video
            className='w-full h-auto' 
            preload='false'
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"/>

            </div>
        </div>

    </section>
  )
}

export default Skills