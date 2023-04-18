import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

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
                src="https://media.giphy.com/media/3o7TKsQ8UQhIb9WYBa/giphy.gif"
                className='-mb-[120px] md:mb-0 flex-shrink-0 w-[170px] h-[170px]  rounded-full 
        object-cover  md:rounded-lg md:w-64 md:h-95  xl:h-[500px]'
            />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>Lorem ipsum dolor sit amet.</h4>
                <p className='px-2 text-gray-500 break-words text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, eveniet enim minima temporibus totam tempora velit cumque odit facere doloribus nesciunt quibusdam! Magnam ad esse ex, sunt eos veritatis voluptates, id libero maiores eius fugiat aliquam laborum porro hic inventore aperiam blanditiis minima architecto beatae? Error accusamus quis beatae deserunt?
                </p>
            </div>

        </div>
    )
}

export default About