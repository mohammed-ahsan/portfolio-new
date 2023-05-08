import React from 'react'
import ExperienceCard from './src/ExperienceCard'
type Props = {}

function Experience({}: Props) {
  return (
    <div className='w-screen  overflow-hidden justify-evenly mx-auto items-center px-auto max-w-7xl flex relative flex-col text-center md:text-left md:flex-row h-screen'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>
<div className='w-full flex space-x-5  px-10 overflow-x-scroll mt-20  snap-x snap-mandatory'>
<ExperienceCard/>
</div>
            </div>

  )
}

export default Experience