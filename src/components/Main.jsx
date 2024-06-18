import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Lets build somehting together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Nick</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Software Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            {/* As a software developer with a focus on creating and upholding
            exceptional digital experiences, my current area of specialization
            is centered on constructing a comprehensive automated testing suite
            from scratch at Bakkt. Meanwhile, I am also dedicated to expanding
            my knowledge of emerging technologies. */}
            I specialize in creating and maintaining outstanding digital
            experiences as a software developer. Presently, my attention is on
            establishing a comprehensive automated testing suite from scratch at
            Bakkt, all while keeping up with the latest technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                href="https://www.linkedin.com/in/nkulway/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                href="https://github.com/nkulway"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a href="mailto:nkulway@gmail.com?subject=Inquiry%20from%20Your%20Portfolio&body=Hello%20[Nick%20Kulway],%0D%0A%0D%0AI%20am%20interested%20in%20discussing%20[topic]%20with%20you.%0D%0A%0D%0ARegards,%0D%0A[Nick%20Kulway]">
                <AiOutlineMail />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a href="tel:4045636282">
                <BsFillPersonLinesFill />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
