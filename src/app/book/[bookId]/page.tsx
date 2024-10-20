import React from 'react';
import Image from 'next/image';
import { Book } from '@/types';
import DownloadButton from './components/DownloadButton';
import axios from 'axios';

const SingleBookPage = async ({ params }: { params: { bookId: string } }) => {

    let book: Book | null = null;
    try {
        const isServer = typeof window === 'undefined';
        const apiUrl = isServer ? `${process.env.FRONTEND_URL || 'https://lexicon-sand.vercel.app'}/api/books/${params.bookId}` : `/api/books/${params.bookId}`;

        const response = await axios.get(apiUrl);
        book = await response.data.message;
    } catch (err: any) {
        throw new Error('Error fetching book');
    }

    if (!book) {
        throw new Error('Book not found');
    }

    return (
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-10 px-5 py-10 h-[80.5vh]">
            <div className="col-span-2 pr-16 text-primary-950">
                <h2 className="mb-5 text-5xl font-bold leading-[1.1]">{book.title}</h2>
                <span className="font-semibold">by {book.author}</span>
                <p className="mt-5 text-lg leading-8">{book.description}</p>
                <DownloadButton fileLink={book.file} />
            </div>
            <div className="flex justify-end">
                <Image
                    src={book.coverImage}
                    alt={book.title}
                    className="rounded-md border"
                    height={0}
                    width={0}
                    sizes="100vw"
                    style={{ width: 'auto', height: '20rem' }}
                />
            </div>
        </div>
    );
};

export default SingleBookPage;