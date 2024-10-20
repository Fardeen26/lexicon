import BookCard from './BookCard';
import { Book } from '@/types';
import axios from 'axios';

const BookList = async () => {

    const isServer = typeof window === 'undefined';

    // Determine API URL: Absolute for server, relative for client
    const apiUrl = isServer
        ? `${process.env.FRONTEND_URL || 'https://lexicon-sand.vercel.app'}/api/books`
        : '/api/books';

    const response = await axios.get(apiUrl);

    const books = await response.data.message;

    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto mb-10 max-sm:px-4 max-[1285px]:px-7">
            {books.map((book: Book) => (
                <BookCard key={book._id} book={book} />
            ))}
        </div>
    );
};

export default BookList;