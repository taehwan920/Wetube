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
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId, // comment의 ID를 가져와 저장.
        ref: "Comment" // Comment.js를 참조하여서.
    }]
});

const model = mongoose.model("Video", VideoSchema);

export default model;

//model은 schema의 인스턴스.