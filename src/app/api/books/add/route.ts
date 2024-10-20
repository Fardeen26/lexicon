import dbConnect from "@/lib/dbConnect";
import Book from "@/models/Book";

export async function POST(req: Request) {
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
        return Response.json(
            {message: 'Book Added Successfully!', success: true},
            { status: 200 }

        )

    } catch (error) {
        return Response.json(
            { message: `Error While Adding Book ${error}`, success: false},
            { status: 501 }
        )
    }

}