import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import profilePic from '../../../assets/mypaint.gif'
type Props = {}

function ExperienceCard({}: Props) {
  return (
    <div className='flex flex-col rounded-lg items-center space-y-3 flex-shrink-0 w-[350px]  md:w-[450px] xl:w-[600px] snap-center p-5 bg-gray-800 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img className='rounded-full w-32 h-32 xl:w-[200px] xl:h-[200px] object-cover object-center' alt="profile.gif"  src="https://media.giphy.com/media/3o7TKsQ8UQhIb9WYBa/giphy.gif" />
        <div className='flex flex-row space-x-2'>
        <Image src={profilePic} alt="profile.gif" width={25} height={25} className='' />
        <Image src={profilePic} alt="profile.gif" width={25} height={25} className='' />
        <Image src={profilePic} alt="profile.gif" width={25} height={25} className='' />
        <div>| Software Engineer</div></div>
        <div className='uppercase py-5 text-gray-300'>Lorem ipsum dolor sit amet.</div>
        <ul className='list-disc space-y-4 ml-5'>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</li>
            
        </ul>
    </div>
  )
}

export default ExperienceCard