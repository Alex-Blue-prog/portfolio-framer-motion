"use client"

import React from 'react'
import Link from 'next/link'

import { motion } from "framer-motion"

const MotionLink = motion(Link)


const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2 lg:mt-[2px]'>
        <MotionLink 
        href={"/"} 
        className='w-16 h-16 bg-custom text-light flex items-center justify-center rounded-full text-2xl font-bold hover:scale-110 transition-transform duration-100 border border-transparent dark:border-light lg:w-14 lg:h-14'
        initial={{backgroundColor: "bg-custom"}}
        whileHover={{
            backgroundColor: ["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
            transition: {duration: 1, repeat: Infinity}
        }}
        >
            AF
        </MotionLink>
    </div>
  )
}

export default Logo