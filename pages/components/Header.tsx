
import React, { useMemo,useEffect } from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion,useScroll,useMotionValueEvent } from 'framer-motion'
import discord from '../../assets/discord.svg'

type Props = {
 
}

function Header({}: Props) {
  
  


  
  
  
  return (
 
    <header  className='sticky   top-0 p-5 flex items-start justify-between  mx-auto z-20 '>
    <motion.div 
    initial={{ opacity: 0, scale:0.5 , x:-200}}
    animate={{ opacity: 1, scale:1 , x:0}}
    transition={{ duration: 1,  }}
    className='flex flex-row items-center'>
        <SocialIcon 
        fgColor='gray' 
        bgColor='transparent' 
        url="https://www.linkedin.com/in/mohammed-a-883756b3/" />
        <SocialIcon 
        fgColor='gray' 
        bgColor='transparent' 
        url="https://github.com/mohammed-ahsan" />
        <a href='https://discordapp.com/users/874694853030715453'>
        <img 
        
        src={discord.src}
        className='w-7 h-7 mx-2'
        
         /></a>
    </motion.div>
    <motion.div 
    initial={{ opacity: 0, scale:0.5 , x:200}}
    animate={{ opacity: 1, scale:1 , x:0}}
    transition={{ duration: 1,  }}
    className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon
        network='email'
        fgColor='gray'
        bgColor='transparent'
        
        />
        <p
        className='uppercase  text-sm text-gray-400'
        >
            Get In Touch
        </p>
    </motion.div>
    
    </header>
)
}

export default Header