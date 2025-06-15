import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-1'>
            <div>
                <Image src={assets.logo} className='rounded-full w-23' alt='' />
            </div>
            <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>Hi! I'm Mostafa Falcon
                <Image src={assets.hand_icon} className='w-6' alt='' /></h3>
            <h1 className='text-3xl sm:text-5xl lg:text-[50px] front-ovo'>Mobile Application & Full-stack web developer, based in Egypt.</h1>
            <p className='max-w-2xl mx-auto front-ovo'>Iam a Mobile Application and full-stack web developer from alexandria, Egy with 3 years of experience</p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href='#contact' download className='px-10 py-3 border rounded-full border-white
                text-white flex items-center gap-2 bg-white/30'>contact me <Image src={assets.arrow_icon_dark}
                        className='w-4' alt='' /></a>
                <a href='/sample-resume.pdf' download className='px-10 py-3 border rounded-full text-black bg-white border-gray-500
                flex items-center gap-2'>my resume <Image src={assets.download_icon}
                        className='w-4' alt='' /></a>
            </div>
        </div>
    )
}

export default Header
