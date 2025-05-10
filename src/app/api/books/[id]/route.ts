import dbConnect from "@/lib/dbConnect";
import { Book } from "@/models/Book";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    await dbConnect();

    try {
        const { id } = params;
        const book = await Book.findById(id)
            .populate('creator')
            .populate({
                path: 'reviews',
                options: { sort: { createdAt: -1 } }
            });


        if (book) {
            return Response.json(
                { message: book, success: true },
                { status: 200 },
            )
        } else {
            return Response.json(
                { message: 'No Book Found', success: false },
                { status: 404 }
            )
        }
    } catch (error) {
        return Response.json(
            { message: "Error while fetching books", success: false },
            { status: 501 }
        )
    }
}    
