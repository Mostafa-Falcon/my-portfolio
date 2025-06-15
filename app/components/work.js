import { assets, workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const work = () => {
    return (
        <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center b-2 text-lg font-ovo'>My portfolio</h4>
            <h2 className='text-center text-5xl font-ovo'>My latest work</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                Welcome to my web developer portfolio! Eplore a collection of projects
                showcasing my experience in front-end developer.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 my-10 gap-5'>
                {workData.map((project, index) => (
                    <div
                        key={index}
                        className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg
                        relative cursor-pointer group"
                        style={{ backgroundImage: `url(${project.bgImage})` }}
                    >
                        <div className='bg-[#11001F] w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2
                        py-3 px-5 flex items-center justify-between duration-500 groub-hover:bottom-7'>
                            <div>
                                <h2 className='font-semibold'>{project.title}</h2>
                                <p className='text-sm text-gray-400'>{project.description}</p>
                            </div>
                            <div className='border rounded-full border-white/50 w-9 aspect-square
                            flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-white/50
                            transition'>
                                <Image src={assets.sun_icon} className='w-5' alt='' />
                            </div>

                        </div>
                    </div>

                ))}
            </div>
            <a href='' className='w-max flex items-center justify-center gap-2 
            text-gray-300 border-[0.5px] border-gray-700 rounded-full y-3 px-10 mx-auto my-20'>Show more <Image src={assets.right_arrow_bold_dark}
                    className='w-4' alt='' /></a>
        </div>
    )
}

export default work
