import dbConnect from "@/lib/dbConnect";
import Book from "@/models/Book";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    await dbConnect();

    try {
        const body = await req.json();

        const { title, description, bookImage, bookPdfUrl, author } = body;

        const book = new Book({
            title,
            description,
            coverImage: bookImage,
            file: bookPdfUrl,
            author
        });

        await book.save();

        const response = NextResponse.json(
            { message: 'Book Added Successfully!', success: true },
            { status: 200 }
        );
        
        response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');

        return response;

    } catch (error) {
        return NextResponse.json(
            { message: `Error While Adding Book: ${error}`, success: false },
            { status: 500 }
        );
    }
}
