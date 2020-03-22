import express from "express";
import routes from "../routes";
import { deleteVideo, getUpload, postUpload, videoDetail, postEditVideo, getEditVideo } from "../controllers/videoController";
import { uploadVideo, onlyPrivate } from "../middleware";

const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

// VideoDetail
videoRouter.get(routes.videoDetail(), videoDetail);

// EditVideo
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

// deleteVideo
videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

export default videoRouter;