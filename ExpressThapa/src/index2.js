const express=require('express');
const path = require('path');
const app=express();
const hbs=require('hbs');
const port=8001;

//built in middleware
//console.log(path.join(__dirname,'..'));
const staticPath = path.join(__dirname, '../public');
//const templatePath= path.join(__dirname,'../templates/views');
const partialsPath =path.join(__dirname,'../views/partials');

//to set view engine
app.set('view engine','hbs');
//app.set('views',templatePath);
hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));

app.get('',(req,res) =>{
    res.render('index.hbs');
});
 
app.get('/about',(req,res)=>{
        res.render('about');
})

//app.get(route,callback);
app.get('/', (req,res)=>{
        res.send('Hello from express server...');
})

app.get('/about/*' , (req,res) =>{
    res.render('404',{
        errorcomment: " Oops about  page can't found.."
    });
})

app.get('*' , (req,res) =>{
    res.render('404',{
        errorcomment: " Oops page can't found.."
    });
})

app.listen( port, () =>{
    console.log(`listening to port ${port}`);
})