import Image from 'next/image';
import { Book } from '@/types';
import DownloadButton from './components/DownloadButton';

interface SingleBookPageProps {
    params: { bookId: string };
}

async function fetchBookById(bookId: string): Promise<Book | null> {
    const apiUrl = `${process.env.FRONTEND_URL || 'https://lexicon-sand.vercel.app'}/api/books/${bookId}`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
        console.error('Error fetching book:', response.statusText);
        return null;
    }

    const data = await response.json();
    console.log("data is here", data)
    return data.message as Book;
}

const SingleBookPage = async ({ params }: SingleBookPageProps) => {
    const book = await fetchBookById(params.bookId);

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
