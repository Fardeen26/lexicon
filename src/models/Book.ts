import mongoose, { Schema, Document, Types } from 'mongoose';

export interface CreatorModel extends Document {
    name: string;
    email: string;
    image: string;
}

const creatorSchema = new Schema<CreatorModel>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
});

const Creator = mongoose.models.Creator || mongoose.model<CreatorModel>('Creator', creatorSchema);

export interface BookModel extends Document {
    title: string;
    description: string;
    coverImage: string;
    file: string;
    author: string;
    creator?: Types.ObjectId;
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
        maxlength: 2000
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
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'Creator',
        required: true
    },
});


const Book = (mongoose.models.Book as mongoose.Model<BookModel>) || mongoose.model<BookModel>('Book', bookSchema);

export { Book, Creator };