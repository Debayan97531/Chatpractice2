const express = require('express');
const app = express();
const port=4000;
const path = require('path');
const hbs = require('hbs');


const staticPath = path.join(__dirname,'../public');
const templatePath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//to set view engine
app.set('view engine','hbs');
app.set('views', templatePath); //template engine
hbs.registerPartials(partialsPath);


app.use(express.static(staticPath));


app.get("/", (req,res)=>{
    res.render('index' ,{
        channel : "thapa"
    });
});
app.get('/about', (req,res)=>{
        //console.log(req.query);   //query string
        res.render('about',{
            name : req.query.name,
            age : req.query.age
        });
});
app.get("/about/*", (req,res) =>{
    res.render("404",{
        errorcomment : "Oops page can't be found.."
    });
})
app.get("*", (req,res) =>{
    res.render("404",{
        errorcomment : "Oops page can't be found.."
    });
})

app.get( "/" , (req,res) =>{
    res.send('Hello from express server');
});

app.get( "/about2" , (req,res) =>{
    res.send('Hello from express  about server');
});

app.get( "/contact" , (req,res) =>{
    res.send('Hello from express contact server');
});

app.listen( port , () =>{
    console.log(`listening to port ${port}`);
});