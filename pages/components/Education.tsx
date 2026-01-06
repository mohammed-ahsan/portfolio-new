import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Education({}: Props) {
  const education = [
    {
      degree: 'BSc in Computer Science & Engineering',
      institution: 'United International University',
      period: '2018 - 2022',
      details: [
        'Member, UIU Robotics Club (2019-2020)',
        'Workshop: Vehicle Tracking Management System',
        'Hardware: Arduino R3, NEO 6M GPS, SIM 800L',
        'C libraries: TinyGPS, Adafruit FONA, libwebsockets'
      ]
    }
  ]

  return (
    <div className='w-screen overflow-hidden justify-center items-center mx-auto max-w-7xl flex relative flex-col text-center px-4 md:px-10 h-screen'>
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-semibold'
      >
        Education
      </motion.h3>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className='mt-32 max-w-2xl mx-auto'
      >
        {education.map((edu, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
            className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-[#F7AB0A]/50 overflow-hidden'
          >
            <motion.div
              initial={{ opacity: 0, rotate: -180 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='mb-6 flex justify-center'
            >
              <div className='w-24 h-24 rounded-full bg-gradient-to-br from-[#F7AB0A] to-[#FF6B6B] flex items-center justify-center'>
                <span className='text-white text-4xl'>🎓</span>
              </div>
            </motion.div>

            <div className='space-y-3'>
              <h4 className='text-xl md:text-2xl font-bold text-white'>{edu.degree}</h4>
              <div className='text-[#F7AB0A] font-semibold text-lg'>{edu.institution}</div>
              <div className='text-gray-400'>{edu.period}</div>
            </div>

            <div className='mt-6 pt-6 border-t border-gray-700'>
              <ul className='space-y-2 text-gray-400 text-sm text-left'>
                {edu.details.map((detail, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className='flex items-start'
                  >
                    <span className='text-[#F7AB0A] mr-2'>•</span>
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Education
