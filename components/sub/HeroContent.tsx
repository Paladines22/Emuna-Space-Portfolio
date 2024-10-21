"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import {SparklesIcon} from '@heroicons/react/24/solid';
import Image from '@/node_modules/next/image';

const HeroContent = () => {
  return (
  <motion.div
  initial= "hidden"
  animate= "visible"
  className=" flex flex-row items-center justify-center px-10 md:px-20 mt-40 w-full z-[20]"
  >
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
      <motion.div
      variants={slideInFromTop}
      className="Welcome-box py-[8px] px-[4px] border border-[#7042f88b] opacity-[0.9]">
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5"/>
          <h1 className='Welcome-text text-sm  md:text-xl'>
            Frontend Developer Web Portfolio 
          </h1>
      </motion.div>

      <motion.div
      variants={slideInFromLeft(0.5)}
      className="flex flex-col gap-6 mt-6 text-5xl md:text-7xl text-bold text-white md:max-w-[900px] w-auto h-auto">
        Valentina Paladines 
        <span className='  text-transparent font-bold text-4xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500' > Frontend Developer Web</span>
      </motion.div>

      <motion.p
      variants={slideInFromLeft(0.8)}
      className="text-xl md:text-2xl text-gray-400 my-5 md:max-w-[900px]">
        Soy Desarrolladora Web Full Stack con un enfoque especial en el Front end. Combino mis habilidades técnicas con una sólida comprensión de UX/UI design para crear experiencias web atractivas y funcionales. Me apasiona transformar ideas en interfaces intuitivas y responsivas, optimizando tanto el rendimiento como la usabilidad. ¡Explora mi portafolio y descubre lo que puedo aportar a tu próximo proyecto!
      </motion.p>

      <motion.a
      variants={slideInFromLeft(1)}
      className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] ">
        Contactame!
      </motion.a>
      </div>
      <motion.div 
      variants={slideInFromRight(0.8)} 
      className="w-full h-full flex justify-center items-center">
          <Image 
          src="/mainIconsdark.svg"
          alt="work icons"
          height={700}
          width={700}
          />
      </motion.div>
  </motion.div>
  )
}

export default HeroContent