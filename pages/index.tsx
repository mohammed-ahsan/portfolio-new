import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import BottomTabNav from './components/BottomTabNav'
import React, { useMemo, useEffect, useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Link from 'next/link'
import { AnimatePresence } from 'framer-motion'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
      const ref = useRef<HTMLDivElement>(null);
     const [id,setId] = React.useState(0)
     const [index,setIndex] = React.useState(false)
     const indexRef = useRef(index);
     const { scrollY } = useScroll();
     const [isMounted, setIsMounted] = React.useState(false);
     
     // Prevent hydration mismatch - only run on client
     React.useEffect(() => {
       setIsMounted(true);
     }, []);
     
     // Keep indexRef in sync with index state
     React.useEffect(() => {
       indexRef.current = index;
     }, [index]);
      
      useEffect(() => {
            if (isMounted) {
                  setId(window.innerHeight * 1.02)
            }
      },[isMounted])
      
      useEffect(() => {
            if (!isMounted) return;
            
            const handleScroll = () => {
                  const mainDiv = document.getElementById('main')
                  if (!mainDiv) return;
                  
                  const scrollTop = mainDiv.scrollTop
                  
                  if(id){
                        if(scrollTop > id - 5){
                              if(!indexRef.current){
                                    setIndex(true)
                              }
                        }
                        else{
                              if(indexRef.current){
                                    setIndex(false)
                              }
                        }
                  } else {
                        setIndex(false)
                  }
            }
            
            const mainDiv = document.getElementById('main')
            if (mainDiv) {
                  mainDiv.addEventListener('scroll', handleScroll)
                  return () => mainDiv.removeEventListener('scroll', handleScroll)
            }
      }, [id, isMounted])
      
      // Don't render until mounted to prevent hydration mismatch
      if (!isMounted) {
            return null;
      }
      
      return (
            <main className='overflow-y-hidden' >

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
                        <section className='snap-center' id="education">
                              <Education />
                        </section>
                        <section className='snap-center' id="contact">
                              <Contact />
                        </section>
                        
                  </div>
                  
                  {/* Bottom Tab Navigation */}
                  <BottomTabNav visible={index} />

            </main>
      )
}
