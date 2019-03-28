import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import routes from "./routes";

const s3 = new aws.S3({
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_PRIVATE_KEY,
    region: "ap-northeast-2"
});

const multerVideos = multer({
    storage: multerS3({
        s3,
        acl: "public-read",
        bucket: "sideproject-youtube/video"
    })
});
const multerAvatar = multer({ 
    storage: multerS3({
        s3,
        acl: "public-read",
        bucket: "sideproject-youtube/avatar"
    })
 });

export const uploadVideo = multerVideos.single('videoFile');
export const uploadAvatar = multerAvatar.single('avatar');

export const localMiddlewere = (req, res, next) => {
    res.locals.siteName = "Side Project, Cloning Youtube";
    res.locals.routes = routes;
    res.locals.loggedUser = req.user || {};
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
