import { Book as BookI } from "@/types";
import Book from "@/models/Book";
import dbConnect from "@/lib/dbConnect";

export const runtime = "edge"

export async function GET(req: Request) {
    await dbConnect();
    try {
        const books: BookI[] = await Book.find({});
        return new Response(
            JSON.stringify({
                message: books,
                success: true
            }),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-store',
                },
            }
        );

    } catch (error) {
        console.error("Error while fetching books:", error);
        return new Response(
            JSON.stringify({
                message: 'Error while fetching books',
                success: false
            }),
            {
                status: 501,
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-store',
                },
            }
        );
    }
}

