import BookCard from '@/app/(app)/components/BookCard';
import { Book } from '@/types';

const BookList = async () => {
    const apiUrl = `${process.env.FRONTEND_URL}/api/books`;

    const response = await fetch(apiUrl, { cache: 'no-store' });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(`Error while fetching books: ${data.error}`);
    }

    const books: Book[] = data.message;

    return (
        <section className="py-20 px-4">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">Discover you Favorite Books</h2>
            <div
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
                {books.map((book, index) => (
                    <div
                        key={index}
                    >
                        <BookCard book={book} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BookList;