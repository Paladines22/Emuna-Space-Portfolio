"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromTop } from '@/utils/motion'
import Image from '@/node_modules/next/image'

const Encryption = () => {
  return (
    <div className='flex flex-row relative items-center justify-center my-[-20] min-h-[70vh] w-full h-full'>
      <div className='absolute w-auto h-auto top-0 z-[5]'>
        <motion.div
        variants={slideInFromTop} 
        className="text-[50px] font-medium text-center text-gray-200">
          Performance {" "} & {" "}
        <span className='text-transparent font-bold text-5xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500' > Security</span>
        </motion.div>
      </div>

    <div className='flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto'>
      <div className='flex flex-col items-center group cursor-pointer w-auto h-auto'>

        <Image
        src="/LockTop.png"
        alt='lock top '
        width={50}
        height={50}
        className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
        />

        <Image
        src="/LockMain.png"
        alt='lock main '
        width={70}
        height={70}
        className="z-10"
        />
      </div> 

      <div className='Welcome-box px-[15px] py-[4px] z-[20] border my-[5px] border-[#7042f88b] opacity-[0.9]'>
        <h1 className='Welcome-text text-[20px]'>Encryption</h1>
    </div>
    </div>

    <div className='absolute z-[20] bottom-[2px] px-[5px]'>
      <div className='cursive text-[30px] font-medium text-center text-gray-300'>
      Protege tu información con encriptado de principio a fin
      </div>
    </div>

    <div className='w-full flex items-start justify-center absolute'>
      <video
      loop
      muted
      autoPlay
      playsInline
      preload='false'
      className='w-full h-auto'
      src='/encryption.webm'
      />
    </div>  

 

    </div>
  )
}

export default Encryption