import Image from "next/image";
import Link from "next/link";
import profilePic from "@/../public/images/profile/developer-pic-1.png";
// import lightBulb from "@/../public/images/svgs/miscellaneous_icons_1.svg";

import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import { buttonVariants } from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="flex items-center w-full" style={{minHeight: "calc(100vh - 86px)"}}>
  
        <div className="flex items-center justify-between h-full w-full">

          <div className="w-[65%] flex flex-col items-center">
            <AnimatedText className="!text-5xl !text-left">
              Turning Vision Into Reality With Code And Design
            </AnimatedText>
            <p className="my-4 text-base font-medium">
              As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
              Explore my latest projects and articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="self-start mt-2  flex items-center">
              <Link href={"/dummy.pdf"} target="_blank" download={true} className={buttonVariants()} >
                Resume <LinkArrow className="w-6 ml-1" />
              </Link>
              <Link href={"mailto:hatealex100@gmail.com"} target="_blank" className={buttonVariants({btncolor: "underline", className: "ml-4"})}>
                Contact
              </Link>
            </div>
          </div>

          <div className="w-[35%]">
            <Image priority={true} src={profilePic} alt="CodeBucks" className="w-full h-auto" />
          </div>

        </div>
    
      <HireMe />

      {/* <div className="absolute right-10 bottom-8 inline-block w-16 rotate-[-20deg]">
        <Image src={lightBulb} alt="Alex Ferreira" className="w-full h-auto" />
      </div> */}
    </main>
  )
}
