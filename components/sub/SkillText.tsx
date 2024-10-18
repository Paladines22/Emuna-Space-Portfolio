"use client"
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop, } from '@/utils/motion'
import {SparklesIcon} from '@heroicons/react/24/solid';

import React from 'react'

const SkillText = () => {
  return (
    <motion.div initial="hidden" animate="visible" className='w-full mt-20  h-auto flex flex-col gap-6 items-center justify-center'>
        <motion.div
      variants={slideInFromTop}
      className="Welcome-box py-[8px] px-[6px] border border-[#7042f88b] opacity-[0.9]">
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5"/>
          <h1 className='Welcome-text text-xl md:text-2xl'>
            Think better with Next.js 13
          </h1>
      </motion.div>

      <motion.div variants={slideInFromLeft(0.5)} className=" text-3xl md:text-6xl text-white font-medium mt-[10px] text-center mb-[15px]">
          Making apps with modern tecnologies
      </motion.div>

      <motion.div variants={slideInFromRight(0.5)} className="cursive text-2xl md:text-4xl text-gray-200 mb-12 mt-[10px] text-center">
        Never miss a task, deadline or idea 
      </motion.div>

    </motion.div>
  )
}

export default SkillText