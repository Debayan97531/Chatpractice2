//creating own web server
const fs = require("fs");
const http = require("http");
const server = http.createServer((req, res) => {
 //const data = fs.readFileSync(`${__dirname}/UserApi/userapi.json`, "utf-8");
 const data=fs.readFileSync(`${__dirname}/UserApi/userapi.json`,'utf-8');
  //console.log(data);
  const objData = JSON.parse(data);

  //console.log(req.url);
  if (req.url == "/") {
    res.end("Hello from the other side");
  } else if (req.url == "/about") {
    res.end("Hello from the aboutUs side");
  } else if (req.url == "/contact") {
    res.end("Hello from the contactUs side");
  } else if (req.url == "/userapi") {
    /*  fs.readFile(`${__dirname}/UserApi/userapi.json`,"utf-8",(err,data) =>{
            //console.log(data);
            //res.end(data);
            //const objData=JSON.parse(data);
            res.end(objData[2].name);//array of an object
        });*/
    // res.end("hello from userapi side");
    res.writeHead(200, { "content-type": "application/json" });
    res.end(objData[2].name);
    //res.end(objData);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h2>404 error page...</h2>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("listening on port 8000");
});

