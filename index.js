import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

//req: request object
//res: response object
const handleHome = (req, res) => res.send("Hello form home");
const handleProfile = (req, res) => res.send("My Profile");

//middlewere
const betweenHome = (req, res, next) => {
    console.log("between!");
    next();
};

app.get("/", betweenHome, handleHome);
app.get("/profile", betweenHome, handleProfile);

app.listen(PORT, handleListening);