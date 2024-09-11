import React from 'react'
import ProjectItem from './ProjectItem'
import actWellProjectImage from '../../public/Projects/act-well.png'
import reactMatchGame from '../../public/Projects/react-match-by-memory-desktop.png'
import taleOfBrewCitiesImg from '../../public/Projects/tale-of-brew-cities.png'
import alarmChatImg from '../../public/Projects/alarm-chat.jpg'

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2>What I&apos;ve Built</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <ProjectItem
            title="Match by Memory"
            backgroundImg={reactMatchGame}
            projectUrl="/projects/memoryMatch"
            projectDetails="React / Typescript / CSS"
          />
          <ProjectItem
            title="ActWell"
            backgroundImg={actWellProjectImage}
            projectUrl="/projects/actWell"
            projectDetails="React / Material UI / Redux / Express"
          />
          <ProjectItem
            title="Alarm Chat"
            backgroundImg={alarmChatImg}
            projectUrl="/projects/alarmChat"
            projectDetails="Python / Raspberry Pi 4B / OpenAI"
          />
          <ProjectItem
            title="Tale of Brew Cities"
            backgroundImg={taleOfBrewCitiesImg}
            projectUrl="/projects/breweryLocator"
            projectDetails="JavaScript / Google Maps API / HTML / CSS"
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
