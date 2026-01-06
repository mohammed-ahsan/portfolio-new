import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({}: Props) {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Delivered', value: '20+' },
    { label: 'Technologies', value: '15+' },
    { label: 'Happy Clients', value: '10+' }
  ]

  const expertise = [
    {
      title: 'Full-Stack Development',
      icon: '💻',
      skills: ['React Native & React.js', 'Next.js 14 & NestJS', 'Node.js & Express', 'FastAPI & Spring Boot']
    },
    {
      title: 'Cloud & Architecture',
      icon: '☁️',
      skills: ['AWS & Google Cloud', 'Microservices Architecture', 'Event-Driven Systems', 'Serverless Functions']
    },
    {
      title: 'Database & Backend',
      icon: '🗄️',
      skills: ['MongoDB & PostgreSQL', 'Redis & RabbitMQ', 'Prisma ORM', 'GraphQL & REST APIs']
    },
    {
      title: 'DevOps & Tools',
      icon: '⚙️',
      skills: ['Docker & CI/CD', 'Git & Version Control', 'WebSockets & Socket.IO', 'Real-time Systems']
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
        transition={{ duration: 0.8 }}
        className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-semibold'
      >
        About
      </motion.h3>

      <div className='w-full space-y-12 mt-8'>
        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='max-w-5xl mx-auto'
        >
          <div className='relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-gray-700/50 shadow-2xl'>
            <div className='absolute inset-0 bg-gradient-to-br from-[#F7AB0A]/5 to-transparent rounded-2xl' />
            <div className='relative z-10 space-y-4'>
              <h4 className='text-2xl md:text-3xl font-bold text-white mb-4'>
                Full-Stack Engineer <span className='text-[#F7AB0A]'>& Mobile Developer</span>
              </h4>
              <p className='text-base md:text-lg text-gray-300 leading-relaxed'>
                Seasoned Full-Stack Engineer with <span className='text-[#F7AB0A] font-semibold'>5+ years</span> of hands-on experience building scalable, 
                enterprise-grade applications. Currently leading development at <span className='font-semibold text-white'>Next Level Media LLC</span>, 
                architecting CRM platforms that process <span className='text-[#F7AB0A] font-semibold'>100K+ daily events</span>.
              </p>
              <p className='text-base md:text-lg text-gray-300 leading-relaxed'>
                Specialized in crafting high-performance mobile and web solutions using modern technologies like React Native, Next.js, NestJS, and FastAPI. 
                Proven track record of optimizing application performance, reducing response times by <span className='text-[#F7AB0A] font-semibold'>40%</span>, 
                and delivering real-time systems at scale.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto'
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className='bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-[#F7AB0A]/50 text-center group'
            >
              <div className='text-3xl md:text-4xl font-bold text-[#F7AB0A] mb-2 group-hover:scale-110 transition-transform'>
                {stat.value}
              </div>
              <div className='text-xs md:text-sm text-gray-400 uppercase tracking-wider'>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Expertise Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto'
        >
          {expertise.map((area, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, x: index % 2 === 0 ? 10 : -10 }}
              transition={{ duration: 0.3 }}
              className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-[#F7AB0A]/50 group'
            >
              <div className='flex items-center gap-3 mb-4'>
                <span className='text-3xl group-hover:scale-125 transition-transform duration-300'>
                  {area.icon}
                </span>
                <h4 className='text-[#F7AB0A] font-semibold text-lg group-hover:text-white transition-colors'>
                  {area.title}
                </h4>
              </div>
              <ul className='space-y-2'>
                {area.skills.map((skill, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + idx * 0.05 }}
                    className='text-gray-400 text-sm flex items-center gap-2 group-hover:text-gray-300 transition-colors'
                  >
                    <span className='w-1.5 h-1.5 rounded-full bg-[#F7AB0A]' />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Professional Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='max-w-5xl mx-auto bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50'
        >
          <h4 className='text-xl md:text-2xl font-bold text-white mb-6 text-center'>
            Professional <span className='text-[#F7AB0A]'>Highlights</span>
          </h4>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-3'>
              <motion.div
                whileHover={{ x: 10 }}
                className='flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all'
              >
                <span className='text-[#F7AB0A] text-xl flex-shrink-0'>✓</span>
                <p className='text-gray-300 text-sm'>Built event-driven workflow engine processing <strong className='text-white'>100K+ daily events</strong></p>
              </motion.div>
              <motion.div
                whileHover={{ x: 10 }}
                className='flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all'
              >
                <span className='text-[#F7AB0A] text-xl flex-shrink-0'>✓</span>
                <p className='text-gray-300 text-sm'>Developed multi-vendor delivery system for <strong className='text-white'>50+ restaurants</strong></p>
              </motion.div>
              <motion.div
                whileHover={{ x: 10 }}
                className='flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all'
              >
                <span className='text-[#F7AB0A] text-xl flex-shrink-0'>✓</span>
                <p className='text-gray-300 text-sm'>Optimized API endpoints reducing response times by <strong className='text-white'>40%</strong></p>
              </motion.div>
            </div>
            <div className='space-y-3'>
              <motion.div
                whileHover={{ x: 10 }}
                className='flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all'
              >
                <span className='text-[#F7AB0A] text-xl flex-shrink-0'>✓</span>
                <p className='text-gray-300 text-sm'>Launched mobile apps on <strong className='text-white'>iOS App Store & Google Play Store</strong></p>
              </motion.div>
              <motion.div
                whileHover={{ x: 10 }}
                className='flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all'
              >
                <span className='text-[#F7AB0A] text-xl flex-shrink-0'>✓</span>
                <p className='text-gray-300 text-sm'>Integrated <strong className='text-white'>AI image generation</strong> with Stable Diffusion XL</p>
              </motion.div>
              <motion.div
                whileHover={{ x: 10 }}
                className='flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all'
              >
                <span className='text-[#F7AB0A] text-xl flex-shrink-0'>✓</span>
                <p className='text-gray-300 text-sm'>Architected real-time chat and <strong className='text-white'>marketing automation</strong> platforms</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className='text-center max-w-3xl mx-auto'
        >
          <p className='text-gray-400 text-sm md:text-base italic'>
            "Passionate about building scalable, high-performance applications that solve real-world problems 
            and deliver exceptional user experiences through clean code and modern architecture."
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About
