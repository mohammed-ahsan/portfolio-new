import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import React, { useMemo, useEffect, useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
      const ref = useRef(null);
     const [id,setId] = React.useState(0)
     let [index,setIndex] = React.useState(false)
      const { scrollY } = useScroll({ container: ref });

      useEffect(() => {
            setId(window.innerHeight)
            scrollY.on('change', async (y) => {
                  
                  if(y>id+86){
                        if(!index){
                         setIndex(true)
                        // console.log(y)
                  }
                        
                  }
                  else{
                        if(index){
                        setIndex(false)
                        }
                  }
                  
            });
      }, [])
      return (
            <main >

                  <div id="main" ref={ref} className='h-screen overflow-x-hidden  text-white  snap-y snap-mandatory overflow-y-scroll bg-gray-900 z-0'>
                        <Header/>
           


                        <section className='snap-start' id="home">
                              <Hero />

                        </section>
                        <section className='snap-start' id="about">
                              <About />
                        </section>
                        <section className='snap-center' id="experience">
                              <Experience />
                        </section>
                        <section className='snap-start' id="skills">
                              <Skills />
                        </section>
                        <section className='snap-center' id="projects">
                              <Projects />
                        </section>
                        <section className='snap-center' id="contact">
                              <Contact />
                        </section>
                        
                  </div>
                  <motion.div
initial={{bottom: '-50%'}}
animate={{bottom: index ? '1%' : '-50%'}}

transition={{duration: 0.5}}


className={index?'absolute rounded-lg  bg-gray-900 right-0 left-0 md:left-[85%] mx-2  md:pr-2 flex flex-row md:flex-col justify-center md:right-5 items-end':'hidden'}>
      <Link href='#home'> 
        <button className='px-[5px] py-4 border border-opacity-0 border-gray-900 rounded-full uppercase text-xs text-gray-500 transition-all tracking-widest hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>Home</button>
        </Link>
       <Link href='#about'>
        <button className='px-1.5 py-4 border border-opacity-0 border-gray-900 rounded-full uppercase text-xs text-gray-500 transition-all tracking-widest hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>About</button>
        </Link>
        <Link href='#experience'><button className='px-1.5 py-4 border border-opacity-0 border-gray-900 rounded-full uppercase text-xs text-gray-500 transition-all tracking-widest hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>Experience</button></Link>
        <Link href='#skills'><button className='px-1.5 py-4 border border-opacity-0 border-gray-900 rounded-full uppercase text-xs text-gray-500 transition-all tracking-widest hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>Skills</button></Link>
        <Link href='#projects'><button className='px-1.5 py-4 border border-opacity-0 border-gray-900 rounded-full uppercase text-xs text-gray-500 transition-all tracking-widest hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>Projects</button></Link>
        <Link href='#contact'><button className='px-1.5 py-4 border border-opacity-0 border-gray-900 rounded-full uppercase text-xs text-gray-500 transition-all tracking-widest hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>Contact</button></Link>                  
</motion.div>

            </main>
      )
}
