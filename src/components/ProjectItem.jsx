import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({ title, backgroundImg, projectUrl, projectDetails }) => {
  return (
    <div className="relative flex items-center justify-center h-[300px] w-full shadow-xl shadow-gray-400 rounded-xl overflow-hidden group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt={title}
        layout="fill"
        objectFit="cover"
      />
      <div className="hidden group-hover:flex flex-col items-center justify-center absolute inset-0 text-center text-white p-4">
        <h3 className="text-2xl tracking-wider mb-2">{title}</h3>
        <p className="pb-4">{projectDetails}</p>
        <Link href={projectUrl} passHref>
          <p
            className="py-3 px-6 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer"
          >
            More Info
          </p>
        </Link>
      </div>
    </div>
  )
}

export default ProjectItem
