"use client"

import React, { useEffect, useRef } from 'react'
import { type Metadata } from 'next'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Skills from '@/components/Skills'
import profilePic from "@/../public/images/profile/developer-pic-2.jpg";
import Image from 'next/image';

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Experience from '@/components/Experience'
import Education from '@/components/Education'

// image animation
const MotionImage = motion(Image);

const imageContainer = {
    initial: {
        padding: "4px",
    },
    animate: {
        padding: "32px",
        transition: {
            delay: 0.5,
            staggerChildren: 0
        }
    }
}

const imageAnimate = {
    initial: {
        opacity: 0,
        rotate: "15deg"
    },
    animate: {
        opacity: 1,
        rotate: "0deg",
        transition: {
            delay: 0,
            duration: 0.5
        }
    }
}

// numbers increase animation
const AnimatedNumbers = ({value}:{value: number}) => {

    const ref = useRef<null | any>(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, {once: true});
 
    useEffect(() => {
        if(isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

// page
export const metadata: Metadata = {
    title: "About Me",
    description: "You can learn more about me and my webdev skills here."
}

const About = () => {

  return (
    <main className='flex w-full flex-col items-center justify-center'>
        <div className='pt-16 pb-0'>

            <AnimatedText className='!text-6xl !mb-16'>Passion Fuels Purpose!</AnimatedText>

            <div className='w-full grid grid-cols-8 gap-16'>
                <div className='col-span-3 flex flex-col items-start justify-start'>

                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
                        Biography
                    </h2>
                    <p className='font-medium'>
                        Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
                        and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
                        new and innovative ways to bring my clients' visions to life. 
                    </p>
                    <p className='my-4 font-medium'>
                        I believe that design is about more than just making things look pretty – it's about solving problems and 
                        creating intuitive, enjoyable experiences for users. 
                    </p>
                    <p className='font-medium'>
                        Whether I'm working on a website, mobile app, or 
                        other digital product, I bring my commitment to design excellence and user-centered thinking to 
                        every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                    </p>
            
                </div>

                <motion.div variants={imageContainer} initial="initial" animate="animate" className='col-span-3 relative h-max rounded-2xl border-2 border-gray-300 p-8 bg-light dark:bg-dark'>
                    <div className='absolute top-0 -right-2 -z-10 w-[102%] h-[103%] rounded-[1rem] bg-custom-400' />
                    <div className='absolute top-1 -right-3 -z-20 w-[102%] h-[103%] rounded-[1rem] bg-custom-500' />
                    <div className='absolute top-2 -right-4 -z-30 w-[102%] h-[103%] rounded-[1rem] bg-custom-800' />
                    <MotionImage variants={imageAnimate} src={profilePic} priority={true} alt='dev' className='w-full h-auto rounded-2xl' />
                </motion.div>

                <div className='col-span-2 flex flex-col items-end justify-between'>
                    <div className='flex flex-col items-end justify-center'>
                        <span className='inline-block text-7xl font-bold text-custom-800'><AnimatedNumbers value={50} />+</span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>satisfied clients</h2>
                    </div>

                    <div className='flex flex-col items-end justify-center'>
                        <span className='inline-block text-7xl font-bold text-custom-500'><AnimatedNumbers value={40} />+</span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>projects completd</h2>
                    </div>

                    <div className='flex flex-col items-end justify-cente'>
                        <span className='inline-block text-7xl font-bold text-custom-400'><AnimatedNumbers value={4} />+</span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>years of experience</h2>
                    </div>
                </div>

            </div>  

            <Skills />
            <Experience />
            <Education />
        </div>
    </main>
  )
}

export default About