'use client'

import BookCard from './BookCard';
import { Book } from '@/types';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast, Toaster } from 'sonner';

const BookList = () => {
    const [books, setBooks] = useState<Book[]>([])
    const [isFetching, setIsFetching] = useState<boolean>(false)

    const fetchBooks = async () => {
        setIsFetching(true)
        try {
            const isServer = typeof window === 'undefined';

            const apiUrl = isServer
                ? `${process.env.FRONTEND_URL || 'https://lexicon-sand.vercel.app'}/api/books`
                : '/api/books';

            const response = await axios.get(apiUrl);

            setBooks(response.data.message)
        } catch (error) {
            toast.error(`Error while fetching books ${error}`)
        } finally {
            setIsFetching(false)
        }
    }

    useEffect(() => {
        fetchBooks()
    }, [])

    return (
        <div className="grid min-h-screen grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto mb-10 max-sm:px-4 max-[1285px]:px-7">
            <Toaster position="bottom-right" richColors />
            {
                isFetching && <p>Fetching...</p>
            }
            {books.map((book: Book) => (
                <BookCard key={book._id} book={book} />
            ))}
        </div>
    );
};

export default BookList;