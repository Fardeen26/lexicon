import dbConnect from '@/lib/dbConnect';
import { Book, Review } from '@/models/Book';
import { Types } from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';

interface ReviewData {
    comment: string;
    rating: number;
    author: string;
    bookId: string;
    profileImage: string;
}

export async function POST(req: NextRequest) {
    await dbConnect();

    const body: ReviewData = await req.json();
    try {
        console.log(body)
        console.log("book id", body.bookId)
        const book = await Book.findById(body.bookId);
        console.log("book is here", book)
        if (!book) {
            return NextResponse.json({ success: false, message: 'Book not found' }, { status: 404 });
        }

        const review = new Review({
            comment: body.comment,
            rating: body.rating,
            createdAt: new Date(),
            author: body.author,
            profileImage: body.profileImage
        });

        book?.reviews?.push(review as any as Types.ObjectId);
        await review.save();
        await book.save();

        return NextResponse.json({ success: true, message: 'Review added successfully' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Error while adding review', error }, { status: 500 });
    }

}