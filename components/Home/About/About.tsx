import { aboutDetails, aboutInfo } from '@/app/Data/data'
import SectionHeading from '@/components/Helper/SectionHeading'
import { FaGraduationCap, FaBriefcase, FaCertificate, FaTrophy, FaCode, FaBook } from 'react-icons/fa'
import React from 'react'

type AboutDetailTitle = 'Education' | 'Internship' | 'Certifications' | 'Achievements' | 'Passion for Coding' | 'Interests';

const iconMap: Record<AboutDetailTitle, React.ReactNode> = {
  Education: <FaGraduationCap className='text-[#9560ef] text-2xl' />,
  Internship: <FaBriefcase className='text-[#9560ef] text-2xl' />,
  Certifications: <FaCertificate className='text-[#9560ef] text-2xl' />,
  Achievements: <FaTrophy className='text-[#9560ef] text-2xl' />,
  'Passion for Coding': <FaCode className='text-[#9560ef] text-2xl' />,
  Interests: <FaBook className='text-[#9560ef] text-2xl' />
}

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
        {/* Section Heading */}
        <SectionHeading>About Me</SectionHeading>
        {/* Text Content */}
        <div>
            <h1 className='w-[80%] mx-auto text-center mt-20 text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200 transition-transform duration-700 hover:scale-105 hover:text-[#38bdf8]'>
              {aboutInfo.title}
            </h1>
            <h3 className='w-[80%] text-justify text-white mx-auto my-7 text-xl '>{aboutInfo.description}</h3>
        </div>
        {/* Stats Content */}
        <div className='w-[80%] mx-auto grid grid-cols-2 gap-8 text-white'>
          {aboutDetails.map((detail, index) => (
            <div 
              key={detail.id} 
              className={`p-4 ${index % 2 === 0 ? 'col-span-1' : 'col-span-1'} transition-transform duration-500 hover:scale-105 hover:bg-[#1f2937] rounded-xl`}>
              <div className='flex items-center gap-2'>
                {iconMap[detail.title as AboutDetailTitle]} 
                <h3 className='text-xl font-bold text-[#9560ef] transition-transform duration-500 hover:scale-110 hover:text-[#38bdf8]'>
                  {detail.title}
                </h3>
              </div>
              <ul className='list-disc list-inside text-[18px]'>
                {detail.description.map((point, idx) => (
                  <li key={idx} className='transition-transform duration-300 hover:translate-x-2 hover:text-[#38bdf8]'>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
    </div>
  )
}

export default About
