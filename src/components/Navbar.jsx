import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [navBg, setNavBg] = useState('#ecf0f3')
  const [linkColor, setLinkColor] = useState('#1f2937')
  const router = useRouter()

  useEffect(() => {
    if (router.asPath.includes('/projects')) {
      setNavBg('transparent')
      setLinkColor('#ecf0f3')
    } else {
      setNavBg('#ecf0f3')
      setLinkColor('#1f2937')
    }
  }, [router])
  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  }, [])

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100]'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        {/* placeholder image for when I have 
                the images want on my navbar */}
        <Link href="#home" scroll={false}>
          <svg
            width="125"
            height="50"
            viewBox="0 0 100 95.4037600644114"
            className="logo"
          >
            <g
              transform="matrix(2.7062866883676975,0,0,2.7062866883676975,4.979567919543141,-19.636070439601244)"
              fill="#5651e5"
            >
              <path d="M20.4 10 c-2.52 10.8 -4.52 23 -5.2 30.56 c-1.32 1.56 -4.52 2.24 -5.08 0.56 l-0.12 -0.36 c-1.24 0.04 -2.28 -0.4 -2.64 -1.36 c-0.6 -1.8 -0.96 -3.72 -1.24 -5.64 c-0.2 1.8 -0.36 3.6 -0.52 5.84 c-1.08 0.88 -2.84 1.44 -4.52 1.28 c0.08 -0.48 0.2 -0.96 0.28 -1.44 c-0.96 0.2 -2 0.28 -3.2 0.2 c0.92 -5.2 1.52 -9.92 2.2 -14.36 c0.68 -4.48 1.48 -8.72 2.68 -12.12 c0.68 -1.88 4.2 -3.76 6.68 -3.16 c0.04 0.88 0.12 1.76 0.16 2.64 c0.4 -0.08 0.76 -0.08 1.08 0 c0.12 2.16 0.24 4.16 0.36 6 c0.6 -3.12 1.28 -6.56 1.92 -9.72 c1.08 -1.16 3.92 -1.96 6.12 -1.56 c-0.2 0.92 -0.4 1.84 -0.6 2.72 c0.64 -0.12 1.24 -0.16 1.64 -0.08 z M18.16 8.16 c-1.16 -0.08 -3.32 0.56 -4 1.24 c-1.16 5.64 -2.2 12.32 -3 16.6 c-0.12 0.68 -0.76 0.92 -0.92 0.16 c-0.32 -1.28 -0.68 -3.76 -0.88 -6.36 c-0.2 -2.52 -0.36 -5.56 -0.6 -9 c-1.44 -0.2 -4.28 1.36 -4.76 2.72 c-1.16 3.28 -1.96 7.44 -2.64 11.92 c-0.68 4.36 -1.28 9 -2.04 13.28 c1.52 0.04 3.08 -0.44 4.08 -1.24 c0.36 -4.64 0.68 -7.64 1.64 -12.2 c0.08 -0.48 0.92 -0.8 1 -0.24 c0.44 2.28 0.64 4.88 0.96 7.36 s0.68 4.88 1.32 6.64 c0.44 1.36 3.32 0.96 4.72 -0.56 c0.64 -7.56 2.64 -19.56 5.12 -30.32 z M35.111 13 c-2.36 5.08 -5.04 10.28 -7.28 14.76 c0.4 4.6 1.12 8.4 2.56 12.72 c-1.16 1.72 -3.36 2.68 -3.88 1.52 c-0.16 -0.32 -0.28 -0.64 -0.4 -1 c-1.08 0.28 -2 0.08 -2.32 -0.68 c-0.36 -0.76 -0.64 -1.56 -0.92 -2.4 c-0.12 1.32 -0.24 2.68 -0.28 4.04 c-1.2 0.56 -3.76 0.24 -3.88 -1.12 c-1.52 -0.16 -2.88 -0.96 -2.8 -2.2 c0.56 -9.52 2.32 -17.64 4.36 -26.68 c0.48 -2.2 4.2 -3.08 6.2 -1.84 c-0.12 0.64 -0.28 1.36 -0.44 2.16 c0.44 -0.08 0.88 -0.04 1.24 0.08 c0.52 -1.12 1.08 -2.28 1.64 -3.4 c2.28 -0.32 3.6 0.56 5.2 1.8 l-0.56 1.24 c0.56 0.24 1.08 0.6 1.56 1 z M32.870999999999995 11.079999999999998 c-1 -0.76 -2 -1.36 -3.32 -1.2 c-2.36 4.84 -4.76 10.4 -6.6 13.64 c-0.12 0.24 -0.64 0.24 -0.6 0 c0.6 -3.08 2.4 -9.88 3 -12.88 c-1.16 -0.6 -3.84 0.24 -4.12 1.52 c-2 9 -3.76 17.08 -4.32 26.52 c-0.08 1.16 2.2 1.68 3.48 1.16 c0.12 -2.16 0.28 -4.24 0.56 -6.28 c0.44 -0.88 0.84 -1.76 1.56 -3.16 c0.64 4.88 1.16 7.24 2.2 9.52 c0.44 1.04 2.4 0.08 3.44 -1.44 c-1.4 -4.32 -2.12 -8.12 -2.52 -12.76 c2.24 -4.48 4.88 -9.6 7.24 -14.64 z"></path>
            </g>
          </svg>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/#home" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* slider menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="#home" scroll={false}>
                <Image
                  src="/../public/assets/stock-1.jpg"
                  alt="/"
                  width="87"
                  height="35"
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Lets build something great together{' '}
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="#home" scroll={false}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="#about" scroll={false}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="#skills" scroll={false}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="#projects" scroll={false}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="#contact" scroll={false}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a
                    href="https://www.linkedin.com/in/nkulway/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a
                    href="https://github.com/nkulway"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a href="mailto:nkulway@gmail.com?subject=Inquiry%20from%20Your%20Portfolio&body=Hello%20[Nick%20Kulway],%0D%0A%0D%0AI%20am%20interested%20in%20discussing%20job%20opportunities%20with%20you.%0D%0A%0D%0ARegards,">
                    <AiOutlineMail />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a href="tel:4045636282">
                    <BsFillPersonLinesFill />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
