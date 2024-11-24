import BookCard from './BookCard';
import { Book } from '@/types';

const BookList = async () => {
    const apiUrl = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/api/books`;

    const response = await fetch(apiUrl, { cache: 'no-store' });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(`Error while fetching books: ${data.error}`);
    }

    const books: Book[] = data.message;

    return (
        <div className="grid min-h-screen grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto mb-12 max-sm:px-4 max-[1285px]:px-7">
            {books.length === 0 && <p>No books found.</p>}
            {books.map((book: Book) => (
                <BookCard key={book._id} book={book} />
            ))}
        </div>
    );
};

export default BookList;
