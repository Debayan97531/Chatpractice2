const fs = require('fs');
const http = require('http');

const data= fs.readFileSync(`${__dirname}/UserApi/userapi.json`, 'utf-8');
const objData=JSON.parse(data);


const server = http.createServer( (req,res) =>{
    //console.log(req.url);

    if(req.url == "/"){
        res.end("hello home");
        //res.end();
    }
    if(req.url == "/contact")
    {
        res.end("hello contact");
        //res.end();
    }
    if(req.url == "/about")
    {
        res.end("hello about");
        //res.end();
    }
    else if(req.url == '/userapi')
    {
       /* fs.readFile(
                `${__dirname}/UserApi/userapi.json`, 'utf-8' , (err,data) =>{
                    console.log(data);
                    const objData=JSON.parse(data);
                    res.end(objData[0].name);
                }
            )*/
        res.writeHead(200,{'content-type':'application/json'});
        res.end(objData[2].name);
    }
    else
    {
        res.writeHead(404 , { "Content-type": "text/html" });
        res.end("<h2>Hello from my side</h2>");
        //res.end();
    }
})
server.listen(8001,'127.0.0.1', () =>{
    console.log('listening on port 8001');
});