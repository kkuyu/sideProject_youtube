import multer from "multer";
import routes from "./routes";

const multerVideos = multer({ dest: 'uploads/videos/' })

export const localMiddlewere = (req, res, next) => {
    res.locals.siteName = "Side Project, Cloning Youtube";
    res.locals.routes = routes;
    res.locals.user = req.user || {};
    next();
}

export const uploadVideo = multerVideos.single('videoFile');