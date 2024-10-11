import BookCard from './BookCard';
import { Book } from '@/types';
import axios from 'axios';

const BookList = async () => {
    const response = await axios.get(`${process.env.FRONTEND_URL}/books`);
    
    const books = await response.data;

    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto mb-10">
            {books.map((book: Book) => (
                <BookCard key={book._id} book={book} />
            ))}
        </div>
    );
};

export default BookList;