import Image from 'next/image'
import React from 'react'
import reactMatchGame from '../../../public/Projects/react-match-by-memory-desktop.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const MemoryMatch = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          fill
          style={{ objectFit: 'cover' }}
          src={reactMatchGame}
          alt="project"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Match by Memory</h2>
          <h3>React / Typescript / CSS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            I developed a memory-matching game using{' '}
            <span className="font-bold">React</span> and{' '}
            <span className="font-bold">TypeScript</span>, which I deployed on
            Vercel. The game challenges players to flip cards and find matching
            pairs, testing their memory and concentration. I utilized
            React&apos;s component-driven architecture to create a reusable{' '}
            <span className="font-bold">MemoryCard component</span>, while
            efficiently managing the game state using{' '}
            <span className="font-bold">useState</span> and{' '}
            <span className="font-bold">useEffect</span> hooks. <br />
            <br />
            Key functions such as <span className="font-bold">
              unflipCards
            </span>{' '}
            and <span className="font-bold">checkWin</span> are optimized with{' '}
            <span className="font-bold">useCallback</span> to enhance
            performance. I also implemented custom hooks for core game logic
            like shuffling the deck and resetting the game, ensuring organized
            and reusable code.
            <br />
            <br /> TypeScript was used throughout the project to enforce strict
            typing, improving code quality and reducing runtime errors. The
            combination of these technologies and best practices resulted in a
            responsive, visually appealing game that showcases my skills in
            modern front-end development.
          </p>
          <a
            href="https://github.com/nkulway/react-memory-game/tree/main"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://memory-match-delta.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 gap-y-2">
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Typescript
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
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

export default MemoryMatch
