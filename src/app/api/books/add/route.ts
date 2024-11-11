import dbConnect from "@/lib/dbConnect";
import Book from "@/models/Book";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getServerSession } from "next-auth/next";


const bookSchema = z.object({
  title: z
    .string({ required_error: "Title is required!" })
    .min(3, { message: "Book Name must be at least 5 characters" }),

  description: z
    .string({ required_error: "Description is required!" })
    .min(10, { message: "Description must be at least 10 characters" })
    .max(200, { message: "Description must be no more than 200 characters" }),

  bookImage: z
    .string({ required_error: "Book Image URL is required!" })
    .url({ message: "Image URL is invalid" }),

  bookPdfUrl: z
    .string({ required_error: "Book PDF URL is required!" })
    .url({ message: "PDF URL is invalid" }),

  author: z
    .string({ required_error: "Author Name is required!" })
    .min(3, { message: "Author Name must be at least 5 characters" })
});

export async function POST(req: NextRequest) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ success: false, message: "You are Unauthorized" }, { status: 401 });
  }
  await dbConnect();

  try {
    const body = await req.json();

    const parsedData = bookSchema.parse(body);

    const book = new Book({
      title: parsedData.title,
      description: parsedData.description,
      coverImage: parsedData.bookImage,
      file: parsedData.bookPdfUrl,
      author: parsedData.author,
    });

    await book.save();

    return NextResponse.json(
      { message: 'Book Added Successfully!', success: true },
      { status: 200 }
    );


  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Validation Error", errors: error.errors, success: false },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: `Error While Adding Book: ${error}`, success: false },
      { status: 500 }
    );
  }
}
