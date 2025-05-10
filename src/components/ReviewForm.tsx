"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { LuStar, LuLoader2 } from "react-icons/lu";
import { toast } from "sonner";

interface ReviewFormProps {
    id: string;
    onReviewAdded: () => void;
}

export default function ReviewForm({ id, onReviewAdded }: ReviewFormProps) {
    const [rating, setRating] = useState<number>(1);
    const [comment, setComment] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { data: session, status } = useSession();
    const router = useRouter();


    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (status === 'unauthenticated') {
            toast.error("You need to sign in to add a review");
            return router.replace('/signin');
        }

        if (!comment) {
            toast.error("Please add a comment");
            return;
        }
        setIsLoading(true);
        try {
            await axios.post('/api/review', {
                comment: comment,
                rating: rating,
                profileImage: session?.user?.image ?? '#',
                bookId: id,
                author: session?.user?.name ?? 'Guest',
            })
            setComment("");
            setRating(1);
            onReviewAdded();
            toast.success('Review added successfully')
        } catch (error) {
            toast.error('Error while adding review')
            console.log("error", error)
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex justify-center w-full px-10 max-sm:px-0 mt-12">
            <Card className="w-full max-w-[80vw] max-sm:max-w-full bg-transparent border-none shadow-none">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Write a Review</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Your Rating</label>
                            <div className="flex space-x-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <LuStar
                                        key={star}
                                        className={`w-6 h-6 cursor-pointer ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'
                                            }`}
                                        onClick={() => setRating(star)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="review" className="block mb-2 text-sm font-medium">Your Review</label>
                            <Textarea
                                id="review"
                                placeholder="Share your thoughts about this book..."
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className="w-full"
                                rows={6}
                            />
                        </div>
                        <Button type="submit" className="w-full">
                            {isLoading ? <span className="flex items-center"><LuLoader2 className="animate-spin mr-2" /> Submitting</span> : 'Submit Review'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}