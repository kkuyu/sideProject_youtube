const express = require('express');
const app = express();

const PORT = 4000;

function handleListening(){
    console.log(`Listening on: http://localhost:${PORT}`)
}

function handleHome(req, res){
    //req: request object
    //res: response object
    res.send("Hello form home")
}

function handleProfile(req, res){
    res.send("My Profile")
}

app.get("/", handleHome)

app.get("/profile", handleProfile)

app.listen(PORT, handleListening);