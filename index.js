import express from "express";
import morgan from "morgan";

const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

//req: request object
//res: response object
const handleHome = (req, res) => res.send("Hello form home");
const handleProfile = (req, res) => res.send("My Profile");

app.use(morgan("dev"))

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);