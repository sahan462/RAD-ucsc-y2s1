const express = require('express');
const app = express();
const lab8 = require('./routes/lab8routes');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/greet', lab8);

app.listen(5000, ()=>{
    console.log("app is listening on port 5000");
})