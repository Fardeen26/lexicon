import dbConnect from "@/lib/dbConnect";
import { Book, CreatorModel } from "@/models/Book";

export async function GET(req: Request) {
    await dbConnect();
    try {
        const books = await Book.find({}).populate<{ creator: CreatorModel }>('creator');

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

