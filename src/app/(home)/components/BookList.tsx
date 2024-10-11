import BookCard from './BookCard';
import { Book } from '@/types';
import axios from 'axios';

const BookList = async () => {
    // const response = await axios.get(`${process.env.FRONTEND_URL}/books`);
        
    // if(!response.data.success) {
    //   throw new Error('An error occurred while fetching the books')
    // }
    // const books = await response.data.message;

    let books: Book[] = [
        {
            author:"Dale Carnegie",
            coverImage: "https://m.media-amazon.com/images/I/71vK0WVQ4rL._SY466_.jpg",
            description:"A book on people",
            file:"https://www.scribd.com/document/715592134/How-to-Win-Friends-and-Influence-People-by-Dale-Carnegie",
            title:"How to Win Friends and Influence People",
            _id:"66e01c9663398fa620c9a221",
        },
        {
            _id:"66e01c9663398fa620c9a223",
            title:"The 4 Hour Work Week",
            description:"A Book on Work",
            coverImage:"https://m.media-amazon.com/images/I/41oTshe994L._SY445_SX342_.jpg",
            file:"https://github.com/Babunashvili/Books-To-Read-Before-You-Die/blob/master/Ebooks/the-4-hour-workweek-expanded-and-updated-by-timothy-ferriss.pdf",
            author:"Timothy Ferriss"
        }
    ]

    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto mb-10">
            {books.map((book: Book) => (
                <BookCard key={book._id} book={book} />
            ))}
        </div>
    );
};

export default BookList;