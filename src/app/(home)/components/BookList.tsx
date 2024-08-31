import React from 'react';
import BookCard from './BookCard';
import { Book } from '@/types';

const BookList = async ({books}: {books: Book[]}) => {

    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto mb-10">
            {books.map((book: Book) => (
                <BookCard key={book._id} book={book} />
            ))}
        </div>
    );
};

export default BookList;