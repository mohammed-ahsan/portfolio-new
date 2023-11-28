import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import AboutMe from "../../assets/aboutme.svg"
type Props = {}

function About({ }: Props) {
    
    return (
        <div className='justify-evenly overflow-hidden  mx-auto items-center px-auto max-w-7xl flex relative flex-col text-center md:text-left md:flex-row h-screen'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
            <motion.img
                initial={{ x: -200, opacity: 0 }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src={'/aboutme.svg'}
                className='-mb-[120px] md:mb-0 flex-shrink-0 w-[170px] h-[170px]  rounded-full 
        object-cover bg-white md:rounded-lg md:w-64 md:h-95  xl:h-[500px]'
            />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>Expertise in Full-Stack Development</h4>
                <p className='px-2 text-gray-500 break-words text-lg'>My proficiency extends across a range of languages and frameworks, including but not limited to JavaScript (React, Node.js), Rust, PHP and databases such as MongoDB, PostgreSQL and SQL. Whether working independently or as part of a collaborative team, I am driven by a passion for excellence and a commitment to creating software solutions that make a positive impact.
                </p>
            </div>

        </div>
    )
}

export default About