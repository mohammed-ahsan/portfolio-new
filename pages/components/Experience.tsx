import React from 'react'
import { motion } from 'framer-motion'

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
          logo: '/images/Store_Hub_logo_food_delivery.avif',
          appLink: 'https://storehub.com',
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
          appLink: 'https://enatega.com',
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
          appLink: 'https://play.google.com/store/apps/details?id=com.lawyersforum',
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
      transition={{ duration: 1.5 }}
      className='w-screen justify-evenly mx-auto items-center max-w-full flex relative flex-col text-center md:text-left h-screen overflow-hidden'
    >
      <motion.h3 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'
      >
        Experience
      </motion.h3>

      <div className='w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 z-20 px-10'>
        {experiences.map((experience, expIndex) => (
          <React.Fragment key={expIndex}>
            {/* Company Overview Slide */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-20 h-screen'
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='text-center space-y-6'
              >
                {/* Company Logo */}
                <a 
                  href={experience.companyLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='group inline-block'
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className='w-32 h-32 md:w-40 md:h-40 mx-auto rounded-2xl bg-white shadow-2xl flex items-center justify-center p-4 group-hover:shadow-[#F7AB0A]/50 transition-all duration-300'
                  >
                    <img 
                      src={experience.companyLogo} 
                      alt={experience.company}
                      className='w-full h-full object-contain'
                    />
                  </motion.div>
                </a>

                <div>
                  <a 
                    href={experience.companyLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='hover:text-[#F7AB0A] transition-colors duration-300'
                  >
                    <h4 className='text-4xl md:text-5xl font-bold text-white mb-3'>
                      {experience.company}
                    </h4>
                  </a>
                  <p className='text-2xl md:text-3xl text-[#F7AB0A] font-semibold mb-2'>
                    {experience.role}
                  </p>
                  <p className='text-gray-400 text-lg'>
                    {experience.period} • {experience.location}
                  </p>
                </div>

                <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-gray-700'>
                  <h5 className='text-2xl font-bold text-white mb-4'>
                    Projects Developed
                  </h5>
                  <div className='space-y-3'>
                    {experience.projects.map((project, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className='flex items-center gap-3'
                      >
                        <div className='w-12 h-12 rounded-lg bg-white flex items-center justify-center p-1.5 flex-shrink-0'>
                          <img 
                            src={project.logo} 
                            alt={project.name}
                            className='w-full h-full object-contain'
                          />
                        </div>
                        <div className='text-left'>
                          <p className='text-white font-semibold'>{project.name}</p>
                          <p className='text-gray-400 text-sm'>{project.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className='text-[#F7AB0A] mt-6 text-sm'
                  >
                    Swipe to explore each project →
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>

            {/* Individual Project Slides */}
            {experience.projects.map((project, projectIndex) => (
              <motion.div
                key={`${expIndex}-${projectIndex}`}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: projectIndex * 0.1 }}
                className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-20 h-screen'
              >
                {/* App Logo and Link */}
                <a 
                  href={project.appLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='group'
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className='relative'
                  >
                    <div className='w-32 h-32 md:w-40 md:h-40 xl:w-48 xl:h-48 rounded-2xl bg-white shadow-2xl flex items-center justify-center p-6 group-hover:shadow-[#F7AB0A]/50 transition-all duration-300'>
                      <img 
                        src={project.logo} 
                        alt={project.name}
                        className='w-full h-full object-contain'
                      />
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      className='absolute -bottom-3 -right-3 bg-[#F7AB0A] text-gray-900 rounded-full px-4 py-2 text-xs font-bold shadow-lg'
                    >
                      View Live →
                    </motion.div>
                  </motion.div>
                </a>

                {/* Company Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className='text-sm text-gray-500 uppercase tracking-wider'
                >
                  {experience.company}
                </motion.div>

                {/* Project Details */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className='max-w-4xl space-y-4 px-5 md:px-10'
                >
                  <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700'>
                    <h5 className='text-xl md:text-2xl font-bold text-[#F7AB0A] mb-3'>
                      {project.name}
                    </h5>
                    <p className='text-gray-300 text-sm md:text-base mb-4 italic'>
                      {project.description}
                    </p>
                    
                    {/* Highlights */}
                    <ul className='space-y-2 mb-4'>
                      {project.highlights.map((highlight, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + idx * 0.1 }}
                          className='flex items-start text-gray-400 text-sm md:text-base'
                        >
                          <span className='text-[#F7AB0A] mr-2 mt-1'>▸</span>
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className='flex flex-wrap gap-2 justify-center md:justify-start'>
                      {project.skills.map((skill, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + idx * 0.05 }}
                          whileHover={{ scale: 1.1, backgroundColor: '#F7AB0A', color: '#1f2937' }}
                          className='px-3 py-1.5 bg-gray-700 text-gray-300 text-xs md:text-sm rounded-full font-medium cursor-default transition-all'
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </React.Fragment>
        ))}
      </div>

      {/* Background Decorations */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 1.5 }}
        className='w-full absolute top-[30%] bg-[#F7AB0A]/20 left-0 h-[400px] -skew-y-12 z-0'
      />
    </motion.div>
  )
}

export default Experience
