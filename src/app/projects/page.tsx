import { Metadata } from 'next'
import React from 'react'
import project1 from "@/../public/images/projects/crypto-screener-cover-image.jpg"
import AnimatedTitle from '@/components/ui/AnimatedTitle'
import Project from '@/components/Project'
import FeaturedProject from '@/components/FeaturedProject'


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