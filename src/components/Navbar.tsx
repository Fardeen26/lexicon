"use client"

import React, { useContext } from 'react'
import Link from 'next/link';
import HexagonIcon from '@/utils/HexagonIcon';
import BookIcon from '@/utils/BookIcon';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { DarkModeContext } from '@/app/providers';
import { LuMoonStar, LuSunMoon } from "react-icons/lu";


const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error("darkModeContext is possibly undefined!");
    }
    return context;
};

const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const session = useSession();
    const router = useRouter()
    const handleAuthLogic = () => {
        if (session.status === 'authenticated') {
            router.push('/add')
        }
        else {
            router.push('/signin')
        }
    }
    return (
        <nav className="border-b dark:border-b-gray-800 max-sm:px-4 max-[1285px]:px-10">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
                <div>
                    <Link href={'/'}>
                        <div className="flex items-center gap-1">
                            <div className="relative">
                                <HexagonIcon />
                                <BookIcon />
                            </div>
                            <span className="text-xl max-sm:text-lg font-bold uppercase tracking-tight text-primary-500 dark:text-white">
                                Lexicon
                            </span>
                        </div>
                    </Link>
                </div>

                <div className="flex items-center gap-6 max-sm:gap-2">
                    <div className='py-2.5 px-2.5 cursor-pointer dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full' onClick={toggleDarkMode}>
                        <div className='flex items-center'>
                            <button>
                                {isDarkMode ? <LuMoonStar className='dark:text-white w-[18px] h-[18px] max-sm:w-[20px] max-sm:h-[20px]' /> : <LuSunMoon className='w-5 h-5 max-sm:w-[20px] max-sm:h-[20px]' />}
                            </button>
                        </div>
                    </div>
                    <button className="h-10 max-sm:h-9 rounded-md bg-primary-500 px-4 py-2 max-sm:px-2 max-sm:py-1 text-sm font-medium text-white transition-all hover:bg-primary-600 dark:bg-white dark:hover:bg-black dark:hover:text-white dark:hover:border-white dark:text-black active:bg-primary-700 border hover:bg-transparent hover:border-black hover:text-black" onClick={handleAuthLogic}>
                        Add Your Book
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;


