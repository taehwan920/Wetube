import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: "File URL is required" // fileURL값이 없는 Video를 생성하려 한다면 이 error메세지를 받게 될것.
    },
    title: {
        type: String,
        required: "title is required"
    },
    description: String,
    views: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const model = mongoose.model("Video", VideoSchema);

export default model;