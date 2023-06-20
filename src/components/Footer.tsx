import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-[1px] border-solid border-gray-300 font-normal text-sm text-gray-600 dark:text-gray-400 relative py-8 
    flex items-center px-32 xl:px-24 lg:px-16 md:px-12 sm:px-8 md:flex-col md:py-6 sm:text-xs'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className='absolute left-1/2 -translate-x-1/2 font-bold dark:font-normal md:static md:translate-x-0 md:mt-2'>
          Built With <span className='px-[1px] inline-block relative -top-[1px] animate-scale opacity-70'>💙</span> by <Link href={"/"} className='underline underline-offset-4 text-custom'> <strong className='dark:font-normal'>Alex F.</strong> </Link>
        </div>
        {/* <Link href={"/"} className='underline underline-offset-2'>Say hello</Link> */}
    </footer>
  )
}

export default Footer