import React from 'react';
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="h-14 max-sm:h-20 border-t py-5 px-10 max-sm:px-4 text-center text-xs flex justify-between max-sm:flex-col max-sm:items-center max-sm:gap-2">
            <span>© 2024 Lexicon&#39;s Book All rights reserved.</span>
            <span className='gap-3 flex'>
                <Link href="https://x.com/fardeen14693425" target='_blank' className='underline'>Twitter</Link>
                <Link href="https://github.com/Fardeen26" target='_blank' className='underline'>Github</Link>
                <Link href="https://www.linkedin.com/in/fardeenmansoori" target='_blank' className='underline'>LinkedIn</Link>
            </span>
        </footer>
    );
};

export default Footer;