const express = require('express');
const app = express();
const {connect} = require('mongoose');







app.listen(5000, ()=>{
    console.log("App is listening on port 5000");
})