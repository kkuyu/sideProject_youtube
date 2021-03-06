import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(
    process.env.PRODUCTION ? process.env.MONGO_URL_PROD : process.env.MONGO_URL,
        {
        useNewUrlParser: true,
        useFindAndModify: false
    }
);

const db = mongoose.connection;

const handelopen = () => console.log("Connected to DB");
const handelerror = (error) => console.log(`Error on DB Connection: ${error}`);

db.once("open", handelopen);
db.on("error", handelerror)