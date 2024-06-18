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
          <p className="py-2 text-gray-600">// Not your normal dev</p>
          <p className="py-2 text-gray-600">
            I&apos;m a full-stack web developer and automation engineer. I spent
            five years as a chef, honing my skills and exploring my passion for
            cooking. While I thoroughly enjoyed my time in the kitchen, I
            discovered a newfound interest in utilizing technology to deliver
            diverse products and experiences to people around the world. This
            desire to expand my skill set drove me to transition from culinary
            arts to focusing on technology.
          </p>
          <p className="py-2 text-gray-600">
            In 2020, I started teaching myself Javascript, building projects
            with HTML, CSS, and Vue. I was fascinated by the intricacies of
            programming and wanted to learn more, so I decided to enroll in a
            bootcamp. At Digital Crafts, I learned the fundamentals of
            full-stack web development and eventually landed my first job as a
            junior developer.
          </p>
          <p className="py-2 text-gray-600">
            Today, as a software engineer at Bakkt, I collaborate with my
            colleagues to develop and maintain an automated testing suite using
            technologies such as Typescript/Node, Mocha, Chai, webdriver.io,
            Perfecto, and Azure DevOps. Additionally, I work as a quality
            engineer on a scrum team for our loyalty rewards program. I am
            dedicated to continuous learning and skill-building to ensure
            exceptional quality in our work. I strive to write high-quality code
            that meets the best practices and standards of our industry.
          </p>
          <p className="py-2 text-gray-600">
            Outside of work, I&apos;m a curious person who loves to explore new
            ideas and experiences. When I&apos;m not tinkering with code, you
            can find me experimenting in the kitchen, traveling to new places,
            or getting lost in a good book. I&apos;m always eager to connect
            with other like-minded people, so feel free to reach out and say
            hello!
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
