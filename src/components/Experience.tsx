"use client"

import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import DetailsItem from './DetailsItems'


const Experience = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )

  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>Experience</h2>

      <div ref={ref} className='w-[75%] mx-auto relative'>

        <motion.div 
          style={{scaleY: scrollYProgress}}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-custom' 
        />

        <ul className='w-full flex flex-col justify-between items-center ml-4'>
          <DetailsItem 
            title='Sofware Engineer' 
            company='Google' 
            companyLink='www.google.com' 
            time='2022-Present' 
            addressOrPlace='Mountain View, CA' 
            info="Worked on a team responsible for developing new features for Google's 
            search engine, including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization." 
          />
          <DetailsItem 
            title='Sofware Engineer' 
            company='Google' 
            companyLink='www.google.com' 
            time='2022-Present' 
            addressOrPlace='Mountain View, CA' 
            info="Worked on a team responsible for developing new features for Google's 
            search engine, including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization." 
          />
          <DetailsItem 
            title='Sofware Engineer' 
            company='Google' 
            companyLink='www.google.com' 
            time='2022-Present' 
            addressOrPlace='Mountain View, CA' 
            info="Worked on a team responsible for developing new features for Google's 
            search engine, including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization." 
          />
          <DetailsItem 
            title='Sofware Engineer' 
            company='Google' 
            companyLink='www.google.com' 
            time='2022-Present' 
            addressOrPlace='Mountain View, CA' 
            info="Worked on a team responsible for developing new features for Google's 
            search engine, including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization." 
          />
          <DetailsItem 
            title='Sofware Engineer' 
            company='Google' 
            companyLink='www.google.com' 
            time='2022-Present' 
            addressOrPlace='Mountain View, CA' 
            info="Worked on a team responsible for developing new features for Google's 
            search engine, including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization." 
          />
          <DetailsItem 
            title='Sofware Engineer' 
            company='Google' 
            companyLink='www.google.com' 
            time='2022-Present' 
            addressOrPlace='Mountain View, CA' 
            info="Worked on a team responsible for developing new features for Google's 
            search engine, including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization." 
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience