import { Book } from '@/types'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const BookCard = ({ book }: { book: Book }) => {
    return (
        <div className="flex gap-5 border-black border dark:border-gray-600 p-5 shadow-md rounded-xl">
            <Image
                src={book.coverImage}
                alt={book.title}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: '10rem', borderRadius: '10px' }}
            />
            <div>
                <h2 className="line-clamp-2 text-xl font-bold text-primary-600 dark:text-white text-balance">
                    {book.title}
                </h2>
                <p className="font-bold text-primary-900 dark:text-white mt-1 opacity-50">{book.author}</p>
                <Link
                    href={`/book/${book._id}`}
                    className="py-1 px-2 rounded border border-primary-500 dark:border-white mt-4 inline-block text-primary-500 dark:text-white font-medium text-sm
                    hover:border-primary-100 hover:bg-primary-100 transition hover:text-white dark:hover:text-black dark:hover:bg-white">
                    Read more
                </Link>
            </div>
        </div>
    )
}

export default BookCard