import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'

const about = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-ovo'>About me</h2>
      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image src={assets.user_image} className='w-full rounded-3xl' alt='user' />
        </div>
        <div className='flex-1'>
          <p className='mb-10 max-w-2xl font-ovo'>  I&apos;m a full-stack developer with a passion for crafting intuitive mobile and web applications.
            I use Flutter to build cross-platform mobile apps, and Next.js + TailwindCSS for fast, responsive websites.
            I focus on clean code, scalable solutions, and a great user experience.
            Whether you&apos;re a startup or an established business, I can help bring your ideas to life.
          </p>
          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({ icon, iconDark, title, description }, index) => {
              return (
                <li
                  className="border-[0.5px] text-white/90 border-gray-400 rounded-xl p-6 
                  cursor-pointer shadow transition duration-500 hover:shadow-white
                  hover:bg-[#11001F] hover:-translate-y-1"
                  key={index}
                >
                  <Image src={iconDark} className='w-7 mt-3' alt={title} />
                  <h3 className='my-4 font-semibold '>{title}</h3>
                  <p className='text-gray-400 text-sm'>{description}</p>
                </li>
              );
            })}
          </ul>

          <h4 className='my-6 text-gray-200 front-ovo'>Tools I use</h4>
          <ul className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index) => (
              <li className='flex items-center justify-center w-12
              sm:w-14 aspect-square border border-gray-400
              shadow transition duration-500 hover:-translate-y-1 hover:shadow-white  rounded-lg cursor-pointer' key={index}><Image src={tool} className='w-5 sm:w-7' alt='Tool' /></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default about
