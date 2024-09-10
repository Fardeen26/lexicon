import React from 'react'

const Form = () => {
  return (
    <div className='h-[80vh] flex justify-center items-center max-sm:px-2'>
        <form action="" className='flex flex-col gap-5 w-[40vw] max-sm:w-full'>
            <input type="text" placeholder='Book Name' className='px-5 py-2 w-full border border-black placeholder:text-black focus:placeholder:text-gray-400 rounded text-black'/>
            <input type="text" placeholder='Description' className='px-5 py-2 w-full border border-black placeholder:text-black focus:placeholder:text-gray-400 rounded text-black'/>
            <input type="text" placeholder='Book Image Url' className='px-5 py-2 w-full border border-black placeholder:text-black focus:placeholder:text-gray-400 rounded text-black'/>
            <input type="text" placeholder='Book PDF Url' className='px-5 py-2 w-full border border-black placeholder:text-black focus:placeholder:text-gray-400 rounded text-black'/>
            <input type="text" placeholder='Author' className='px-5 py-2 w-full border border-black placeholder:text-black focus:placeholder:text-gray-400 rounded text-black'/>
            <button className='h-10 rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-primary-600 active:bg-primary-700 mt-5'>Add Book</button>
        </form>
    </div>
  )
}

export default Form