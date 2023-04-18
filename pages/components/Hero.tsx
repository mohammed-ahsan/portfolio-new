import { Cursor, useTypewriter  } from  'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import profilePic from '../../assets/mypaint.gif'
import Link from 'next/link'
import React, { useMemo,useEffect } from 'react'
import { motion,useScroll } from 'framer-motion'
type Props = {}

const Hero = (props: Props) => {
  
  
    const [text,count] = useTypewriter({words:['hello'],loop: true, delaySpeed: 2000})
  return (<div className='h-screen   flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
     <BackgroundCircles/>
      <Image className='rounded-full mx-auto object-cover' alt="profile.gif" height={150} width={150} src={profilePic} />
      <div className='z-20'>
      <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
    <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
      <span className='mr-3'>
      {text}
      </span>
      <Cursor/>
      </h1>
      <motion.div className='pt-5'>
        <Link href='#about'>
        <button className='heroButton'>About</button>
        </Link>
        <Link href='#experience'><button className='heroButton'>Experience</button></Link>
        <Link href='#skills'><button className='heroButton'>Skills</button></Link>
        <Link href='#projects'><button className='heroButton'>Projects</button></Link>
        <Link href='#contact'><button className='heroButton'>Contact</button></Link>
      </motion.div>
      </div>
      
   </div>
  )
}

export default Hero