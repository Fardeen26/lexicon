import Book from "@/models/Book";
import { Book as BookI } from "@/types";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const book: BookI | null = await Book.findById(id);
        console.log(book)
        if (book) {
            return Response.json(
                {message: book, success: true}, 
                { status: 200 }
            )
        } else {
            return Response.json(
                {message: 'No Book Found', success: false}, 
                { status: 404 }
            )
        }
    } catch (error) {
        return Response.json(
            {message: error, success: false}, 
            { status: 501 }
        )
    }
}    
