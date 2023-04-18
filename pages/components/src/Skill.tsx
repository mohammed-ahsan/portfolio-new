import React from 'react'
import Image from 'next/image'

import { motion } from 'framer-motion'

type Props = {
    name: string,
    icon: string,
    
    id: number
    
}


function Skill({id,name,icon}: Props) {
    let directionLeft: boolean = false
    if(id%2===0){
        directionLeft=true
    }else{
        directionLeft=false
    }
  return (
    <div className='group relative flex cursor-pointer'>
        
        <motion.img
        initial={{ x:directionLeft ? -100: 100, opacity: 0 }} 
        whileInView={{opacity:1,x:0}}
        transition={{duration:1}}
        
        className='rounded-full border border-gray-800 object-cover w-14 h-14 lg:h-24 md:w-20 lg:w-24 md:h-20 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out'
        alt='logo'  src={icon}/>
        <div className='absolute  opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out
        group-hover:bg-white w-14 h-14 lg:h-24 md:w-20 lg:w-24 md:h-20 xl:w-28 xl:h-28 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
            <p className='text-xl font-bold text-black opacity-100'>{name}</p>
            </div></div>
        </div>
    
  )
}

export default Skill