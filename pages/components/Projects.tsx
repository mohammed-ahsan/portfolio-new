import React, { useEffect } from 'react'
import { motion,useScroll } from 'framer-motion'
type Props = {}

function Projects({}: Props) {
  

  const projects = [{title:'SparkMesh Tech',image:'https://i.ibb.co/2t2r9R6/icon.png',description:'loreum ipsum'}, 
  {title:'QuickDonorBD',image:'https://i.ibb.co/2t2r9R6/icon.png',description:'b'},
  {title:'XpoBD',image:'https://i.ibb.co/2t2r9R6/icon.png',description:'b'},
  
]
 
  return (
    <motion.div 
    initial={{  opacity: 0 }} 
        transition={{duration:1.5}}
        whileInView={{opacity:1}}
    className='w-screen justify-evenly overflow-hidden mx-auto items-center  max-w-full flex relative flex-col text-left md:flex-row z-0 h-screen'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Freelance projects</h3>
            <div   className='relative w-full h-[80vh] flex items-center  overflow-x-scroll overflow-y-hidden snap-x  z-20'>
            {projects.map((project,index) => (
            
              <div key={index} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
               <motion.img
                initial={{ y:-300, opacity: 0 }}
                transition={{duration:1.5}}
                whileInView={{opacity:1, y:0}}
               src={project.image}
                className='w-[170px] h-[170px]  rounded-full'
               />
               <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-4xl font-light text-gray-300 text-center'>
{project.title}
                </h4>
                <p className='font-extralight'>{project.description}</p>
               </div>
              </div>
            ))}
            </div>
            <motion.div
            initial={{ y: 300, opacity: 0 }}
            transition={{duration:1.5}}
            whileInView={{opacity:0.5, y:0, skewY: -12}}
            className='w-full absolute top-[30%] bg-gray-800  left-0 h-[300px] '
            />
            <motion.div
            initial={{ y: -300, opacity: 0 }}
            transition={{duration:1.5}}
            whileInView={{opacity:0.5, y:0, skewY: -12}}
            className='w-full absolute top-[30%] bg-gray-800  left-0 h-[300px] '
            />
            </motion.div>
  )
}

export default Projects