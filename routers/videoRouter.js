import express from "express";
import routes from "../routes";
import { deleteVideo, getUpload, postUpload, videoDetail, postEditVideo, getEditVideo } from "../controllers/videoController";
import { uploadVideo } from "../middleware";

const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// VideoDetail
videoRouter.get(routes.videoDetail(), videoDetail);

// EditVideo
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

// deleteVideo
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;