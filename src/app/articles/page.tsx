"use client"

import { Metadata } from 'next'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'

import article1 from "@/../public/images/articles/pagination component in reactjs.jpg"
import article2 from "@/../public/images/articles/What is higher order component in React.jpg"
import article3 from "@/../public/images/articles/create modal component in react using react portals.png"
import { motion, useMotionValue } from 'framer-motion'
import AnimatedTitle from '@/components/ui/AnimatedTitle'
import Title from '@/components/ui/Title'

const FramerImage = motion(Image);

interface MovingImgProps {
  title: string,
  img: StaticImageData,
  link: string
}

const MovingImg = ({title, img, link}: MovingImgProps) => {

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef<null | HTMLImageElement>(null);

  function handleMouse(event: React.MouseEvent<HTMLAnchorElement>) {
    if(imgRef.current === null) return;

    imgRef.current.style.display = "inline-block"
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event: React.MouseEvent<HTMLAnchorElement>) {
    if(imgRef.current === null) return;

    imgRef.current.style.display = "none"
    x.set(0);
    y.set(0);
  }

  return (
    <Link href={link} target='_blank'
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className='capitalize text-lg font-semibold hover:underline dark:text-light'>
        {title}
      </h2>
      <FramerImage style={{x: x, y: y}} initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 0.2}}} ref={imgRef} src={img} alt={title} className='w-96 h-auto hidden absolute rounded-lg z-30 md:!hidden' />
    </Link>
  )
}

interface ArticleProps {
  img: StaticImageData,
  title: string,
  date: string,
  link: string
}

const Article = ({img, title, date, link}: ArticleProps) => {

  return (
    <motion.li initial={{y: 200}} whileInView={{ y: 0, transition: {duration: 0.5, ease: "easeInOut"} }} viewport={{once: true}} className='relative w-full px-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-custom-300 border-r-4 border-b-4 dark:bg-dark dark:border-custom sm:flex-col'>
      <MovingImg title={title} img={img} link={link} />
      <span className='text-custom font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm sm:mt-4'>{date}</span>
    </motion.li>
  )
}

interface FeaturedArticlesProps {
  img: StaticImageData,
  title: string,
  time: string,
  summary: string,
  link: string
}

const FeaturedArticles = ({img, title, time, summary, link}:FeaturedArticlesProps) => {

  return (
    <li className='col-span-1 w-full p-4 bg-light border border-solid border-custom-300 rounded-2xl dark:bg-dark dark:border-custom dark:shadow-none'>
      <Link href={link} target='_blank' className='w-full inline-block cursor-pointer overflow-hidden rounded-lg mb-2'>
        <Image src={img} alt='article' className='transition hover:scale-105' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
      </Link>
      <Link href={link} target='_blank'>
        <h2 className='capitalize text-2xl font-bold py-2 pt-4 border-t border-custom-300 hover:underline dark:border-custom xs:text-lg xs:pb-4'>{title}</h2>
      </Link>
      <p className='text-sm mb-2 xs:mb-4'>
        {summary}
      </p>
      <span className='text-custom font-semibold'>
        {time}
      </span>
    </li>
  )
}

export const metadata: Metadata = {
  title: "Alex F. | Articles",
  description: "Check out my articles and learn about web development"
}

const ArticlesPage = () => {
  return (
    <main className='w-full flex flex-col items-center justify-center'>
      <div className='pt-16 pb-16'>

        {/* <AnimatedText className='mb-16'>Words Can Change The World!</AnimatedText> */}

        <AnimatedTitle size={"big"} className='mb-16 text-center sm:mb-8'>
              Imagination Trumps knowledge!
        </AnimatedTitle>

        <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
          <FeaturedArticles
            title='Build A Custom Pagination Component In Reactjs from Scratch'
            summary='Learn how to build a custom pagination component in ReactJs from scratch.'
            time='9 min read'
            link='#'
            img={article1}
          />
          <FeaturedArticles
            title='Build A Custom Pagination Component In Reactjs from Scratch'
            summary='Learn how to build a custom pagination component in ReactJs from scratch.'
            time='9 min read'
            link='#'
            img={article2}
          />
        </ul>
{/* 
        <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2> */}
        <Title size={'md'} className='text-center my-16 mt-32'>
          All Articles
        </Title>

        <ul>
          <Article
            title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
            date='March 22, 2023'
            link='#'
            img={article3}
          />
          <Article
            title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
            date='March 22, 2023'
            link='#'
            img={article3}
          />
          <Article
            title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
            date='March 22, 2023'
            link='#'
            img={article3}
          />
          <Article
            title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
            date='March 22, 2023'
            link='#'
            img={article3}
          />
          <Article
            title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
            date='March 22, 2023'
            link='#'
            img={article3}
          />
          <Article
            title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
            date='March 22, 2023'
            link='#'
            img={article3}
          />
        </ul>
      </div>
    </main>
  )
}

export default ArticlesPage