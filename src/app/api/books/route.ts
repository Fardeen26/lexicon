import { Book as BookI } from "@/types";
import Book from "@/models/Book";
import dbConnect from "@/lib/dbConnect";


export async function GET(req: Request) {
    await dbConnect();
    try {
        const books: BookI[] = await Book.find({});
        return Response.json(
            { message: books, success: true },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error while fetching books:", error);
        return Response.json(
            { message: 'Error while fetching books', success: false },
            { status: 501 }
        );
    }
}

