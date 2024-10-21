import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div id='projects' className=' flex flex-col items-center justify-center py-20'> 

      <h1 className='text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20' >My projects</h1>
      <div className='h-full w-full flex flex-col  md:flex-row gap-10 px-10'>
        <ProjectCard 
        src='/NextWebsite.png'
        title='Wayra Hotel Website'
        description='Lorem ipsu quality components of the look amazing for to the stress'
        />
        <ProjectCard 
        src='/CardImage.png'
        title='Play Tarot Interactive Web App'
        description='Lorem ipsu quality components of the look amazing for to the stress'
        />
        <ProjectCard 
        src='/SpaceWebsite.png'
        title='Space Themed Website'
        description='Lorem ipsu quality components of the look amazing for to the stress'
        />
      </div>

    </div>
  )
}

export default Projects