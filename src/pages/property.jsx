import Image from 'next/image'
import React from 'react'
import propertyImg from '../../public/Projects/property.jpg'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          fill
          style={{ objectFit: 'cover' }}
          src={propertyImg}
          alt="project"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Demo Project</h2>
          <h3>Next JS / Tailwind</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This is a dummy paragraph for a project in my software development
            portfolio. As a software developer, I understand the importance of
            having a portfolio that showcases my skills and expertise. Whether
            you&apos;re looking to land a new job or attract new clients, having
            a portfolio that highlights your best work is essential. That&apos;s
            why I&apos;m taking the time to create a portfolio that not only
            showcases my technical abilities but also my creativity,
            problem-solving skills, and attention to detail. In this project,
            I&apos;m creating a software development portfolio that includes
            examples of my work, as well as detailed descriptions of the
            projects I&apos;ve worked on. I&apos;m also including information
            about my experience and education, so potential employers or clients
            can get a better understanding of my background and qualifications.
          </p>
          <a href="https://github.com/nkulway" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a href="/#home" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  )
}

export default property
