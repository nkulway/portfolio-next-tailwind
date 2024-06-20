import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProjectItem from './ProjectItem'
import propertyImg from '../../public/Projects/property.jpg'
import stock3 from '../../public/Projects/stock-3.jpg'
import stock4 from '../../public/Projects/stock-4.jpg'
import stock5 from '../../public/Projects/stock-5.jpg'
import stock6 from '../../public/Projects/stock-6.jpg'

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16"></div>
      <p className="text-xl tracking-widest uppercase text-[#5651e5]">
        Projects
      </p>
      <h2>What I've Built</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <ProjectItem
          title="Placeholder Project One"
          backgroundImg={propertyImg}
          projectUrl="/property"
        />
        <ProjectItem
          title="Placeholder Project Two"
          backgroundImg={stock3}
          projectUrl="/projectTwo"
        />
        <ProjectItem
          title="Placeholder Project Three"
          backgroundImg={stock3}
          projectUrl="/projectThree"
        />
        <ProjectItem
          title="Placeholder Project Four"
          backgroundImg={stock3}
          projectUrl="/projectFour"
        />
        <ProjectItem
          title="Placeholder Project Five"
          backgroundImg={stock3}
          projectUrl="/projectFive"
        />
      </div>
    </div>
  )
}

export default Projects
