import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  location: string;
  project: string;
  skills: string[];
  description: string;
  logo?: string;
  appLink?: string;
}

function ExperienceCard({company, role, period, location, project, skills, description, logo, appLink}: ExperienceCardProps) {
  const content = (
    <div className='flex flex-col rounded-lg items-center space-y-3 flex-shrink-0 w-[350px] md:w-[450px] xl:w-[600px] snap-center p-5 bg-gray-800 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className='rounded-full bg-white w-32 h-32 xl:w-[200px] xl:h-[200px] flex items-center justify-center object-cover object-center p-4'
        >
          {logo ? (
            <img src={logo} alt={company} className='w-full h-full object-contain' />
          ) : (
            <span className='text-gray-800 font-bold text-2xl xl:text-4xl'>{company.charAt(0)}</span>
          )}
        </motion.div>
        
        <div className='flex flex-col items-center space-y-2'>
          <h4 className='text-xl font-bold text-white'>{role}</h4>
          <div className='uppercase text-[#F7AB0A] font-semibold'>{company}</div>
          <div className='text-gray-400'>{period}</div>
          <div className='text-gray-500 text-sm'>{location}</div>
        </div>

        <div className='w-full pt-4'>
          <div className='flex items-center justify-between mb-2'>
            <h5 className='text-[#F7AB0A] font-semibold'>{project}</h5>
            {appLink && (
              <span className='text-blue-400 text-xs hover:underline'>View App →</span>
            )}
          </div>
          <p className='text-gray-400 text-sm mb-3'>{description}</p>
          <div className='flex flex-wrap gap-2'>
            {skills.map((skill, index) => (
              <span key={index} className='px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full'>
                {skill}
              </span>
            ))}
          </div>
        </div>
    </div>
  );

  if (appLink) {
    return (
      <a href={appLink} target="_blank" rel="noopener noreferrer" className='block'>
        {content}
      </a>
    );
  }

  return content;
}

export default ExperienceCard
