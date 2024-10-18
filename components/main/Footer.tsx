import React from 'react'

import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import {FaYoutube} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] mt-40'>
      <div className='w-full flex flex-col items-center justify-center m-auto'>
        <div className='w-full h-full flex flex-row items-center justify-around'>

            <div className='min-w-[150px] h-auto flex flex-col items-start '>
              <div className='font-bold text-[16px]'>Comunity</div>

              <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                <FaYoutube/>
                <span className='text-[11px] sm:text-[15px]  ml-[6px]'>Youtube</span>
              </p>
              <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                <RxGithubLogo/>
                <span className='text-[11px] sm:text-[15px] ml-[6px]'>Github</span>
              </p>
              <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                <RxDiscordLogo/>
                <span className='text-[11px] sm:text-[15px] ml-[6px]'>Discord</span>
              </p>

            </div>

            <div className='min-w-[150px] h-auto flex flex-col items-start '>
              <div className='font-bold text-[16px]'>Social Media</div>

              <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                <RxInstagramLogo/>
                <span className='text-[11px] sm:text-[15px]  ml-[6px]'>Instagram</span>
              </p>
              <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                <RxTwitterLogo/>
                <span className='text-[11px] sm:text-[15px]  ml-[6px]'>Twiter</span>
              </p>
              <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                <RxLinkedinLogo/>
                <span className='text-[11px] sm:text-[15px] ml-[6px]'>Linkind</span>
              </p>

            </div>

            <div className='min-w-[150px] h-auto flex flex-col items-start '>
              <div className='font-bold text-[16px]'>About</div>

              <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                
                <span className='text-[11px] sm:text-[15px]  ml-[6px]'>Become Sponsor</span>
              </p>
              <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                
                <span className='text-[11px] sm:text-[15px]  ml-[6px]'>Learning about me</span>
              </p>
              <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                
                <span className='text-[11px] sm:text-[15px]  ml-[6px]'> &copy; Emuna 2024</span>
              </p>

            </div>
        </div> 

        <div className='m-[20px] text-[15px] text-center'>
          Emuna_code@gmail.com
        </div>
        
      </div>
    </div>
  )
}

export default Footer