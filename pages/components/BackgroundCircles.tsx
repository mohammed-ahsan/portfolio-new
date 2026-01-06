import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0.1, 0.2, 0.4, 0.6, 0.4, 0.2, 0.1],
      }}
      transition={{ 
        duration: 2.5,
        repeat: Infinity,
        repeatType: "reverse"
      }}
      className='relative flex justify-center items-center'
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping opacity-20'
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52'
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className='absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52'
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className='absolute border border-[#F7AB0A] rounded-full h-[650px] w-[650px] mt-52 animate-pulse opacity-30'
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className='absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52'
      />
    </motion.div>
  )
}

export default BackgroundCircles