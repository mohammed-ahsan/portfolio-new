import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {}

interface Project {
  name: string;
  logo: string;
  appLink: string;
  skills: string[];
  description: string;
  highlights: string[];
}

interface Experience {
  company: string;
  companyLogo: string;
  companyLink: string;
  role: string;
  period: string;
  location: string;
  projects: Project[];
}

function Experience({}: Props) {
  const [expandedCompany, setExpandedCompany] = useState<number | null>(0)

  const experiences: Experience[] = [
    {
      company: 'Next Level Media LLC',
      companyLogo: '/images/nextlevelmedia1_logo.jpg',
      companyLink: 'https://nextlevelmedia.com',
      role: 'Full-Stack Engineer',
      period: 'Dec 2023 - Present',
      location: 'OnSite',
      projects: [
        {
          name: 'MyManager CRM',
          logo: '/images/mymanager.com_logo.png',
          appLink: 'https://mymanager.com',
          skills: ['React', 'NestJS', 'FastAPI', 'Redis', 'RabbitMQ', 'MongoDB', 'AWS', 'Google Cloud'],
          description: 'Enterprise CRM platform powering business automation and customer management',
          highlights: [
            'Built event-driven workflow engine processing 100K+ daily events',
            'Developed real-time chat system with Socket.IO',
            'Created marketing automation platform',
            'Integrated GrapesJS website builder',
            'Optimized FastAPI endpoints reducing response times by 40%'
          ]
        }
      ]
    },
    {
      company: 'SaaS Framer',
      companyLogo: '/images/saasframer_logo.jpg',
      companyLink: 'https://saasframer.com',
      role: 'Intern → Full-Stack Developer',
      period: 'Oct 2021 - Nov 2023',
      location: 'Remote',
      projects: [
        {
          name: 'Multi-Vendor Food Delivery',
          logo: '/images/logo-circle-green.svg',
          appLink: 'https://www.heyfood.africa',
          skills: ['React Native', 'Next.js 14', 'ExpressJS', 'FastAPI', 'Python', 'Redis', 'Socket.IO', 'Google Maps API'],
          description: 'Complete food delivery ecosystem with customer, restaurant, and rider applications',
          highlights: [
            'Developed multi-vendor system for 50+ restaurants',
            'Implemented geofencing and real-time location tracking',
            'Built real-time order management with Socket.IO',
            'Integrated Google Maps API for routing',
            'Created admin dashboard for platform management'
          ]
        },
        {
          name: 'AI Image Generation SaaS',
          logo: '/images/snapwiz_logo.webp',
          appLink: 'https://snapwiz.io',
          skills: ['Next.js 14', 'FastAPI', 'Python', 'Stable Diffusion XL', 'Cloud GPU', 'Redis'],
          description: 'AI-powered image generation platform with custom model training capabilities',
          highlights: [
            'Integrated Stable Diffusion XL for image generation',
            'Implemented custom LoRA model fine-tuning',
            'Deployed on cloud GPU servers for scalability',
            'Built subscription-based pricing system',
            'Created queue management with Redis'
          ]
        },
        {
          name: 'Lawyer\'s Forum - Immigration Law App',
          logo: '/images/immigrationquestion_lawyers_forum_logo.webp',
          appLink: 'https://immigrationquestions.com',
          skills: ['React Native', 'Spring Boot', 'RESTful APIs', 'JWT', 'Push Notifications', 'Firebase'],
          description: 'Multi-platform mobile application for US-based immigration law firm',
          highlights: [
            'Developed end-to-end mobile apps for iOS and Android',
            'Built Spring Boot backend with RESTful APIs',
            'Implemented real-time communication system',
            'Created case management and tracking features',
            'Successfully launched on App Store and Play Store'
          ]
        }
      ]
    }
  ]

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='section-container'
    >
      <motion.h3 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='section-title'
      >
        Experience
      </motion.h3>

      <div className='w-full max-w-6xl mt-12 space-y-6'>
        {experiences.map((experience, expIndex) => (
          <motion.div
            key={expIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: expIndex * 0.1 }}
            className='w-full'
          >
            {/* Company Header Card */}
            <motion.div
              onClick={() => setExpandedCompany(expandedCompany === expIndex ? null : expIndex)}
              whileHover={{ scale: 1.01 }}
              className='card-gradient rounded-2xl p-6 md:p-8 cursor-pointer'
            >
              <div className='flex flex-col md:flex-row items-start md:items-center gap-6'>
                {/* Company Logo */}
                <a 
                  href={experience.companyLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className='group flex-shrink-0'
                >
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    whileTap={{ scale: 0.98 }}
                    className='w-20 h-20 md:w-24 md:h-24 rounded-xl bg-white shadow-lg flex items-center justify-center p-3 group-hover:shadow-[#F7AB0A]/50 transition-all duration-300'
                  >
                    <img 
                      src={experience.companyLogo} 
                      alt={experience.company}
                      className='w-full h-full object-contain'
                    />
                  </motion.div>
                </a>

                {/* Company Info */}
                <div className='flex-1'>
                  <a 
                    href={experience.companyLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className='hover:text-[#F7AB0A] transition-colors duration-300'
                  >
                    <h4 className='text-2xl md:text-3xl font-bold text-white mb-2'>
                      {experience.company}
                    </h4>
                  </a>
                  <p className='text-lg md:text-xl text-[#F7AB0A] font-semibold mb-1'>
                    {experience.role}
                  </p>
                  <div className='flex flex-wrap items-center gap-3 text-gray-400 text-sm'>
                    <span className='flex items-center gap-1'>
                      <span className='w-1.5 h-1.5 rounded-full bg-[#F7AB0A]' />
                      {experience.period}
                    </span>
                    <span>•</span>
                    <span>{experience.location}</span>
                    <span>•</span>
                    <span className='text-[#F7AB0A]'>{experience.projects.length} Project{experience.projects.length > 1 ? 's' : ''}</span>
                  </div>
                </div>

                {/* Expand/Collapse Icon */}
                <motion.div
                  animate={{ rotate: expandedCompany === expIndex ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className='flex-shrink-0'
                >
                  <svg className='w-6 h-6 text-[#F7AB0A]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                  </svg>
                </motion.div>
              </div>
            </motion.div>

            {/* Projects List - Expandable */}
            <AnimatePresence>
              {expandedCompany === expIndex && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className='overflow-hidden'
                >
                  <div className='mt-4 space-y-4'>
                    {experience.projects.map((project, projectIndex) => (
                      <motion.div
                        key={projectIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: projectIndex * 0.1 }}
                        className='card-gradient rounded-xl p-6 md:p-8'
                      >
                        <div className='flex flex-col md:flex-row gap-6'>
                          {/* Project Logo */}
                          <a 
                            href={project.appLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='group flex-shrink-0'
                          >
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.98 }}
                              className='relative w-20 h-20 md:w-24 md:h-24 rounded-xl bg-white shadow-lg flex items-center justify-center p-3 group-hover:shadow-[#F7AB0A]/50 transition-all duration-300'
                            >
                              <img 
                                src={project.logo} 
                                alt={project.name}
                                className='w-full h-full object-contain'
                              />
                            </motion.div>
                          </a>

                          {/* Project Details */}
                          <div className='flex-1 space-y-4'>
                            <div>
                              <a 
                                href={project.appLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='group inline-flex items-center gap-2 hover:text-[#F7AB0A] transition-colors duration-300'
                              >
                                <h5 className='text-xl md:text-2xl font-bold text-white'>
                                  {project.name}
                                </h5>
                                <svg className='w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                                </svg>
                              </a>
                              <p className='text-gray-400 text-sm md:text-base mt-1 italic'>
                                {project.description}
                              </p>
                            </div>

                            {/* Highlights */}
                            <ul className='space-y-2'>
                              {project.highlights.map((highlight, idx) => (
                                <li
                                  key={idx}
                                  className='flex items-start text-gray-400 text-sm md:text-base'
                                >
                                  <span className='text-[#F7AB0A] mr-2 mt-1 flex-shrink-0'>▸</span>
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>

                            {/* Tech Stack */}
                            <div className='flex flex-wrap gap-2'>
                              {project.skills.map((skill, idx) => (
                                <motion.span
                                  key={idx}
                                  whileHover={{ scale: 1.05, backgroundColor: '#F7AB0A', color: '#1f2937' }}
                                  className='px-3 py-1.5 bg-gray-700/50 text-gray-300 text-xs md:text-sm rounded-full font-medium cursor-default transition-all duration-300 border border-gray-600/50'
                                >
                                  {skill}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Experience
