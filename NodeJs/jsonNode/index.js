/*const fs = require("fs");

const bioData = {
    name: "vinod",
    age:23,
    channel:"harry code"
};*/
//console.log(jsonData);//'can't get direct .name  .channel
//{"name":"vinod","age":23,"channel":"harry code"}

/*const objData=JSON.parse(jsonData);
console.log(objData);
//{ name: 'vinod', age: 23, channel: 'harry code' }
console.log(objData.channel);*/

//creating new file
//console.log(bioData.name);

//const jsonData =JSON.stringify(bioData);

/*fs.writeFile('json1.json',jsonData, (err) =>{
        console.log("done it..");
       //  console.log(err);
});*/

/*fs.readFile('json1.json','utf-8', (err,data) =>{
    console.log(data);
    const orgData=JSON.parse(data);
    console.log(orgData);
})*/

//JS object notation

const fs = require('fs');
const bioData ={
    name: 'deb',
    age: 24,
    degree : 'btech',
    salary : 8
};

//console.log(bioData.name);

const jsonData=JSON.stringify(bioData);
console.log(jsonData);

const objData=JSON.parse(jsonData);
console.log(objData);

/*fs.writeFile('json2.json', jsonData, (err) =>{
   console.log("done");
});*/

fs.readFile( 'json2.json', 'utf-8', (err,data) =>{
   // console.log(data);
   const orgData=JSON.parse(data);
   console.log(data);
   console.log(orgData);
})



