import mongoose, { Schema, Document, Types } from 'mongoose';

// Creator Schema
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

// Review Schema

export interface ReviewModel extends Document {
    comment: string;
    rating: number;
    createdAt: Date;
    author: string;
    profileImage: string;
}

const reviewSchema: Schema<ReviewModel> = new Schema({
    comment: String,
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    profileImage: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    author: {
        type: String,
        required: true
    }
});

const Review = (mongoose.models.Review as mongoose.Model<ReviewModel>) || mongoose.model<ReviewModel>('Review', reviewSchema);

// Book Schema

export interface BookModel extends Document {
    title: string;
    description: string;
    coverImage: string;
    file: string;
    author: string;
    creator?: Types.ObjectId;
    reviews?: Types.ObjectId[];
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
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
});


const Book = (mongoose.models.Book as mongoose.Model<BookModel>) || mongoose.model<BookModel>('Book', bookSchema);

export { Book, Creator, Review };