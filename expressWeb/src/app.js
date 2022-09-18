const express = require('express');
const path =require('path');
const app = express();
const port=process.env.PORT || 8000;


const static_path=path.join(__dirname , "../public");
app.use(express.static(static_path));


//app.get(route,callback)
app.get("", (req,res) =>{
    res.send("welcome to thapa tutorial...");
})
app.get("/about", (req,res) =>{
    res.send("welcome to about page...");
})
app.get("/weather", (req,res) =>{
    res.send("welcome to weather page...");
})
app.get("*", (req,res) =>{
    res.send("404 error page..");
})

app.listen(port, (req,res) =>{
    console.log(`listening to port ${port}`);
})