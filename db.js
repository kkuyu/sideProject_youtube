import mongoose from "mongoose";

// mongodb://localhost:포트번호/프로젝트
mongoose.connect("mongodb://localhost:27017/youtube",{
    useNewUrlParser: true,
    useFindAndModify:false
});

const db = mongoose.connection;

const handelopen = () => console.log("Connected to DB");
const handelerror = (error) => console.log(`Error on DB Connection: ${error}`);

db.once("open", handelopen);
db.on("error", handelerror)