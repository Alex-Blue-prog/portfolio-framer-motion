"use client"

import React, { FC } from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { motion } from "framer-motion"

// animation
const quote = {

    initial: {
        // opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0,
            staggerChildren: 0.20
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

const AnimatedTitleVariant = cva(
    "text-dark inline-block w-full font-bold text-capitalize dark:text-light",
    {
        variants: {
            size: {
                default: "text-5xl xl:text-5xl lg:text-6xl md:text-5xl sm:text-2xl",
                big: "text-8xl lg:text-7xl sm:text-6xl xs:text-4xl",
                md: "text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-2xl"
            }
        },
        defaultVariants: {
            size: "default"
        }
    }
)

interface Props extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof AnimatedTitleVariant> {}

const AnimatedTitle: FC<Props> = ({children, size, className}) => {

    let text = children as string;


  return (
    <div className='w-full py-2 overflow-hidden sm:py-0'>
        <motion.h1 variants={quote} initial={"initial"} animate={"animate"} className={AnimatedTitleVariant({size, className})}>
            {
                text.split(" ").map((word, index) => 
                    <motion.span variants={singleWord} key={index} className='inline-block mt-2 sm:mt-0'>
                        {word}&nbsp;
                    </motion.span>
                )
            }
        </motion.h1>
    </div>
  )
}


AnimatedTitle.displayName = "AnimatedTitle"

export default AnimatedTitle