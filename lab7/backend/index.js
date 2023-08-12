const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    credentials:true,
    origin:'http://localhost:3000',
}));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post("/q1", (req, res)=>{
    const {num1, num2} = req.body;
    const tot = parseFloat(num1)+parseFloat(num2);
    res.status(200).json({"Total":tot});
})

app.listen(5000, ()=>{
    console.log("Server is listening on port 5000");
});



