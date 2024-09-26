import Image from 'next/image'
import React from 'react'
import actWellProjectImage from '../../../public/Projects/act-well.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const ActWell = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          fill
          style={{ objectFit: 'cover' }}
          src={actWellProjectImage}
          alt="project"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Act Well</h2>
          <h3>React / Node.js / Express / Material UI</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Act Well is a wellness-focused web app that I built using{' '}
            <span className="font-bold">React</span>,{' '}
            <span className="font-bold">Node.js</span>, and{' '}
            <span className="font-bold">Express</span> to create a seamless user
            experience for managing healthy activities. The app allows users to
            create personal profiles, log in with encrypted passwords, and
            generate a customized list of wellness activities, which can be
            saved to their favorites page for easy access.
            <br />
            <br />I utilized <span className="font-bold">Material UI</span> to
            design a clean and responsive user interface, ensuring a smooth and
            intuitive experience across devices. Express was used to handle
            server-side logic, including user authentication and data management
            with <span className="font-bold">Postgres</span> and{' '}
            <span className="font-bold">Sequelize</span> for database
            interactions. <br />
            <br />
            The app&apos;s state management is powered by{' '}
            <span className="font-bold">Redux</span>, allowing for efficient
            handling of user data and activities. Act Well combines a modern
            tech stack with best practices to deliver a functional and
            aesthetically pleasing wellness tool.
          </p>
          <a
            href="https://github.com/your-repo/act-well"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          {/* <a href="https://act-well.vercel.app/" target="_blank" rel="noreferrer">
                        <button className="px-8 py-2 mt-4">Demo</button>
                    </a> */}
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 gap-y-2">
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node.js
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Express
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Material UI
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Postgres
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Redux
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

export default ActWell
