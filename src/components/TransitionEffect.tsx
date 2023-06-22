"use client"

import React from 'react'
import { motion } from "framer-motion"

const TransitionEffect = () => {
  return (
    <>
        <motion.div className='fixed top-0 bottom-0 left-0 w-screen h-screen z-[100] bg-custom'
        initial={{width: "100%"}}
        animate={{width: "0%"}}
        transition={{duration: 0.8, ease: "easeInOut"}}
        exit={{width: ["0%", "100%"] }}
        />

        <motion.div className='fixed top-0 bottom-0 left-0 w-screen h-screen z-[99] bg-custom-700'
        initial={{width: "100%"}}
        animate={{width: "0%"}}
        transition={{duration: 0.8, ease: "easeInOut", delay: 0.2}}
        />

        <motion.div className='fixed top-0 bottom-0 left-0 w-screen h-screen z-[98] bg-custom-900'
        initial={{width: "100%"}}
        animate={{width: "0%"}}
        transition={{duration: 0.8, ease: "easeInOut", delay: 0.4}}
        />
    </>
  )
}

export default TransitionEffect