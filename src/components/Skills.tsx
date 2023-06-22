"use client"

import React from 'react'
import {motion} from "framer-motion";
import Title from './ui/Title';

const Skill = ({name, x, y}: any) => {

    const move = {
        initial: {
            x: 0,
            y: 0
        },
        animate: {
            x: x,
            y: y,
            transition: {
                duration: 1.5
            }
        }
    }

    return (
        <motion.div 
            className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-custom lg:py-2 lg:px-4 md:text-xs md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
            whileHover={{scale: 1.05}}
            variants={move}
            initial={"inital"}
            whileInView={"animate"}
            viewport={{once: true}}
        >
            {name}
        </motion.div>
    )
}

// page
const Skills = () => {
  return (
    <>
        {/* <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2> */}
        <Title className="mt-64 text-center md:mt-32">
            Skills
        </Title>

        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
            <motion.div 
                className='flex items-center justify-center rounded-[100%] font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:bg-light dark:text-custom md:p-4 md:py-5 md:text-xs xs:p-2 xs:py-3'
                whileHover={{scale: 1.05}}
            >
                Web
            </motion.div>

            <Skill name="HTML" x="-26vw" y="1vw" />
            <Skill name="CSS" x="-5vw" y="-10vw" />
            <Skill name="Javascript" x="20vw" y="6vw" />
            <Skill name="ReactJS" x="0vw" y="12vw" />
            <Skill name="NextJS" x="-20vw" y="-15vw" />
            <Skill name="SanityCMS" x="15vw" y="-12vw" />
            <Skill name="Web Design" x="28vw" y="-3vw" />
            <Skill name="Figma" x="0vw" y="-20vw" />
            <Skill name="Prisma" x="-25vw" y="10vw" />
            <Skill name="Tailwind CSS" x="18vw" y="18vw" />
        </div>
    </>
  )
}

export default Skills