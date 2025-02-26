import { skillsData } from '@/app/Data/data'
import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import SkillsCard from './SkillsCard'

const Skills = () => {
  return (
    <div className='pt-16 pb-16 bg-[#0f0715]'>
       <SectionHeading>Skills</SectionHeading> 
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-[80%] mx-auto items-center mt-20'>
        {skillsData.map((skill)=>{
            return <div key={skill.id}>
                <SkillsCard  skill={skill}/>
                {/* SkillsCard */}
            </div>
       })}
       </div>
    </div>
  )
}

export default Skills