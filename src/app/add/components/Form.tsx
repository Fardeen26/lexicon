"use client";
import React, { useState } from "react";
import { Toaster, toast } from "sonner";

interface BookData {
  title: string;
  description: string;
  bookImage: string;
  bookPdfUrl: string;
  author: string;
}

const Form = () => {
  const initialBookData: BookData = {
    title: "",
    description: "",
    bookImage: "",
    bookPdfUrl: "",
    author: "",
  };

  const [bookData, setBookData] = useState<BookData>(initialBookData);
  const [isAdding, setIsAdding] = useState<Boolean>(false)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const addBook = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsAdding(true)
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/books/add`,
        {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookData),
        }
      );

      const data = await response.json();
      if (data.success) {
        setIsAdding(false)
        toast.success("Book Added Successfully");
        setBookData(initialBookData);
      } else {
        setIsAdding(false)
        toast.error(data.msg);
      }
    } catch (error: any) {
      setIsAdding(false)
      toast.error(error.message);
    }
  };

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
          className="px-5 py-2 w-full border border-black placeholder:text-black focus:placeholder:text-gray-400 rounded text-black"
          required
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={bookData.description}
          onChange={handleOnChange}
          className="px-5 py-2 w-full border border-black placeholder:text-black focus:placeholder:text-gray-400 rounded text-black"
          required
        />
        <input
          type="text"
          placeholder="Book Image Url"
          name="bookImage"
          value={bookData.bookImage}
          onChange={handleOnChange}
          className="px-5 py-2 w-full border border-black placeholder:text-black focus:placeholder:text-gray-400 rounded text-black"
          required
        />
        <input
          type="text"
          placeholder="Book PDF Url"
          name="bookPdfUrl"
          value={bookData.bookPdfUrl}
          onChange={handleOnChange}
          className="px-5 py-2 w-full border border-black placeholder:text-black focus:placeholder:text-gray-400 rounded text-black"
          required
        />
        <input
          type="text"
          placeholder="Author"
          name="author"
          value={bookData.author}
          onChange={handleOnChange}
          className="px-5 py-2 w-full border border-black placeholder:text-black focus:placeholder:text-gray-400 rounded text-black"
          required
        />
        <button className="h-10 rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-primary-600 active:bg-primary-700 mt-5">
          {isAdding ? 'Adding...' : 'Add Book'}
        </button>
      </form>
    </div>
  );
};

export default Form;
