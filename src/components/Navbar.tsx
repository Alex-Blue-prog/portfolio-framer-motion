"use client"

import Link from 'next/link'
import React, { FC } from 'react'
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from './Icons'
import Logo from './Logo'
import useThemeSwitcher from './hooks/useThemeSwitcher'

// NAVBAR MAIN LINKS ARRAY
const navItems = [
    {name: "Home", path: "/"},
    {name: "About", path: "/about"},
    {name: "Projects", path: "/projects"},
    {name: "Articles", path: "/articles"},
]

// NAVBAR CUSTOM LINK COMPONENT
export interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const CustomLink:FC<ButtonProps> = ({ href, children, ...props }) => {

    const pathname = usePathname()

    return(
        <Link href={href ?? "#"}{...props}>
            {children}
            <span className={`${href === pathname ? "w-full" : "w-0"} h-[2px] bg-custom absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300`}></span>
        </Link>
    )
}

// NAV
const Navbar = () => {

    const {mode, setMode} = useThemeSwitcher();


  return (
    <header className='w-full px-32 py-8 z-50 font-medium flex items-center justify-between shadow-lg select-none dark:text-light'>
        <nav>
            {navItems.map((value, index) => (
                <CustomLink key={index} href={value.path} className='mr-8 relative group'>
                    {value.name}
                </CustomLink>
            ))}
        </nav>

        <div className='absolute top-2 left-[50%] translate-x-[-50%]'>
         <Logo />
        </div>
        
        <nav className='flex items-center flex-wrap'>
            <motion.a whileHover={{y: -2}} whileTap={{scale: 0.9}} className='w-6 mx-3' href={"https://google.com"} target='_blank'> <TwitterIcon /> </motion.a>
            <motion.a whileHover={{y: -2}} whileTap={{scale: 0.9}}  className='w-6 mx-3' href={"https://google.com"} target='_blank'> <GithubIcon /> </motion.a>
            <motion.a whileHover={{y: -2}} whileTap={{scale: 0.9}}  className='w-6 mx-3' href={"https://google.com"} target='_blank'> <LinkedInIcon /> </motion.a>
            <motion.a whileHover={{y: -2}} whileTap={{scale: 0.9}}  className='w-6 mx-3' href={"https://google.com"} target='_blank'> <PinterestIcon /> </motion.a>
            <motion.a whileHover={{y: -2}} whileTap={{scale: 0.9}}  className='w-6 ml-3' href={"https://google.com"} target='_blank'> <DribbbleIcon /> </motion.a>

            {/* theme btn */}
            <button onClick={() => setMode(prev => prev === "light" ? "dark" : "light")} className={`ml-6 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
                {mode === "dark" ?
                    <SunIcon className={"fill-dark"} />
                :
                    <MoonIcon className={"fill-dark"} />
                }
            </button>
        </nav>
    </header>
  )
}

export default Navbar