"use client";

import axios from "axios";
import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { useSession } from "next-auth/react";

interface BookData {
  title: string;
  description: string;
  bookImage: string;
  bookPdfUrl: string;
  author: string;
}

const bookSchema = z.object({
  title: z.string({ required_error: "Title is required!" })
    .min(3, { message: "Book Name must be at least 5 characters" }),

  description: z.string({ required_error: "Description is required!" })
    .min(10, { message: "Description must be at least 10 characters" })
    .max(200, { message: "Description must be no more than 200 characters" }),

  bookImage: z.string({ required_error: "Book Image URL is required!" })
    .url({ message: "Image URL is invalid" }),

  bookPdfUrl: z.string({ required_error: "Book PDF URL is required!" })
    .url({ message: "PDF URL is invalid" }),

  author: z.string({ required_error: "Author Name is required!" })
    .min(3, { message: "Author Name must be at least 5 characters" })
});

const initialBookData: BookData = {
  title: "",
  description: "",
  bookImage: "",
  bookPdfUrl: "",
  author: "",
};

const Form = () => {
  const [bookData, setBookData] = useState<BookData>(initialBookData);
  const [isAdding, setIsAdding] = useState<Boolean>(false)
  const router = useRouter()
  const { status } = useSession();

  if (status === "loading") {
    return <div className="h-[80vh] flex justify-center items-center">Loading...</div>
  }

  if (status === "unauthenticated") {
    return <div>You are unauthorized</div>
  }


  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };


  const addBook = async (e: any) => {
    e.preventDefault();

    const isServer = typeof window === 'undefined';

    const apiUrl = isServer
      ? `${process.env.FRONTEND_URL || 'https://lexicon-sand.vercel.app'}/api/books/add`
      : '/api/books/add';

    const result = bookSchema.safeParse(bookData);

    if (!result.success) {
      result.error.errors.forEach((err) => toast.error(err.message));
      return;
    }


    setIsAdding(true)
    try {
      const response = await axios.post(apiUrl, bookData);

      if (response.data.success) {
        toast.success("Book Added Successfully :)")
        router.push('/')
      } else {
        toast.error("Something went wrong :(")
      }
    } catch (error: any) {
      let zodError = error?.response?.data?.msg;
      toast.error(`${zodError ? zodError : error}`)
    } finally {
      setIsAdding(false)
    }
  }

  return (
    <div className="h-[80vh] flex justify-center items-center max-sm:px-2">
      <Toaster position="bottom-right" richColors />
      <form className="flex flex-col gap-5 w-[40vw] max-sm:w-full" onSubmit={addBook}>
        <input
          type="text"
          placeholder="Book Name"
          name="title"
          value={bookData.title}
          onChange={handleOnChange}
          className="px-5 py-2 w-full border border-black placeholder:text-black focus:placeholder:text-gray-400 rounded-lg text-black"
          min={5}
          required
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={bookData.description}
          onChange={handleOnChange}
          className="px-5 py-2 w-full border border-black placeholder:text-black focus:placeholder:text-gray-400 rounded-lg text-black"
          required
        />
        <input
          type="text"
          placeholder="Book Image Url"
          name="bookImage"
          value={bookData.bookImage}
          onChange={handleOnChange}
          className="px-5 py-2 w-full border border-black placeholder:text-black focus:placeholder:text-gray-400 rounded-lg text-black"
          required
        />
        <input
          type="text"
          placeholder="Book PDF Url"
          name="bookPdfUrl"
          value={bookData.bookPdfUrl}
          onChange={handleOnChange}
          className="px-5 py-2 w-full border border-black placeholder:text-black focus:placeholder:text-gray-400 rounded-lg text-black"
          required
        />
        <input
          type="text"
          placeholder="Author"
          name="author"
          value={bookData.author}
          onChange={handleOnChange}
          className="px-5 py-2 w-full border border-black placeholder:text-black focus:placeholder:text-gray-400 rounded-lg text-black"
          required
        />
        <button className="h-10 rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-primary-600 active:bg-primary-700 border hover:bg-transparent hover:border-black hover:text-black">
          {isAdding ? 'Adding...' : 'Add Book'}
        </button>
      </form>
    </div>
  );
};

export default Form;
