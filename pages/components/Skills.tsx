import React from 'react'
import {motion} from 'framer-motion'
import Skill from './src/Skill'


type Props = {}
interface Skills {
  name: string,
  icon:  string ,
  
}
function Skills({}: Props) {
  let index = 0
  const skills=[{name:'React',icon:'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'},{name:'Next.js',icon:'https://www.svgrepo.com/show/354113/nextjs-icon.svg'},
  {name:'Tailwind',icon:'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'},{name:'Framer Motion',icon:'https://camo.githubusercontent.com/179d66ab2b0321726c88a586c4ad38802e7113a3c98c6fd3f0156c01c98cfd14/68747470733a2f2f6672616d657275736572636f6e74656e742e636f6d2f696d616765732f34386861395a52396f5a51475136675a38595566456c50335430412e706e67'},
  {name:'Node.js',icon:'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png'},{name:'MongoDB',icon:'https://img.icons8.com/color/512/mongodb.png'},
  {name:'Express.js',icon:"https://www.muluken.dev/expressjs-icon.png"},{name:'TypeScript',icon:'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png'},
  {name:'PostgreSQL',icon:'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg'},{name:'Git',icon:'https://git-scm.com/images/logos/downloads/Git-Icon-White.svg'}]
  return (
    <motion.div className=' justify-center mx-auto items-center   xl:px-10 xl:space-y-0
    flex relative flex-col text-center md:text-left xl:flex-row min-h-screen'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
            <div className='grid mx-5 xl:my-5 grid-cols-4 gap-5'>
            {skills.map((skill:Skills)=>(
              <Skill key={index++} id={index} name={skill.name} icon={skill.icon}/>
            ))}
            </div>
            </motion.div>
  )
}

export default Skills