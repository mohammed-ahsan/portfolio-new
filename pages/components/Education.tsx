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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='flex flex-col relative min-h-screen items-center justify-center px-4 md:px-10 py-24 max-w-7xl mx-auto'
    >
      <motion.h3
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='section-title'
      >
        Education
      </motion.h3>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='w-full max-w-3xl mt-12'
      >
        {education.map((edu, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className='card-gradient rounded-2xl p-8 overflow-hidden'
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='mb-6 flex justify-center'
            >
              <div className='w-24 h-24 rounded-full bg-gradient-to-br from-[#F7AB0A] to-[#FF6B6B] flex items-center justify-center'>
                <span className='text-white text-4xl'>🎓</span>
              </div>
            </motion.div>

            <div className='space-y-3 text-center'>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-xl md:text-2xl font-bold text-white'
              >
                {edu.degree}
              </motion.h4>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className='text-[#F7AB0A] font-semibold text-lg'
              >
                {edu.institution}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className='text-gray-400'
              >
                {edu.period}
              </motion.div>
            </div>

            <div className='mt-6 pt-6 border-t border-gray-700'>
              <ul className='space-y-2 text-gray-400 text-sm text-left'>
                {edu.details.map((detail, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + idx * 0.1 }}
                    className='flex items-start hover:text-gray-300 transition-colors duration-300'
                  >
                    <span className='text-[#F7AB0A] mr-2 flex-shrink-0'>•</span>
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Education
