// import mongoose, { Schema, Document } from 'mongoose';

// export interface CreatorModel extends Document {
//     name: string;
//     email: string;
//     image: string;
// }

// const creatorSchema = new Schema<CreatorModel>({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     image: {
//         type: String,
//         required: true
//     },
// });

// const Creator = mongoose.models.Creator || mongoose.model<CreatorModel>('Creator', creatorSchema);

// export default Creator;