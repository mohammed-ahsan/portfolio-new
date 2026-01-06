import React, { useMemo, useEffect } from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import discord from '../../assets/discord.svg'
import Link from 'next/link'

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between mx-auto z-20 backdrop-blur-sm bg-gray-900/50'>
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
        className='flex flex-row items-center gap-1'
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <SocialIcon 
            fgColor='gray' 
            bgColor='transparent' 
            url="https://www.linkedin.com/in/mohammed-a-883756b3/"
            className='hover:opacity-80 transition-opacity duration-300'
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <SocialIcon 
            fgColor='gray' 
            bgColor='transparent' 
            url="https://github.com/mohammed-ahsan"
            className='hover:opacity-80 transition-opacity duration-300'
          />
        </motion.div>
        <motion.a 
          href='https://discordapp.com/users/874694853030715453'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className='flex items-center justify-center w-12 h-12'
        >
          <img 
            src={discord.src}
            className='w-7 h-7 hover:opacity-80 transition-opacity duration-300'
            alt='Discord'
          />
        </motion.a>
      </motion.div>
      
      <Link href='#contact'>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='flex flex-row items-center text-gray-300 cursor-pointer gap-2'
        >
          <SocialIcon
            network='email'
            fgColor='gray'
            bgColor='transparent'
          />
          <p className='uppercase text-sm text-gray-400 hover:text-[#F7AB0A] transition-colors duration-300'>
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  )
}

export default Header