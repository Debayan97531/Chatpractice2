
const express = require('express');
var app= express();
const path = require('path');
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname,'../pub;ic');

app.use(express.static(publicPath));

app.listen(port , () =>{
    console.log(`Server is on port ${port}..`);
});