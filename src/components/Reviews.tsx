import { LuStar } from "react-icons/lu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import dayjs from 'dayjs';

export interface ReviewType {
    _id: string;
    comment: string;
    rating: number;
    author: string;
    createdAt: Date;
    profileImage?: string;
}

export default function Reviews({ book }: { book: any }) {
    return (
        <div className="flex justify-center w-full px-10 mt-12">
            <Card className="w-full max-w-[80vw] bg-transparent border-none shadow-none">
                <CardContent className="flex flex-col items-start border-t border-gray-800 mt-6 pt-6">
                    <h3 className="text-xl font-semibold mb-4">Recent Reviews</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        {book.reviews.map((review: ReviewType, index: number) => (
                            <div
                                key={index}
                                className="border border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]  p-4 rounded-lg space-y-3"
                            >
                                <div className="flex items-center space-x-3">
                                    <Avatar className="w-9 h-9">
                                        <AvatarImage
                                            src={
                                                review.profileImage
                                                    ? review.profileImage
                                                    : "https://via.placeholder.com/48"
                                            }
                                        />
                                        <AvatarFallback>
                                            {review.author.charAt(0)}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="w-full flex items-center gap-2">
                                            <span className="block font-semibold dark:text-white text-black">
                                                {review.author}
                                            </span>
                                            <span className="text-[10px] dark:text-white text-black">
                                                {dayjs(review.createdAt).format('MMM D, YY')}
                                            </span>
                                        </div>
                                        <div className="flex">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <LuStar
                                                    key={star}
                                                    className={`w-4 h-4 ${star <= review.rating
                                                        ? "text-yellow-400 fill-yellow-400"
                                                        : "text-gray-500"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm dark:text-gray-300 text-black">
                                    {review.comment}
                                </p>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
