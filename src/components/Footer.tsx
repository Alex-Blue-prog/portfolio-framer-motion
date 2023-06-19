import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-[1px] border-solid border-gray-300 font-normal text-sm text-gray-600 dark:text-gray-400'>
      <Layout className='py-8 flex items-center justify-between relative '>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className='absolute left-1/2 -translate-x-1/2 font-bold'>
          Built With <span className='px-[1px] inline-block relative -top-[1px] animate-scale opacity-70'>💙</span> by <Link href={"/"} className=' underline underline-offset-2 text-custom'> <strong>Alex F.</strong> </Link>
        </div>
        {/* <Link href={"/"} className='underline underline-offset-2'>Say hello</Link> */}
      </Layout>
    </footer>
  )
}

export default Footer