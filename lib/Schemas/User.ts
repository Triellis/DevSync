import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    profilePic: {
        type: String,
        default: '',
    },
    githubName: {
        type: String,
        default: '',
    },
    githubBio: {
        type: String,
        default: '',
    },
    githubBlog:{
        type: String,
        default: '',
    },
    followers: {
        type: [String],
        default: [],
    },
    following: {
        type: [String],
        default: [],
    },
});

export default mongoose.models.User || mongoose.model('User', userSchema, 'users');