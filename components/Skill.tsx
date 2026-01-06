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
      className='group flex flex-col items-center justify-center space-y-2 sm:space-y-3 p-4 sm:p-6 rounded-xl card-gradient backdrop-blur-sm cursor-pointer'
      whileHover={{ 
        scale: 1.05,
        y: -5
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      <motion.div
        className='relative w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center'
        whileHover={{ 
          rotate: [0, -10, 10, -10, 0],
          scale: 1.1
        }}
        transition={{ 
          duration: 0.5
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
