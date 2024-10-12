import React from 'react'
import Link from 'next/link';
import HexagonIcon from '@/utils/HexagonIcon';
import BookIcon from '@/utils/BookIcon';

const Navbar = () => {
    return (
        <nav className="border-b max-sm:px-4 max-[1285px]:px-10">
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
                    <Link href={'/add'}>
                    <button className="h-10 rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-primary-600 active:bg-primary-700 border hover:bg-transparent hover:border-black hover:text-black">
                        Add Your Book
                    </button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;


