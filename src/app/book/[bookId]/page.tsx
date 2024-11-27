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
        <div className="mx-auto grid max-sm:grid-cols-1 max-w-full grid-cols-3 gap-14 max-sm:gap-0 px-5 max-sm:px-4 py-10 h-[80.5vh] max-sm:h-full">

            <div className="flex justify-end max-sm:justify-center">
                <Image
                    src={book.coverImage}
                    alt={book.title}
                    className="rounded-md border"
                    height={800}
                    width={800}
                    sizes="100vw"
                    style={{ width: 'auto', height: '28rem' }}
                />
            </div>

            <div className="col-span-2 mt-6 max-sm:mt-6 text-primary-950 dark:text-white">
                <h2 className="mb-2 text-5xl max-sm:text-3xl max-sm:text-center font-bold leading-[1.1]">{book.title}</h2>
                <div className="max-sm:mt-6">
                    <span className="font-semibold">by {book.author}</span>
                    <div className='flex space-x-2 mt-2'>
                        <span className='font-semibold'>creator:</span>
                        <div className='flex space-x-2'>
                            <span><Image src={book.creatorImage} alt='creator image' width={20} height={20} className='rounded-full' /></span>
                            <span>{book.creatorName}</span>
                        </div>
                    </div>
                    <p className="mt-7 text-lg leading-8">{book.description}</p>
                    <DownloadButton fileLink={book.file} />
                </div>
            </div>

        </div>
    );
};

export default SingleBookPage;
