import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef(null);

    const openMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(0)';
            sideMenuRef.current.style.display = 'flex';
        }
    };

    const closeMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(16rem)';
            sideMenuRef.current.style.display = 'none';
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center shadow-white/20 justify-between z-50 ${isScroll ? ' bg-[rgba(255,255,255,0.1)] backdrop-blur-2xl shadow-sm' : ''}`}>
                <a href='#top'>
                    <Image src={assets.logo} priority={false} className="w-11 h-11 cursor-pointer mr-14 rounded-full" alt='' />
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 backdrop-blur-2xl border border-white/50 bg-transparent rounded-full px-12 py-3  ${isScroll ? ' bg-[rgba(255,255,255,0.1)] backdrop-blur-3xl' : ''} `} >
                    <li><a className='font-ovo' href='#top'>Home</a></li>
                    <li><a className='font-ovo' href='#about'>About me</a></li>
                    <li><a className='font-ovo' href='#services'>Services</a></li>
                    <li><a className='font-ovo' href='#work'>My Work</a></li>
                    <li><a className='font-ovo' href='#contact'>Contact me</a></li>
                </ul>

                <div className='flex items-center gap-4'>
                    <a href='#contact' className='hidden border-white/50  bg-transparent lg:flex items-center gap-3 px-10 py-2.5 border rounded-full ml-4 shadow-sm bg-opacity-50'>
                        Contact <Image src={assets.arrow_icon_dark} className='w-3' alt='' />
                    </a>
                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src={assets.menu_white} className='w-6' alt='' />
                    </button>
                </div>

                {/* Mobile Menu */}
                <ul
                    ref={sideMenuRef}
                    style={{ transform: 'translateX(16rem)', display: 'none' }}
                    className='md:hidden flex-col bg-[#11001F] shadow-white/20 gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen transition duration-500'
                >
                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={assets.close_white} alt='' className='w-5 cursor-pointer' />
                    </div>
                    <li><a className='font-ovo' onClick={closeMenu} href='#top'>Home</a></li>
                    <li><a className='font-ovo' onClick={closeMenu} href='#about'>About me</a></li>
                    <li><a className='font-ovo' onClick={closeMenu} href='#services'>Services</a></li>
                    <li><a className='font-ovo' onClick={closeMenu} href='#work'>My Work</a></li>
                    <li><a className='font-ovo' onClick={closeMenu} href='#contact'>Contact me</a></li>
                </ul>
            </nav>
        </div >
    );
};

export default Navbar;
