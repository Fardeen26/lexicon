import Book from "@/models/Book";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const parsedBody = JSON.parse(body.body);

        const { title, description, bookImage, bookPdfUrl, author } = parsedBody;

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
            { message: error ,success: false},
            { status: 500 }
        )
    }

}