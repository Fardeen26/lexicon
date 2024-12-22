"use client"

import React, { useContext } from 'react'
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { DarkModeContext } from '@/app/providers';
import { LuMoonStar, LuSunMoon } from "react-icons/lu";
import { Button } from './ui/button';
import { motion } from 'framer-motion';


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

    const handleSignin = () => {
        router.push('/signin')
    }
    return (
        <header className="px-16 max-sm:px-2 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <Link href={'/'}>
                    <div className="flex items-center gap-2">
                        <div className="relative size-8">
                            <motion.div
                                className="absolute inset-0 rounded bg-primary"
                                animate={{
                                    rotate: [0, 10, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <span className="absolute inset-0 flex items-center justify-center font-bold text-primary-foreground">L</span>
                        </div>
                        <span className="text-xl font-bold">LEXICON</span>
                    </div>
                </Link>
                <div className="flex items-center gap-4 max-sm:gap-3">
                    <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
                        {
                            isDarkMode ? <LuMoonStar className="size-5" /> : <LuSunMoon className="size-5" />
                        }
                    </Button>
                    <Button onClick={handleSignin}>SignIn</Button>
                    <Button onClick={handleAuthLogic}>Add Book</Button>
                </div>
            </div>
        </header>
    )
}

export default Navbar;


