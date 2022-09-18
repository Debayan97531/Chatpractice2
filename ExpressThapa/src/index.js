const path = require('path');
const express= require('express');
const app=express();

//relative absolute
//console.log(__dirname);

//console.log(path.join(__dirname,'../public'));
const staticPath=path.join(__dirname,'../public');

app.use(express.static(staticPath));//builtin middleware



//app.get(route,callback);
app.get( "/", (req,res) =>{
    res.send("Hello  world from debayan");
})
app.get( "/about", (req,res) =>{
    res.send("Hello  world from debayan about");
})

app.listen(8000, () =>{
    console.log("listening on port 8000");
});

/*
API
get - read
post -create
put - update
delete - delete */
