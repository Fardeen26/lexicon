"use client"

import Image from 'next/image';
import { Book } from '@/types';
import DownloadButton from './components/DownloadButton';
import ReviewForm from '@/components/ReviewForm';
import Reviews from '@/components/Reviews';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';

interface SingleBookPageProps {
    params: { bookId: string };
}

const SingleBookPage = ({ params }: SingleBookPageProps) => {
    const [book, setBook] = useState<Book>();
    const { data: session, status } = useSession();

    const fetchBoks = useCallback(async () => {
        try {
            const response = await axios.get(`/api/books/${params.bookId}`);
            setBook(response.data.message);
        } catch (error) {
            console.error(error);
        }
    }, [params.bookId, setBook]);

    useEffect(() => {
        fetchBoks();
    }, [session, fetchBoks, params.bookId]);

    if (!book) return <div className='h-screen flex justify-center pt-4'>Loading...</div>;
    return (
        <>
            <div className="mx-auto grid max-sm:grid-cols-1 max-w-full grid-cols-3 gap-14 max-sm:gap-0 px-5 max-sm:px-4 py-10 max-sm:h-full">

                <div className="flex justify-end max-sm:justify-center">
                    <Image
                        src={book.coverImage}
                        alt={book.title}
                        className="rounded-md border"
                        height={800}
                        width={800}
                        sizes="100vw"
                        style={{ width: 'auto', height: '28rem' }}
                        priority={true}
                    />
                </div>

                <div className="col-span-2 mt-6 max-sm:mt-6 text-primary-950 dark:text-white">
                    <h2 className="mb-2 text-5xl max-sm:text-3xl max-sm:text-center font-bold leading-[1.1]">{book.title}</h2>
                    <div className="max-sm:mt-6">
                        <span className="font-semibold">by {book.author}</span>
                        <div className='flex space-x-2 mt-2'>
                            <span className='font-semibold'>creator:</span>
                            <div className='flex space-x-2'>
                                <span><Image src={book?.creator?.image ?? ''} alt='creator image' width={20} height={20} className='rounded-full' /></span>
                                <span>{book?.creator?.name ?? ''}</span>
                            </div>
                        </div>
                        <p className="mt-7 text-sm leading-6 pr-10 max-sm:pr-0">{book.description}</p>
                        <DownloadButton fileLink={book.file} />
                    </div>
                </div>

            </div>

            <ReviewForm id={params.bookId} onReviewAdded={fetchBoks} />
            {book.reviews && book.reviews.length > 0 && <Reviews book={book} />}

        </>
    );
};

export default SingleBookPage;