import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import profilePic from '../../../assets/mypaint.gif'
type Props = {}

function ExperienceCard({}: Props) {
  return (
    <div className='flex flex-col rounded-lg items-center space-y-3 flex-shrink-0 w-[350px]  md:w-[450px] xl:w-[600px] snap-center p-5 bg-gray-800 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img className='rounded-full bg-gray-50 w-32 h-32 xl:w-[200px] xl:h-[200px] object-cover object-center' alt="profile.gif"  src="https://i.ibb.co/2t2r9R6/icon.png" />
        <div className='flex flex-row space-x-2'>
       
        <div>Software Engineer</div></div>
        <div className='uppercase pt-5 text-gray-300'>QuickBhai</div>
        <p>02/2023 - present</p>
        <p>

        Food Delivery Startup Based in Kushtia, Bangladesh
        </p>
        <ul className='list-disc space-y-4 ml-5'>
            <li>Develop and maintain their Customer, Restaurant and Rider app with bare React Native.</li>
            <li>Develop and maintain their Prisma,NodeJs,Mysql backend.
            </li>
            <li>Integrated Sanity for CMS</li>
            
            
        </ul>
    </div>
  )
}

export default ExperienceCard