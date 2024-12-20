import mongoose, { Schema, Document, model } from 'mongoose';
import { string } from 'zod';

export interface BookModel extends Document {
    title: string;
    description: string;
    coverImage: string;
    file: string;
    author: string;
    creatorName: string;
    creatorImage: string
}

const bookSchema: Schema<BookModel> = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 5
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 200,
    },
    coverImage: {
        type: String,
        required: true,
    },
    file: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
        minlength: 5
    },
    creatorName: {
        type: String
    },
    creatorImage: {
        type: String
    }
});


const Book = (mongoose.models.Book as mongoose.Model<BookModel>) || mongoose.model<BookModel>('Book', bookSchema);

export default Book;