import { type Metadata } from 'next'
import profilePic from "@/../public/images/profile/developer-pic-2.jpg";
import Image from 'next/image';

import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import AnimatedTitle from '@/components/ui/AnimatedTitle'
import AnimatedNumbers from '@/components/AnimatedNumbers'


// page
export const metadata: Metadata = {
    title: "About Me",
    description: "You can learn more about me and my webdev skills here."
}

const About = () => {

  return (
    <main className='flex w-full flex-col items-center justify-center'>
        <div className='pt-16 pb-0'>

            <AnimatedTitle size={"md"} className='mb-16 text-center sm:mb-8'>Passion Fuels Purpose!</AnimatedTitle>

            <div className='w-full grid grid-cols-8 gap-16 md:gap-x-0'>
                <div className='col-span-3 flex flex-col items-start justify-start lg:col-span-4 md:col-span-8'>

                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
                        Biography
                    </h2>
                    <p className='font-medium'>
                        Hi, I&apos;m CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
                        and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
                        new and innovative ways to bring my clients&apos; visions to life. 
                    </p>
                    <p className='my-4 font-medium'>
                        I believe that design is about more than just making things look pretty – it&apos;s about solving problems and 
                        creating intuitive, enjoyable experiences for users. 
                    </p>
                    <p className='font-medium'>
                        Whether I&apos;m working on a website, mobile app, or 
                        other digital product, I bring my commitment to design excellence and user-centered thinking to 
                        every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                    </p>
            
                </div> 

                <div className='col-span-3 relative h-max rounded-2xl border-2 border-gray-300 p-8 bg-light dark:bg-dark lg:col-span-4 md:col-start-2 md:col-span-6 xs:col-span-8'>
                    <div className='absolute top-0 -right-2 -z-10 w-[102%] h-[103%] rounded-[1rem] bg-custom-400' />
                    <div className='absolute top-1 -right-3 -z-20 w-[102%] h-[103%] rounded-[1rem] bg-custom-500' />
                    <div className='absolute top-2 -right-4 -z-30 w-[102%] h-[103%] rounded-[1rem] bg-custom-800' />
                    <Image src={profilePic} priority={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt='dev' className='w-full h-auto rounded-2xl' />
                </div>

                <div className='col-span-2 flex flex-col items-end justify-between lg:col-span-8 lg:flex-row sm:flex-col sm:gap-4 md:mt-6'>
                    <div className='flex flex-col items-end justify-center sm:border-b sm:border-custom-200 sm:w-full pb-4 sm:items-center'>
                        <span className='inline-block text-7xl font-bold text-custom-800 md:text-5xl'><AnimatedNumbers value={50} />+</span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 lg:mt-4 md:text-lg text-end sm:mt-2'>satisfied clients</h2>
                    </div>

                    <div className='flex flex-col items-end justify-center sm:border-b sm:border-custom-200 sm:w-full pb-4 sm:items-center'>
                        <span className='inline-block text-7xl font-bold text-custom-500 md:text-5xl'><AnimatedNumbers value={40} />+</span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 lg:mt-4 md:text-lg text-end sm:mt-2'>projects completd</h2>
                    </div>

                    <div className='flex flex-col items-end justify-center sm:border-b sm:border-custom-200 sm:w-full pb-4 sm:items-center'>
                        <span className='inline-block text-7xl font-bold text-custom-400 md:text-5xl'><AnimatedNumbers value={4} />+</span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 lg:mt-4 md:text-lg text-end sm:mt-2'>years of experience</h2>
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