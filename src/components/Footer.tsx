import React from 'react';
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="border-t py-5 px-10 text-center text-xs flex justify-between">
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