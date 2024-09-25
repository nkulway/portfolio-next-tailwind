import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] text-center">
          Contact
        </p>
        <h2 className="py-4 text-center">Get In Touch</h2>
        <div className="flex justify-center">
          {/* left */}
          <div className="w-full lg:w-1/3 h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/contact.jpg"
                  alt="Contact Image"
                />
              </div>
              <div>
                <h2 className="py-2">Nick Kulway</h2>
                <p>Software Developer</p>
                <p className="py-4">
                  I am available for freelance work and am always looking to
                  connect. Let&apos;s talk!
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/nkulway/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full shadow-lg shadow-gray-400 w-16 h-16 flex items-center justify-center cursor-pointer hover:scale-110 ease-in duration-300"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://github.com/nkulway"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full shadow-lg shadow-gray-400 w-16 h-16 flex items-center justify-center cursor-pointer hover:scale-110 ease-in duration-300"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="mailto:nkulway@gmail.com?subject=Inquiry%20from%20Your%20Portfolio&body=Hello%20[Nick%20Kulway],%0D%0A%0D%0AI%20am%20interested%20in%20discussing%20[topic]%20with%20you.%0D%0A%0D%0ARegards,%0D%0A[Nick%20Kulway]"
                    className="rounded-full shadow-lg shadow-gray-400 w-16 h-16 flex items-center justify-center cursor-pointer hover:scale-110 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </a>
                  <a
                    href="tel:4045636282"
                    className="rounded-full shadow-lg shadow-gray-400 w-16 h-16 flex items-center justify-center cursor-pointer hover:scale-110 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="#home" scroll={false}>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp size={30} className="text-[#5651e5]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
