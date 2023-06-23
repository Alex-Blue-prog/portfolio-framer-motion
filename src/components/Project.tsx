"use client"

import {motion} from "framer-motion"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { GithubIcon } from "./Icons"
import { buttonVariants } from "./ui/Button"

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

export default Project