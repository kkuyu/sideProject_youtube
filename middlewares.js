import multer from "multer";
import routes from "./routes";

const multerVideos = multer({ dest: 'uploads/videos/' })

export const localMiddlewere = (req, res, next) => {
    res.locals.siteName = "Side Project, Cloning Youtube";
    res.locals.routes = routes;
    res.locals.user = req.user || null;
    next();
}

export const onlyPublic = (req, res, next) => {
    if(req.user){
        res.redirect(routes.home);
    }else{
        next();
    }
}

export const onlyPrivate = (req, res, next) => {
    if(req.user){
        next();
    }else{
        res.redirect(routes.home);
    }
}

export const uploadVideo = multerVideos.single('videoFile');