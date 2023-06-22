"use client"

import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import DetailsItem from './DetailsItems'
import Title from './ui/Title'

const Education = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )

  return (
    <div className='my-64'>
      {/* <h2 className='font-bold text-8xl mb-32 w-full text-center'>Education</h2> */}
      <Title className='mb-32 text-center md:mb-16'>
        Education
      </Title>

      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

        <motion.div 
          style={{scaleY: scrollYProgress}}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-custom md:w-[2px] md:left-[30px] xs:left-[20px]' 
        />

        <ul className='w-full flex flex-col justify-between items-center ml-4 xs:ml-2'>

          <DetailsItem 
            title="Bachelor Of Science In Computer Science"
            time="2016-2020"
            addressOrPlace="Massachusetts Institute Of Technology (MIT)"
            info="Relevant Courses included Data Structures and Algorithms, Computer Systems Enginner Interlligence."
          />
          <DetailsItem 
            title="Bachelor Of Science In Computer Science"
            time="2016-2020"
            addressOrPlace="Massachusetts Institute Of Technology (MIT)"
            info="Relevant Courses included Data Structures and Algorithms, Computer Systems Enginner Interlligence."
           />
           <DetailsItem 
            title="Bachelor Of Science In Computer Science"
            time="2016-2020"
            addressOrPlace="Massachusetts Institute Of Technology (MIT)"
            info="Relevant Courses included Data Structures and Algorithms, Computer Systems Enginner Interlligence."
          />
        </ul>
      </div>
    </div>
  )
}

export default Education