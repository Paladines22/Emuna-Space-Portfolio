import { Socials } from '@/constants/index';
import Image from 'next/image';
import React from 'react';


const Navbar = () => {
  return (
    <div className='text-lg md:text-xl w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50  bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10'>
      <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[0px] sm:px-[10px]'>
        <a href="#about-me" className='h-auto w-auto invisible md:visible  flex flex-row items-center'>
          <Image
          src="/NavLogo.png"
          alt='logo'
          width={70}
          height={70}
          className="cursor-pointer hover:animate-slowspin"/>
          
          <span className='font-semibold ml-[10px] hidden md:block text-gray-300 '>
            Emuna Code
          </span>
        </a>
        
        <div className='w-[500px] h-full flex flex-row items-center justify-between  md:mr-20'>
            <div className='text-white flex items-center justify-between w-full h-auto border border-[#7042f861] mr-[#0300145e] mr-[8px] sm:mr-[15px] px-[20px] py-[10px] rounded-full'>
              <a href="#about-me" className=' cursor-pointer'>About </a>
              <a href="#skills" className='cursor-pointer'>Skills</a>
              <a href="#projects" className='cursor-pointer'>Projects</a>
            </div>
        </div>

      <div className='invisible sm:visible flex flex-row gap-3 md:gap-5'>
      {Socials.map((social) => (
        <Image 
        className="cursor-pointer"
        src={social.src}
        alt={social.name}
        key={social.name}
        width={30}
        height={30}
        />
      ))}
      </div>

      </div>
    </div>
  )
}

export default Navbar