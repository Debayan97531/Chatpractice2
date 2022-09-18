const express = require('express');
const app = express();

const port = 8080;
app.get('/' ,(req,res) =>{
    res.status(200).send('welcome to my home page');
});
app.get('/about' ,(req,res) =>{
    res.send('welcome to my home about page');
});
app.get('/contact' ,(req,res) =>{
    res.send('welcome to my home contact page');
});
app.get('/temp' ,(req,res) =>{
    res.send('welcome to my home temp page');
});
app.get('/id' , (req,res) =>{
    res.send([{   //array of an object..
        id:1,
        name:'vinod',
        roll:14
    },
    {   //array of an object..
        id:2,
        name:'vin', 
        roll:19
    }
    ])
})
app.listen(port, () =>{
    console.log(`listening on ${port}`);
});