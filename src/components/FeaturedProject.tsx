"use client"

import {motion} from "framer-motion"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { buttonVariants } from "./ui/Button"
import { GithubIcon } from "./Icons"

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

export default FeaturedProject