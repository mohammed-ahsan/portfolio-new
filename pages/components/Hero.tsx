import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import profilePic from '../../assets/mypaint.gif'
import Link from 'next/link'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  const [text] = useTypewriter({
    words: ['<Coder/>', '<Learner/>', '<Gamer/>'],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden relative'>
      <BackgroundCircles />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
        className='relative z-20'
      >
        <Image
          className='rounded-full mx-auto object-cover border-4 border-[#F7AB0A]/30 shadow-2xl shadow-[#F7AB0A]/20'
          alt='profile.gif'
          height={150}
          width={150}
          src={profilePic}
        />
      </motion.div>

      <div className='z-20 space-y-4'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'
        >
          React Native Developer
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='text-5xl lg:text-7xl font-bold px-10 text-white'
        >
          <span className='mr-3'>{text}</span>
          <Cursor />
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='flex flex-wrap justify-center gap-3 pt-8'
        >
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#education'>
            <button className='heroButton'>Education</button>
          </Link>
          <Link href='#contact'>
            <button className='heroButton'>Contact</button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
