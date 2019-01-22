import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

//req: request object
//res: response object
const handleHome = (req, res) => res.send("Hello form home");
const handleProfile = (req, res) => res.send("My Profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);
app.get("/profile", handleProfile);

export default app;