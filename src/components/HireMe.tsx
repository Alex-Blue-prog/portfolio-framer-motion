import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed right-4 bottom-4 flex items-center justify-center overflow-hidden z-30 md:right-1 md:bottom-auto md:top-1 md:absolute'>
        <div className='w-44 h-auto flex items-center justify-center relative md:w-28'>
            <CircularText className="fill-dark animate-spin-slow dark:fill-light" />
            <Link className='absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] bg-dark text-light shadow-md border border-solid border-dark hover:border-custom w-20 h-20 rounded-full flex justify-center items-center italic font-semibold hover:bg-light hover:text-custom transitio dark:bg-light dark:text-dark hover:dark:text-custom hover:dark:bg-dark md:h-14 md:w-14 md:text-[10px] md:not-italic' href={"mailto:hatealex100@gmail.com"}>
                Hire Me
            </Link>
        </div>
    </div>
  )
}

export default HireMe