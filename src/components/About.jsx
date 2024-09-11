import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          {/* <p className="py-2 text-gray-600">// </p> */}
          <p className="py-2 text-gray-600">
            I&apos;m a full-stack web developer and automation engineer with a
            focus on Typescript, React, Angular, and modern technologies. My journey
            began in 2020 when I started teaching myself JavaScript and building
            projects with HTML, CSS, and Vue. This passion for technology led me
            to enroll in a bootcamp at Digital Crafts, where I honed my full-stack
            development skills and secured my first role as a junior developer.
          </p>
          <p className="py-2 text-gray-600">
            In my current position as a software engineer at Bakkt, I write automated
            tests using TypeScript/Node and Mocha. I work on a scrum team, building
            projects with Angular, Java, and Spring Boot, and I handle compliance aspects
            such as PCI to ensure our solutions meet stringent security standards. My enthusiasm
            for technology drives me to continually learn and stay ahead of industry trends,
            ensuring I contribute effectively to our team&apos;s success.
          </p>
          <p className="py-2 text-gray-600">
            Outside of work, I&apos;m passionate about exploring new technologies, traveling, and
            hiking. I enjoy experimenting with new recipes in the kitchen and love diving into
            a new book. Whether it&apos;s hitting the trails, discovering new places, or
            spending time with family playing board games, I&apos;m always eager to connect with others who share
            similar interests. Feel free to reach out and say hello!
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="/assets/profile/profile-pic-2.jpg"
            alt="profile-picture"
          />
        </div>
      </div>
    </div>
  )
}

export default About
