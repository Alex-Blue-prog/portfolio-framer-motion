import './globals.css'
import Script from 'next/script'

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' })

// components
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Alex F. | Portfolio',
  description: 'This is my Portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-mont bg-light dark:bg-dark dark:text-light transition-colors duration-200`}>
        <Navbar />
          <div className='w-full px-32 xl:px-24 lg:px-16 md:px-12 sm:px-8  min-h-[calc(100vh-96px)] lg:min-h-[calc(100vh-74px)]'>
            {children}
          </div>
        <Footer />
      </body>

      <Script id='theme-switcher'>
        {`
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
        `}   
      </Script>
    </html>
  )
}
