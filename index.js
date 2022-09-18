const fs=require("fs");


//creating a new file
//fs.writeFileSync('read.txt',"welcome to here");
//fs.writeFileSync('read.txt','thapa technical..learning from it');

//fs.appendFileSync('read.txt','great to see u all..');

//const buf_data=fs.readFileSync('read.txt');
//console.log(buf_data);
//buffer not available in js
//used to store binary data 

//org_data=buf_data.toString();
//console.log(org_data);

fs.renameSync('readwrite.txt','readwriteedit.txt');




