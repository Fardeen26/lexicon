import React from 'react'
import Link from 'next/link';
import HexagonIcon from '@/utils/HexagonIcon';
import BookIcon from '@/utils/BookIcon';

const Navbar = () => {
    return (
        <nav className="border-b">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
                <div>
                    <Link href={'/'}>
                        <div className="flex items-center gap-1">
                            <div className="relative">
                                <HexagonIcon />
                                <BookIcon />
                            </div>
                            <span className="text-xl font-bold uppercase tracking-tight text-primary-500">
                                Lexicon
                            </span>
                        </div>
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <button className="h-10 rounded-md border border-primary-500 px-4 py-2 text-sm font-medium text-primary-500 transition-all hover:border-primary-100 hover:bg-primary-100 active:border-primary-200 active:bg-primary-200">
                        Sign in
                    </button>
                    <button className="h-10 rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-primary-600 active:bg-primary-700">
                        Sign up
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;


