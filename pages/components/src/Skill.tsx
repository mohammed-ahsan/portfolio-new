import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {
  id: number
  name: string
  icon: string
}

function Skill({ id, name, icon }: Props) {
  return (
    <motion.div
      className='group flex flex-col items-center justify-center space-y-2 sm:space-y-3 p-4 sm:p-6 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 cursor-pointer border border-gray-700/50 hover:border-[#F7AB0A]/60 backdrop-blur-sm'
      whileHover={{ 
        scale: 1.08,
        y: -8
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      <motion.div
        className='relative w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center'
        whileHover={{ 
          rotate: 15,
          scale: 1.1
        }}
        transition={{ 
          type: "spring",
          stiffness: 200,
          damping: 15
        }}
      >
        <motion.div
          className='absolute inset-0 bg-gradient-to-br from-[#F7AB0A]/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 blur-xl'
          transition={{ duration: 0.3 }}
        />
        <Image
          src={icon}
          alt={name}
          width={64}
          height={64}
          className='relative z-10 object-contain drop-shadow-lg'
          unoptimized
        />
      </motion.div>
      <span className='text-xs sm:text-sm font-medium text-gray-400 group-hover:text-[#F7AB0A] transition-colors duration-300 text-center'>
        {name}
      </span>
    </motion.div>
  )
}

export default Skill
