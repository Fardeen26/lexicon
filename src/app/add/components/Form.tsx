"use client"
import React, { useState } from 'react'

const Form = () => {
  const [bookData, setBookData] = useState<Object>({
    title: '',
    description: '',
    bookImage: '',
    bookPdfUrl: '',
    author: '',
  })

  const handleOnChange = async (e:any) => {
        setBookData({ ...bookData, [e.target.name]: e.target.value });
    }

  const submitBook = async (e: any) => {
      e.preventDefault();
      try {
          const response = await fetch(`http://localhost:5513/api/books/add`, {
            method: 'POST',
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })

        const data = await response.json();
        if(data.success) {
          console.log("Book Added Successfully")
        }else {
          console.log("Failed To save Book");
        }
      } catch (error) {
        console.log(error)
      }    
} 

  return (
    <div className='h-[80vh] flex justify-center items-center max-sm:px-2'>
        <form className='flex flex-col gap-5 w-[40vw] max-sm:w-full' onSubmit={submitBook}>
            <input type="text" placeholder='Book Name' name='title' onChange={handleOnChange} className='px-5 py-2 w-full border border-black placeholder:text-black focus:placeholder:text-gray-400 rounded text-black'/>
            <input type="text" placeholder='Description' name='description' onChange={handleOnChange} className='px-5 py-2 w-full border border-black placeholder:text-black focus:placeholder:text-gray-400 rounded text-black'/>
            <input type="text" placeholder='Book Image Url' name='bookImage' onChange={handleOnChange} className='px-5 py-2 w-full border border-black placeholder:text-black focus:placeholder:text-gray-400 rounded text-black'/>
            <input type="text" placeholder='Book PDF Url' name='bookPdfUrl' onChange={handleOnChange} className='px-5 py-2 w-full border border-black placeholder:text-black focus:placeholder:text-gray-400 rounded text-black'/>
            <input type="text" placeholder='Author' name='author' onChange={handleOnChange} className='px-5 py-2 w-full border border-black placeholder:text-black focus:placeholder:text-gray-400 rounded text-black'/>
            <button className='h-10 rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-primary-600 active:bg-primary-700 mt-5'>Add Book</button>
        </form>
    </div>
  )
}

export default Form