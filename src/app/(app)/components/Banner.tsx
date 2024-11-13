import React from 'react';
import Image from 'next/image';

const Banner = () => {
    return (
        <div className="mx-auto max-w-7xl max-sm:!w-full py-10 max-sm:px-2">
            <div className="relative max-sm:w-full ">
                <Image
                    src={'/paper-bg.jpg'}
                    alt="billboard"
                    className="h-72 w-full rounded-lg"
                    height={0}
                    width={0}
                // sizes="100vw"
                />
                <div className="absolute inset-0 h-full rounded-lg opacity-30" />
                <Image
                    src={'/book.png'}
                    alt="billboard"
                    className="absolute bottom-0 right-5"
                    height={0}
                    width={0}
                    sizes="100vw"
                    style={{ width: 'auto', height: '18rem' }}
                />
                <h3 className="absolute left-10 max-sm:left-0 top-1/2 w-full max-w-3xl -translate-y-1/2 text-5xl max-sm:text-2xl font-bold tracking-tight text-black max-sm:text-center max-sm:px-2">
                    Connect, Share and Trade Your Favourite Reads...
                </h3>
            </div>
        </div>
    );
};

export default Banner;