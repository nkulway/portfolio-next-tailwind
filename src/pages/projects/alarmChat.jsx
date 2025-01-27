import Image from 'next/image'
import React from 'react'
import alarmChatImg from '../../../public/Projects/alarm-chat.jpg'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const AlarmChat = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          fill
          style={{ objectFit: 'cover' }}
          src={alarmChatImg}
          alt="Alarm Chat project"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Alarm Chat</h2>
          <h3>Python / Raspberry Pi 4B / OpenAI</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Alarm Chat is an innovative alarm clock project that uses a{' '}
            <span className="font-bold">Raspberry Pi 4B</span> and a{' '}
            <span className="font-bold">photo-resistor</span> to create a unique
            wake-up experience. By running a simple Python script, the system
            detects changes in light exposure to trigger the alarm. <br />
            <br />
            This fun and interactive home automation project features a
            generative AI component that responds to the user as a pirate,
            adding a playful twist to your morning routine. Key components
            include <span className="font-bold">OpenAI</span> for the pirate
            speech, the <span className="font-bold">RPi.GPIO</span> library to
            manage GPIO pins, and{' '}
            <span className="font-bold">text-to-speech</span> from{' '}
            <span className="font-bold">Eleven Labs</span> for audio output. The{' '}
            <span className="font-bold">SpeechRecognition</span> library is used
            for converting spoken commands to text, while the{' '}
            <span className="font-bold">OpenWeather</span> API provides weather
            updates.
            <br />
            <br />
            These elements combine to create a feature-rich alarm system that
            not only wakes you up but also engages you with a unique and
            entertaining interaction.
          </p>
          <a
            href="https://github.com/nkulway/alarm-clock"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          {/* <a href="https://alarm-chat-demo.vercel.app/" target="_blank" rel="noreferrer">
                        <button className="px-8 py-2 mt-4">Demo</button>
                    </a> */}
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Resources</p>
            <div className="grid grid-cols-1 gap-y-2">
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-1" />{' '}
                <a
                  href="https://www.raspberrypi.org/products/raspberry-pi-4-model-b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Raspberry Pi 4B
                </a>
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-1" />{' '}
                <a
                  href="https://beta.openai.com/docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OpenAI
                </a>
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-1" />{' '}
                <a
                  href="https://pypi.org/project/RPi.GPIO/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RPi.GPIO
                </a>
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-1" />{' '}
                <a
                  href="https://www.elevenlabs.io/text-to-speech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Text to Speech (Eleven Labs)
                </a>
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-1" />{' '}
                <a
                  href="https://pypi.org/project/SpeechRecognition/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SpeechRecognition
                </a>
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-1" />{' '}
                <a
                  href="https://openweathermap.org/api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OpenWeather
                </a>
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

export default AlarmChat
