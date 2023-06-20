"use client"

import Link from 'next/link'
import React, { FC, useEffect, useState } from 'react'
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
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname()

    const handleClick = () => {
        setIsOpen(prev => !prev);
    }

    useEffect(() => {
        setIsOpen(false); // close mobnav when page changed
    }, [pathname])

  return (
    <header className='w-full px-32 xl:px-24 lg:px-16 md:px-12 sm:px-8 py-8 font-medium flex items-center justify-between shadow-lg select-none 
    dark:text-light z-20'>

        <button className='hidden lg:flex flex-col justify-center items-center cursor-pointer' onClick={handleClick}>
            <span className={`bg-dark dark:bg-light transition duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? "rotate-45 translate-y-1" : "rotate-0 -translate-y-0.5"}`}></span>
            <span className={`bg-dark dark:bg-light transition duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen && "opacity-0"}`}></span>
            <span className={`bg-dark dark:bg-light transition duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "rotate-0 translate-y-0.5"}`}></span>
        </button>

        <div className='absolute top-2 left-[50%] translate-x-[-50%]'>
            <Logo />
        </div>


        {/* desk nav */}
        <div className='lg:hidden flex w-full items-center justify-between'>
            <nav>
                {navItems.map((value, index) => (
                    <CustomLink key={index} href={value.path} className='mr-8 relative group'>
                        {value.name}
                    </CustomLink>
                ))}
            </nav>
            
            <nav className='flex items-center flex-wrap'>
                <motion.a whileHover={{y: -2}} whileTap={{scale: 0.9}} className='w-6 mx-3' href={"https://google.com"} target='_blank'> <TwitterIcon /> </motion.a>
                <motion.a whileHover={{y: -2}} whileTap={{scale: 0.9}}  className='w-6 mx-3' href={"https://google.com"} target='_blank'> <GithubIcon /> </motion.a>
                <motion.a whileHover={{y: -2}} whileTap={{scale: 0.9}}  className='w-6 mx-3' href={"https://google.com"} target='_blank'> <LinkedInIcon /> </motion.a>
                <motion.a whileHover={{y: -2}} whileTap={{scale: 0.9}}  className='w-6 mx-3 dark:bg-light rounded-[100%]' href={"https://google.com"} target='_blank'> <PinterestIcon /> </motion.a>
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
        </div>

        {/* mobile nav */}
        {isOpen &&
            <div id='blackScreen' onClick={(e: any) => setIsOpen(prev => e.target.id === "blackScreen" ? false : prev) } className='hidden lg:flex items-center justify-center w-full fixed top-0 bottom-0 left-0 right-0 bg-black/50 z-40'>

                <motion.div initial={{scale: 0, x: "-50%", y: "-50%", opacity: 0}} animate={{scale: 1, opacity: 1}} className={`flex w-[70vw] flex-col items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 z-50`}>

                    <nav className='flex flex-col items-center justify-center'>
                        {navItems.map((value, index) => (
                            <CustomLink key={index} href={value.path} className='relative group text-light dark:text-dark my-2'>
                                {value.name}
                            </CustomLink>
                        ))}
                    </nav>

                    <nav className='flex items-center flex-wrap mt-2'>
                        <motion.a whileHover={{y: -2}} whileTap={{scale: 0.9}} className='w-6 mx-3 sm:mx-1' href={"https://google.com"} target='_blank'> <TwitterIcon /> </motion.a>
                        <motion.a whileHover={{y: -2}} whileTap={{scale: 0.9}} className='w-6 mx-3 sm:mx-1 text-light dark:text-dark' href={"https://google.com"} target='_blank'> <GithubIcon /> </motion.a>
                        <motion.a whileHover={{y: -2}} whileTap={{scale: 0.9}} className='w-6 mx-3 sm:mx-1' href={"https://google.com"} target='_blank'> <LinkedInIcon /> </motion.a>
                        <motion.a whileHover={{y: -2}} whileTap={{scale: 0.9}} className='w-6 mx-3 sm:mx-1 bg-light rounded-[100%]' href={"https://google.com"} target='_blank'> <PinterestIcon /> </motion.a>
                        <motion.a whileHover={{y: -2}} whileTap={{scale: 0.9}} className='w-6 ml-3 sm:ml-1' href={"https://google.com"} target='_blank'> <DribbbleIcon /> </motion.a>

                        {/* theme btn */}
                        <button onClick={() => setMode(prev => prev === "light" ? "dark" : "light")} className={`ml-6 flex items-center justify-center rounded-full p-1 absolute top-6 right-6 ${mode === "light" ? "bg-light text-dark" : "bg-dark text-light"}`}>
                            {mode === "dark" ?
                                <SunIcon className={"fill-dark"} />
                            :
                                <MoonIcon className={"fill-dark"} />
                            }
                        </button>
                    </nav>

                </motion.div>

            </div>
            
        }
       
        
        
    </header>
  )
}

export default Navbar