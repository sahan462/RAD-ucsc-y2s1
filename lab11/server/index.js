const express = require('express');
const app = express();
const {connect} = require('mongoose');
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


//mfHpTgwZAvLD5c4z
connect("mongodb+srv://sahanchandrasena462:mfHpTgwZAvLD5c4z@cluster0.iryaj7f.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("connected to mongodb..."))
    .catch(() => console.log("Could not connect to mongodb..."));

const student = require("./routes/studentRoute");

app.use("/q1", student);



app.listen(5000, ()=>{
    console.log("App is listening on port 5000");
})