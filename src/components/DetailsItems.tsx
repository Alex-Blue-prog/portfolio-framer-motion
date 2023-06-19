"use client"

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import LiIcon from './LiIcon'

interface DetailsProps {
  title: string,
  company?: string,
  companyLink?: string,
  time: string,
  addressOrPlace: string,
  info: string,
}

const DetailsItem = ({title, company, companyLink, time, addressOrPlace, info}: DetailsProps) => {
    const ref = useRef(null);
  
    return (
      <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>

        {/* animated circle svg */}
        <LiIcon reference={ref} />

        <motion.div
          initial={{y:50, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration:0.5, delay: 0.4, type: "spring"}}
          viewport={{once: true}}
        >

          <h3 className='capitalize font-bold text-2xl mb-1'>
            {title} &nbsp; {company && companyLink && <a href={companyLink} className='text-custom capitalize font-medium' target='_blank'>@{company}</a>}
          </h3>
          <span className='capitalize font-medium text-sm text-dark/75 dark:text-light/75'>
            {time} | {addressOrPlace}
          </span>
          <p className='font-medium w-full mt-2'>
            {info}
          </p>

        </motion.div>

      </li>
    )
  }
  

export default DetailsItem