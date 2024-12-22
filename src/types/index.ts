import { ReviewType } from "@/components/Reviews";
import { CreatorModel } from "@/models/Book";

export type Book = {
    _id: string;
    title: string;
    description: string;
    coverImage: string;
    file: string;
    author: string;
    creator?: CreatorModel;
    reviews?: ReviewType[];
};