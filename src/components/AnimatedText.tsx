"use client"

import React, { FC } from 'react'
import { motion } from "framer-motion"

// animation
const quote = {

    initial: {
        // opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08
        }
    }

}

// triggered animation
const singleWord = {

    initial: {
        opacity: 0,
        y: 50
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }

}

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const AnimatedText:FC<Props> = ({children, className=""}) => {

    let text = children as string;

  return (
    <div className={`w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden`}>
        <motion.h1 variants={quote} initial="initial" animate={"animate"} className={`inline-block w-full text-dark dark:text-light font-bold capitalize text-8xl ${className}`}>
            {
                text.split(" ").map((word, index) => 
                    <motion.span variants={singleWord} key={index} className='inline-block mt-2'>
                        {word}&nbsp;
                    </motion.span>
                )
            }
        </motion.h1>
    </div>
  )
}

export default AnimatedText