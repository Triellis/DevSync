import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    tags:{
        type: [String],
        default: [],
    },
    user: {
        type: String,
        required: true,
    },
    postedAt: {
        type: Date,
        default: Date.now,
    },
    likes: {
        type: [String],
        default: 0,
    },
    comments: {
        type: [String],
        default: [],
    },
});

export default mongoose.models.Post || mongoose.model('Post', postSchema, 'posts');