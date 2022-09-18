const http = require('http');
const fs = require('fs');
var requests = require('requests');

const homeFile = fs.readFileSync('home.html','utf-8');

const replaceVal = (tempVal,orgVal) =>{
    let temperature=tempVal.replace("{%tempval%}",orgVal.main.temp);
  //  temperature=tempVal.replace("{%tempval%}",orgVal.main.temp);
    temperature=tempVal.replace("{%tempmin%}",orgVal.main.temp_min);
    temperature=tempVal.replace("{%tempmax%}",orgVal.main.temp_max);
    temperature=tempVal.replace("{%location%}",orgVal.name);
    temperature=tempVal.replace("{%country%}",orgVal.sys.country);
    //temperature=tempVal.replace("{%tempstatus%}",orgVal.weather[0].main);


    return temperature;
}

const server = http.createServer( (req,res) =>{
    if(req.url == "/")
    {
        requests(
            'http://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=85e6228d8a6530bae99cd9e77a86cf7c'
          )
        .on('data',  (chunk) => {
            const objData=JSON.parse(chunk);
            //console.log(chunk);
            const arrData=[objData];
            //console.log(arrData[0].main.temp);
            /*const realTimeData = arrData.map( (val) =>{
                replaceVal(homeFile,val);
            }).join('');*/
            const realTimeData = arrData.map( (val) => replaceVal(homeFile,val))
            .join("");
            res.write(realTimeData);
            //console.log(realTimeData);
        })
        .on('end', (err) => {
        if (err) return console.log('connection closed due to errors', err);

        res.end();
        //console.log('end');
        });
    }
});

server.listen(3000, '127.0.0.1');