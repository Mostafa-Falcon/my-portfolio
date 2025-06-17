import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'


const footer = () => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <Image src={assets.logo} className='w-12 mx-auto mb-2 rounded-full' alt='' />
                <div className='w-max flex items-center gap-2 mx-auto'>
                    <Image src={assets.mail_icon} className='w-6' alt='' />mostafa0falocn@gmail.com
                </div>
            </div>
            <div className='text-center sm:flex items-center justify-between border-t 
            border-gray-400 mx-[10%] mt-12 py-6'>
                <p >© 2025 Mostafa Falcon. All right reserved.</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a href='https://github.com/Mostafa-Falcon' target='_blank'>Github</a></li>
                    <li><a href='https://www.linkedin.com/in/mostafa-falcon-42b29a36a/' target='_blank'>LinkedIn</a></li>
                    <li><a href='https://www.facebook.com/profile.php?id=61575568291092' target='_blank'>Facebook</a></li>
                </ul>

            </div>
        </div>
    )
}

export default footer
