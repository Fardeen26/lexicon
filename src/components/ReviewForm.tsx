"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'

export default function ReviewForm({ id }: { id: string }) {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === "unauthenticated") {
        router.replace('/signin')
    }

    const addReview = async () => {
        try {
            const response = await axios.post('/api/review', {
                bookId: id,
                author: session?.user?.name,
                comment: 'great book to read',
                rating: 5,
            })

            console.log(response.data)
            console.log("book review added successfully")
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold">Review this book</h2>
                <form className="w-full mt-4">
                    <div className="flex flex-col w-full space-y-4">
                        <div className="flex flex-col w-full">
                            <label htmlFor="rating" className="text-sm font-semibold">Rating</label>
                            <input type="number" id="rating" name="rating" min="1" max="5" className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="review" className="text-sm font-semibold">Review</label>
                            <textarea id="review" name="review" className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                    </div>
                </form>
                <button className="w-full p-2 bg-primary-600 text-white rounded-md" onClick={addReview}>Submit</button>
            </div>
        </div>
    )
}