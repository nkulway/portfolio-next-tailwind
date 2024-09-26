import Image from 'next/image'
import React from 'react'
import taleOfBrewCitiesImg from '../../../public/Projects/tale-of-brew-cities.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const TaleOfBrewCities = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          fill
          style={{ objectFit: 'cover' }}
          src={taleOfBrewCitiesImg}
          alt="Tale of Brew Cities project"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Tale of Brew Cities</h2>
          <h3>JavaScript / Google Maps API / HTML / CSS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Tale of Brew Cities is a brewery locator application developed using
            <span className="font-bold">JavaScript</span>,
            <span className="font-bold">Google Maps API</span>,
            <span className="font-bold">HTML</span>, and{' '}
            <span className="font-bold">CSS</span>. The app enables users to
            search for breweries by city and save their favorite locations for
            future reference.
            <br />
            <br />
            Leveraging the Google Maps API, I integrated a dynamic map feature
            that allows users to visualize brewery locations on an interactive
            map. The interface is clean and user-friendly, designed with custom
            CSS to ensure an enjoyable experience.
            <br />
            <br />
            The core logic of the app utilizes JavaScript to fetch and display
            real-time brewery data, enabling users to interact with map markers
            and retrieve detailed brewery information. The app&apos;s
            functionality also includes the ability to add and manage favorite
            breweries, stored locally for a personalized user experience.
          </p>
          <a
            href="https://github.com/nkulway/tale-of-brew-cities"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="http://the-tale-of-brew-cities.surge.sh/"
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
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Google Maps API
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

export default TaleOfBrewCities
