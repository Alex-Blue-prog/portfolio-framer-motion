"use client"

import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import { Metadata } from 'next'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '@/components/ui/Button'
import project1 from "@/../public/images/projects/crypto-screener-cover-image.jpg"

import {motion} from "framer-motion"
import AnimatedTitle from '@/components/ui/AnimatedTitle'

interface ProjectProps {
  title: string,
  type: string,
  img: StaticImageData,
  link: string,
  github: string
}

const Project = ({title, type, img, link, github}:ProjectProps) => {

  return (
    <motion.article 
      initial={{y: 50, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.9, delay: 0.4, type: 'spring'}}
      viewport={{once: true}}
      className='w-full shadow-2xl rounded-3xl p-6 border border-solid border-custom-200 bg-light relative dark:bg-dark dark:border-custom dark:shadow-none xs:p-4'>

      <Link href={link} target='_blank' className='w-full block cursor-pointer overflow-hidden rounded-lg'>
        <Image src={img} alt={title} className='w-full h-auto transition hover:scale-105' />
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-custom font-medium text-xl lg:text-lg md:text-base'>{type}</span>

        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-2xl font-bold lg:text-xl'>{title}</h2>
        </Link>

        {/* <p className='my-2 font-medium text-dark'>{summary}</p> */}

        <div className='mt-2 w-full flex items-center  justify-between'>
          <Link href={github} target='_blank' className='w-8 order-10 md:w-7'>
            <GithubIcon />
          </Link>
          <Link href={link} target='_blank' className={buttonVariants({size:'sm'})}>
            Visit 
          </Link>
        </div>
      </div>

    </motion.article>
  )
}

interface FeaturedProjectProps {
  type: string,
  title: string,
  summary: string,
  img: StaticImageData,
  link: string,
  github: string
}

const FeaturedProject = ({type, title, summary, img, link, github}: FeaturedProjectProps) => {

  return (
    <motion.article 
      initial={{y: 50, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.9, delay: 0.4, type: 'spring'}}
      viewport={{once: true}} 
      className='w-full flex items-center justify-between rounded-3xl border border-solid border-custom-200 bg-light shadow-2xl p-12 dark:bg-dark dark:border-custom dark:shadow-none lg:flex-col lg:p-8 xs:rounded-2xl xs:p-4'>

      <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
        <Image src={img} alt={title} className='w-full h-auto transition hover:scale-105' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 self-start lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-custom font-medium text-xl xs:text-base'>{type}</span>

        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-sm'>{title}</h2>
        </Link>

        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>

        <div className='mt-2 w-full flex items-center gap-4'>
          <Link href={github} target='_blank' className='w-10 sm:w-8'>
            <GithubIcon />
          </Link>
          <Link href={link} target='_blank' className={buttonVariants()}>
            Visit Project
          </Link>
        </div>
      </div>

    </motion.article>
  )
}

export const metadata: Metadata = {
    title: "My Projects",
    description: "You can learn more what I can build, my stack and my projects"
}


const ProjectsPage = () => {
  return (
    <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <div className='pt-16'>

            {/* <AnimatedText className='mb-16'>
                Imagination Trumps Knoledge!
            </AnimatedText> */}

            <AnimatedTitle size={"big"} className='mb-16 text-center sm:mb-8'>
              Imagination Trumps knowledge!
            </AnimatedTitle>

            <div className='grid grid-cols-12 gap-20 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
              <div className="col-span-12">
                <FeaturedProject
                  title="Crypto Screener Application"
                  summary='A feature-rich Crypto Screenr App using React, Tailwind CSS, Context API, React Router and It show detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.'
                  img={project1}
                  link='#'
                  github='#'
                  type="Featured Project"
                />
              </div>
              <div className="col-span-6 sm:col-span-12">
                <Project
                  title="Crypto Screener Application"
                  img={project1}
                  link='#'
                  github='#'
                  type="Featured Project"
                />
              </div>
              <div className="col-span-6 sm:col-span-12">
                <Project
                  title="Crypto Screener Application"
                  img={project1}
                  link='#'
                  github='#'
                  type="Featured Project"
                />
              </div>

              <div className="col-span-12">
                <FeaturedProject
                  title="Crypto Screener Application"
                  summary='A feature-rich Crypto Screenr App using React, Tailwind CSS, Context API, React Router and It show detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.'
                  img={project1}
                  link='#'
                  github='#'
                  type="Featured Project"
                />
              </div>
              <div className="col-span-6 sm:col-span-12">
                <Project
                  title="Crypto Screener Application"
                  img={project1}
                  link='#'
                  github='#'
                  type="Featured Project"
                />
              </div>
              <div className="col-span-6 sm:col-span-12">
                <Project
                  title="Crypto Screener Application"
                  img={project1}
                  link='#'
                  github='#'
                  type="Featured Project"
                />
              </div>
            </div>

        </div>
    </main>
  )
}

export default ProjectsPage